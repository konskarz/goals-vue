<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { date } from "quasar";
import apiClient from "../stores/api.client";
import GoalSelect from "../components/GoalSelect.vue";
import WeekTimelineEntry from "../components/WeekTimelineEntry.vue";

const TASKS_FILTER_KEY = "Tasks-Filter";
const currentDate = date.startOfDate(new Date(), "day");
const currentMonday = date.subtractFromDate(currentDate, {
  days: date.getDayOfWeek(currentDate) - 1,
});
const currentWeek = date.formatDate(currentDate, "YYYY-w");
const filter = ref({
  done: true,
  recurring: true,
  goal: null,
});
const { data, mutate } = apiClient.read("/tasks/");
const tasks = computed(() =>
  data.value.filter((task) => {
    const passed = new Date(task.planned.slice(0, 10)) < currentMonday;
    if (passed && filter.value.done && task.done) {
      return false;
    } else if (passed && filter.value.recurring && task.group_id) {
      return false;
    } else if (filter.value.goal && filter.value.goal !== task.goal) {
      return false;
    } else return true;
  })
);
const calendar = computed(() => {
  const length = tasks.value.length;
  const sorted = length
    ? [...tasks.value].sort(
        (a, b) => Date.parse(a.planned) - Date.parse(b.planned)
      )
    : null;
  const start = length ? new Date(sorted[0].planned.slice(0, 10)) : currentDate;
  const last = length
    ? new Date(sorted[sorted.length - 1].planned.slice(0, 10))
    : date.addToDate(start, { days: 7 });
  const end = date.addToDate(last, { days: 7 });
  let startMonday = date.subtractFromDate(start, {
    days: date.getDayOfWeek(start) - 1,
  });
  const endMonday = date.subtractFromDate(end, {
    days: date.getDayOfWeek(end) - 1,
  });
  let calendar = {};
  while (startMonday <= endMonday) {
    calendar[date.formatDate(startMonday, "YYYY-w")] = {
      day: date.formatDate(startMonday, "YYYY-MM-DD"),
      tasks: [],
    };
    startMonday = date.addToDate(startMonday, { days: 7 });
  }
  if (length) {
    sorted.forEach((task) => {
      calendar[date.formatDate(task.planned, "YYYY-w")].tasks.push(task);
    });
  }
  return calendar;
});
onMounted(() => {
  const data = localStorage.getItem(TASKS_FILTER_KEY);
  if (data) filter.value = JSON.parse(data);
});
watch(
  () => filter.value,
  (data) => {
    localStorage.setItem(TASKS_FILTER_KEY, JSON.stringify(data));
  },
  { deep: true }
);
</script>

<template>
  <q-page padding>
    <q-toolbar>
      <q-toolbar-title>Tasks</q-toolbar-title>
      <GoalSelect
        v-model="filter.goal"
        label="For Goal"
        dense
        borderless
        class="col-6 col-sm-3 col-lg-2"
      />
      <q-btn flat round icon="filter_list">
        <q-menu>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>Hide passed done</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-toggle v-model="filter.done" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>Hide passed recurring</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-toggle v-model="filter.recurring" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
    <q-timeline v-if="calendar" layout="dense" class="q-px-md">
      <template v-for="(week, key) in calendar" :key="key">
        <WeekTimelineEntry
          v-if="week.day"
          :color="key === currentWeek ? 'orange' : ''"
          :week="week"
          @mutate="mutate"
        />
      </template>
    </q-timeline>
  </q-page>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { date } from "quasar";
import apiClient from "../stores/api.client";
import GoalSelect from "../components/GoalSelect.vue";
import WeekTimelineEntry from "../components/WeekTimelineEntry.vue";

const TASKS_FILTER_KEY = "Tasks-Filter";
const getMonday = (srcDate) =>
  date.subtractFromDate(srcDate, {
    days: date.getDayOfWeek(srcDate) - 1,
  });
const getWeek = (srcDate) => date.formatDate(srcDate, "YYYY-w");
const currentDate = date.startOfDate(new Date(), "day");
const currentMonday = getMonday(currentDate);
const currentWeek = getWeek(currentDate);
const filter = ref({
  done: true,
  recurring: true,
  goal: null,
});
const { data, mutate } = apiClient.read("/tasks/");
const tasks = computed(() =>
  data.value
    .filter((task) => {
      const passed = new Date(task.planned.slice(0, 10)) < currentMonday;
      if (passed && filter.value.done && task.done) {
        return false;
      } else if (passed && filter.value.recurring && task.group_id) {
        return false;
      } else if (filter.value.goal && filter.value.goal !== task.goal) {
        return false;
      } else return true;
    })
    .sort((a, b) => Date.parse(a.planned) - Date.parse(b.planned))
);
const calendar = computed(() => {
  const build = (weeks, startMonday, endMonday) => {
    while (startMonday <= endMonday) {
      weeks[getWeek(startMonday)] = {
        day: date.formatDate(startMonday, "YYYY-MM-DD"),
        tasks: [],
      };
      startMonday = date.addToDate(startMonday, { days: 7 });
    }
    return weeks;
  };
  if (tasks.value.length) {
    const start = new Date(tasks.value[0].planned.slice(0, 10));
    const end = date.addToDate(
      new Date(tasks.value[tasks.value.length - 1].planned.slice(0, 10)),
      { days: 7 }
    );
    const weeks = build({}, getMonday(start), getMonday(end));
    tasks.value.forEach((task) => {
      weeks[getWeek(task.planned)].tasks.push(task);
    });
    return weeks;
  }
  return build({}, currentMonday, date.addToDate(currentMonday, { days: 14 }));
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

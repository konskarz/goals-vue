<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { date } from "quasar";
import apiClient from "../stores/api.client";
import GoalSelect from "../components/GoalSelect.vue";
import WeekTimelineEntry from "../components/WeekTimelineEntry.vue";

const GOAL_FILTER_KEY = "Goal-Filter";
const currentDate = new Date();
const currentMonday = date.subtractFromDate(currentDate, {
  days: date.getDayOfWeek(currentDate) - 1,
});
const currentWeek = date.formatDate(currentDate, "YYYY-w");
const goal = ref(null);
const filter = ref({
  done: true,
  recurring: true,
});
const { data, mutate } = apiClient.read("/tasks/");
const tasks = computed(() =>
  data.value.filter((task) => {
    const passed = new Date(task.planned).getDay() < currentMonday.getDay();
    if (passed && filter.value.done && task.done) {
      return false;
    } else if (passed && filter.value.recurring && task.group_id) {
      return false;
    } else if (goal.value && goal.value !== task.goal) {
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
  const start = length ? new Date(sorted[0].planned) : currentDate;
  const last = length
    ? new Date(sorted[sorted.length - 1].planned)
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
  const stored = localStorage.getItem(GOAL_FILTER_KEY);
  if (stored) goal.value = parseInt(stored);
});
watch(goal, (data) => {
  if (data) localStorage.setItem(GOAL_FILTER_KEY, data);
  else localStorage.removeItem(GOAL_FILTER_KEY);
});
</script>

<template>
  <q-page padding>
    <q-toolbar>
      <q-toolbar-title>Tasks</q-toolbar-title>
      <GoalSelect
        v-model="goal"
        label="For Goal"
        dense
        borderless
        class="col-6 col-sm-3 col-lg-2"
      />
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

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { date } from "quasar";
import { useApiClient } from "../stores/ApiClient";
import GoalSelect from "../components/GoalSelect.vue";
import WeekTimelineEntry from "../components/WeekTimelineEntry.vue";

const GOAL_FILTER_KEY = "Goal-Filter";
const current = date.formatDate(new Date(), "YYYY-w");
const goal = ref(null);
const url = computed(() =>
  goal.value ? "/plan/?goal=" + goal.value : "/plan/"
);
const { query } = useApiClient();
const { data: plan, refetch: mutate } = query(url);
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
      <q-toolbar-title>Plan</q-toolbar-title>
      <GoalSelect
        v-model="goal"
        label="For Goal"
        dense
        borderless
        class="col-6 col-sm-3 col-lg-2"
      />
    </q-toolbar>
    <q-timeline v-if="plan" layout="dense" class="q-px-md">
      <template v-for="(week, key) in plan" :key="key">
        <WeekTimelineEntry
          v-if="week.day"
          :color="key === current ? 'orange' : ''"
          :week="week"
          @mutate="mutate"
        />
      </template>
    </q-timeline>
  </q-page>
</template>

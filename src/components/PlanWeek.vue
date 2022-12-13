<script setup>
import { computed } from "vue";
import Task from "./PlanWeekTask.vue";
const prop = defineProps({
  week: {
    type: Object,
    required: true,
  },
  slots: {
    type: Array,
    required: true,
  },
});
const title = computed(() => "Week " + prop.week.week);
const subtitle = computed(() =>
  [prop.week.quarter, prop.week.month, prop.week.day].join(" · ")
);
</script>

<template>
  <q-timeline-entry :title="title" :subtitle="subtitle">
    <q-list v-if="week.tasks && week.tasks.length" dense>
      <Task
        v-for="task in week.tasks"
        :key="task.id"
        :task="task"
        :slots="slots"
      ></Task>
    </q-list>
  </q-timeline-entry>
</template>

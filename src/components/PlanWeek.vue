<script setup>
import Task from "./PlanWeekTask.vue";
defineProps({
  week: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <q-item class="q-pt-md">
    <q-item-section>
      <q-item-label>Week {{ week.week }}</q-item-label>
      <q-item-label caption>
        {{ week.quarter }} · {{ week.month }} · {{ week.day }}
      </q-item-label>
      <q-list v-if="week.tasks && week.tasks.length" dense class="q-mt-sm">
        <Task v-for="task in week.tasks" :key="task.id" :task="task"></Task>
      </q-list>
    </q-item-section>
  </q-item>
</template>

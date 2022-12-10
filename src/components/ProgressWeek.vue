<script setup>
import Goal from "./ProgressWeekGoal.vue";
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
      <q-list v-if="week.goals && week.goals.length" dense class="q-mt-sm">
        <Goal v-for="goal in week.goals" :key="goal.id" :goal="goal"></Goal>
      </q-list>
    </q-item-section>
  </q-item>
</template>

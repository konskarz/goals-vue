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
  <li>
    <div class="d-flex w-100 justify-content-between">
      <h2 class="mb-1">Week {{ week.week }}</h2>
    </div>
    <p class="mb-1">{{ week.quarter }} · {{ week.month }} · {{ week.day }}</p>
    <ul v-if="week.goals && week.goals.length">
      <Goal v-for="goal in week.goals" :key="goal.id" :goal="goal"></Goal>
    </ul>
  </li>
</template>

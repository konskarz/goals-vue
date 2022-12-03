<script>
import Task from "@/components/ProgressWeekGoal.vue";
export default {
  name: "Week",
  components: {
    Task,
  },
  props: {
    week: Object,
  },
};
</script>
<template>
  <li>
    <div class="d-flex w-100 justify-content-between">
      <h2 class="mb-1">Week {{ week.week }}</h2>
    </div>
    <p class="mb-1">{{ week.quarter }} · {{ week.month }} · {{ week.day }}</p>
    <ul v-if="week.goals && week.goals.length">
      <Task v-for="goal in week.goals" :goal="goal" :key="goal.id"></Task>
    </ul>
  </li>
</template>

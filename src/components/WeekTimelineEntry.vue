<script setup>
import TaskListItem from "./TaskListItem.vue";

const props = defineProps({
  week: {
    type: Object,
    required: true,
  },
});
// const emit = defineEmits(["mutate"]);
const subtitle = [
  "Week " + props.week.week,
  props.week.quarter,
  // props.week.month,
  props.week.day,
].join(" · ");
</script>

<template>
  <q-timeline-entry :subtitle="subtitle">
    <q-list v-if="week.tasks && week.tasks.length">
      <TaskListItem
        v-for="task in week.tasks"
        :key="task.id"
        :task="task"
        @mutate="$emit('mutate')"
      />
    </q-list>
  </q-timeline-entry>
</template>

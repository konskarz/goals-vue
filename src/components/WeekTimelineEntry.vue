<script setup>
import TaskListItem from "./TaskListItem.vue";

const props = defineProps({
  week: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["mutate"]);
const title = "Week " + props.week.week;
const subtitle = [props.week.quarter, props.week.month, props.week.day].join(
  " · "
);
</script>

<template>
  <q-timeline-entry :title="title" :subtitle="subtitle">
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

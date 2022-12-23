<script setup>
import { date } from "quasar";
import apiClient from "stores/api.client";
import TaskListItem from "./TaskListItem.vue";

const props = defineProps({
  week: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["mutate"]);
const subtitle = [
  "Week " + props.week.week,
  props.week.quarter,
  // props.week.month,
  props.week.day,
].join(" · ");

function onDragStart(e, task) {
  const data = {
    id: task.id,
    day: date.getDayOfWeek(task.planned),
    week: props.week.week,
  };
  e.dataTransfer.setData("text", JSON.stringify(data));
  e.dataTransfer.dropEffect = "move";
}
function onDrop(e, week) {
  e.preventDefault();
  const data = JSON.parse(e.dataTransfer.getData("text"));
  if (data.week === week.week) return;
  const newDate = date.addToDate(new Date(week.day), {
    days: data.day - 1,
  });
  apiClient
    .update("/api/v2/tasks/" + data.id + "/", {
      planned: newDate.toISOString(),
    })
    .then(() => emit("mutate"));
}
</script>

<template>
  <q-timeline-entry
    :subtitle="subtitle"
    @dragover.prevent
    @dragenter.prevent
    @drop="onDrop($event, week)"
  >
    <q-list>
      <TaskListItem
        v-for="task in week.tasks"
        :key="task.id"
        :task="task"
        draggable="true"
        @mutate="$emit('mutate')"
        @dragstart="onDragStart($event, task)"
      />
    </q-list>
  </q-timeline-entry>
</template>

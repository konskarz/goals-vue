<script setup>
import "drag-drop-touch";
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
const monday = new Date(props.week.day);
const formated = date.formatDate(monday, "w-YYYY-Q-MMM D").split("-");
const subtitle = [
  "Week " + formated[0],
  formated[1] + " / Q" + formated[2],
  formated[3],
].join(" · ");

function onDragStart(e, task) {
  const data = {
    id: task.id,
    day: date.getDayOfWeek(task.planned),
    week: formated[0],
  };
  e.dataTransfer.setData("text", JSON.stringify(data));
  e.dataTransfer.dropEffect = "move";
}
function onDrop(e) {
  const data = JSON.parse(e.dataTransfer.getData("text"));
  if (data.week === formated[0]) return;
  const newDate = date.addToDate(monday, {
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
    @drop.prevent="onDrop($event)"
  >
    <q-list v-if="week.tasks && week.tasks.length">
      <TaskListItem
        v-for="task in week.tasks"
        :key="task.id"
        :task="task"
        draggable="true"
        @dragstart="onDragStart($event, task)"
        @touchmove:native="(e) => {}"
        @mutate="$emit('mutate')"
      />
    </q-list>
  </q-timeline-entry>
</template>

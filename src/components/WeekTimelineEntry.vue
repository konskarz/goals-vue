<script setup>
import { computed } from "vue";
import { date } from "quasar";
import { useTaskStore } from "../stores/TaskStore";
import TaskListItem from "./TaskListItem.vue";
import "drag-drop-touch";

const props = defineProps({
  week: {
    type: Object,
    required: true,
  },
});
const store = useTaskStore();
const sorted = computed(() => {
  return props.week.tasks.length
    ? [...props.week.tasks].sort((a, b) => b.target - a.target)
    : null;
});
const monday = new Date(props.week.day);
const formated = date.formatDate(monday, "w-Q-YYYY-MMM D").split("-");
const subtitle = [
  "Week " + formated[0],
  "Q" + formated[1],
  formated[2],
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
  const changed = {
    planned: date
      .addToDate(monday, {
        days: data.day - 1,
      })
      .toISOString(),
  };
  store.updateItem(data.id + "/", changed).then(() => store.refetch());
}
</script>

<template>
  <q-timeline-entry
    :subtitle="subtitle"
    @dragover.prevent
    @dragenter.prevent
    @drop.prevent="onDrop($event)"
  >
    <q-list v-if="sorted">
      <TaskListItem
        v-for="task in sorted"
        :key="task.id"
        :task="task"
        @ondragstart="onDragStart"
      />
    </q-list>
  </q-timeline-entry>
</template>

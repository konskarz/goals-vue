<script setup>
import { computed } from "vue";
import { useQuasar } from "quasar";
import { useTaskStore } from "../stores/TaskStore";
// import { useTimeStore } from "../stores/TimeStore";
import { fireworks } from "../lib/fireworks";
import ProgressDialog from "./ProgressDialog.vue";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
const $q = useQuasar();
const taskStore = useTaskStore();
// const timeStore = useTimeStore();
const showProgress = computed(() => props.task.target > 1 && !props.task.done);
const progress = computed(() =>
  showProgress.value ? props.task.performance / props.task.target : 0
);
const caption = computed(() =>
  [
    props.task.on_track + "%",
    "·",
    props.task.performance,
    "of",
    props.task.target,
  ].join(" ")
);
function showProgressDialog() {
  $q.dialog({
    component: ProgressDialog,
    componentProps: { task: props.task },
  }).onOk((data) => {
    if (data.performance !== props.task.performance) {
      if (data.performance >= props.task.target) fireworks();
      const changed = { performance: data.performance };
      taskStore
        .updateItem(props.task.id + "/", changed)
        .then(() => taskStore.refetch());
    }
    /* if (data.duration) {
      timeStore
        .createItem({
          task: props.task.id,
          start: new Date().toISOString(),
          end: null,
          duration: data.duration,
          description: "",
        })
        .then(() => {
          timeStore.refetch();
        });
    } */
  });
}
</script>

<template>
  <q-item clickable :active="Boolean(task.done)" active-class="text-positive">
    <q-item-section v-if="task.done" thumbnail>
      <q-icon name="done" color="positive" />
    </q-item-section>
    <q-item-section v-else-if="task.group_id" thumbnail>
      <q-icon name="event_repeat" />
    </q-item-section>
    <q-item-section
      v-else
      thumbnail
      style="cursor: grab"
      draggable="true"
      @dragstart="$emit('ondragstart', $event, task)"
      @touchmove:native="(e) => {}"
    >
      <q-icon name="drag_indicator" />
    </q-item-section>
    <q-item-section @click="showProgressDialog">
      <q-item-label>{{ task.name }}</q-item-label>
      <q-item-label v-if="showProgress" caption>{{ caption }}</q-item-label>
      <q-item-label v-if="showProgress">
        <q-linear-progress :value="progress" color="positive" />
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

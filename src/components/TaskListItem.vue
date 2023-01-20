<script setup>
import { computed } from "vue";
import { useQuasar } from "quasar";
import ProgressDialog from "./ProgressDialog.vue";
import apiClient from "../stores/api.client";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["mutate", "ondragstart"]);
const $q = useQuasar();
const showProgress = computed(() => props.task.target > 1);
const progress = computed(() =>
  showProgress.value ? props.task.performance / props.task.target : 0
);
const caption = computed(() =>
  [props.task.performance, "of", props.task.target].join(" ")
);
function showProgressDialog() {
  $q.dialog({
    component: ProgressDialog,
    componentProps: { task: props.task },
  }).onOk((data) => {
    if (data.performance !== props.task.performance) {
      apiClient
        .update("/tasks/" + props.task.id + "/", {
          performance: data.performance,
        })
        .then(() => emit("mutate"));
    }
    if (data.duration) {
      apiClient
        .create("/times/", {
          task: props.task.id,
          start: new Date().toISOString(),
          end: null,
          duration: data.duration,
          description: "",
        })
        .then(() => emit("mutate"));
    }
  });
}
</script>

<template>
  <q-item clickable :class="task.done ? 'text-grey' : ''">
    <q-item-section
      thumbnail
      style="cursor: grab"
      draggable="true"
      @dragstart="$emit('ondragstart', $event, task)"
      @touchmove:native="(e) => {}"
    >
      <q-icon name="drag_indicator" />
    </q-item-section>
    <q-item-section v-if="task.group_id" thumbnail>
      <q-icon name="event_repeat" />
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

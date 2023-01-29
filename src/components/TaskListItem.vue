<script setup>
import { computed } from "vue";
import { useQuasar } from "quasar";
import confetti from "canvas-confetti";
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
const showProgress = computed(() => props.task.target > 1 && !props.task.done);
const progress = computed(() =>
  showProgress.value ? props.task.performance / props.task.target : 0
);
const caption = computed(() =>
  [props.task.performance, "of", props.task.target].join(" ")
);
function fireworks() {
  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
    var particleCount = 50 * (timeLeft / duration);
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}
function showProgressDialog() {
  $q.dialog({
    component: ProgressDialog,
    componentProps: { task: props.task },
  }).onOk((data) => {
    if (data.performance !== props.task.performance) {
      if (data.performance >= props.task.target) fireworks();
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
  <q-item clickable :active="Boolean(task.done)" active-class="text-positive">
    <q-item-section v-if="task.done" thumbnail>
      <q-icon name="done" color="positive" />
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
    <q-item-section v-if="task.group_id && !task.done" thumbnail>
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

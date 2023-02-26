<script setup>
import { computed } from "vue";

const props = defineProps({
  goal: {
    type: Object,
    required: true,
  },
});
const showProgress = computed(() => props.goal.tasks_target > 1);
const progress = computed(() =>
  showProgress.value
    ? props.goal.tasks_performance / props.goal.tasks_target
    : 0
);
const caption = computed(() =>
  [
    props.goal.on_track + "%",
    "·",
    props.goal.tasks_performance,
    "of",
    props.goal.tasks_target,
  ].join(" ")
);
</script>

<template>
  <q-item-section>
    <q-item-label>{{ goal.name }}</q-item-label>
    <q-item-label v-if="showProgress" caption>{{ caption }}</q-item-label>
    <q-item-label v-if="showProgress">
      <q-linear-progress :value="progress" color="positive" />
    </q-item-label>
  </q-item-section>
</template>

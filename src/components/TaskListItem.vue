<script setup>
import { ref, computed, defineAsyncComponent } from "vue";

const TimeDoneForm = defineAsyncComponent(() => import("./TimeDoneForm.vue"));
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["mutate"]);
const expanded = ref(false);
const label = computed(() =>
  [
    props.task.name,
    "Planned: " + props.task.planned_total_time + " min.",
    "Progress: " + props.task.total_time_min + " min.",
  ].join(" · ")
);
</script>

<template>
  <q-expansion-item
    v-model="expanded"
    :to="{ name: 'task', params: { id: task.id } }"
    :label="label"
    :header-class="task.done ? 'text-grey' : ''"
    group="tasks"
    expand-icon-toggle
  >
    <TimeDoneForm
      v-if="expanded"
      :id="task.id"
      :done="Boolean(task.done)"
      @mutate="$emit('mutate')"
      @submited="expanded = false"
    />
    <q-separator class="q-ma-sm" />
  </q-expansion-item>
</template>

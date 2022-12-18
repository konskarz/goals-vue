<script setup>
import { ref } from "vue";
import TimeDoneForm from "./TimeDoneForm.vue";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["mutate"]);
const label = [
  props.task.name,
  "Planned: " + props.task.planned_total_time + " min.",
  "Progress: " + props.task.total_time_min + " min.",
].join(" · ");
const expanded = ref(false);
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
      :id="task.id"
      :done="Boolean(task.done)"
      @mutate="$emit('mutate')"
      @submited="expanded = false"
    />
    <q-separator class="q-ma-sm" />
  </q-expansion-item>
</template>

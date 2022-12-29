<script setup>
import { ref, computed } from "vue";
import TimeDoneForm from "./TimeDoneForm.vue";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
// const emit = defineEmits(["mutate"]);
const expanded = ref(false);
const caption = computed(() =>
  [props.task.total_time_min, "of", props.task.planned_total_time, "min."].join(
    " "
  )
);
</script>

<template>
  <!-- 
    :to="{ name: 'task', params: { id: task.id } }"
    expand-icon-toggle
   -->
  <q-expansion-item
    v-model="expanded"
    :label="task.name"
    :caption="caption"
    :header-class="task.done ? 'text-grey' : ''"
    group="tasks"
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

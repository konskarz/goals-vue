<script setup>
import { ref, computed } from "vue";
import TimeDoneForm from "./TimeDoneForm.vue";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
// const emit = defineEmits(["mutate", "dragstart"]);
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
    :header-class="task.done ? 'text-grey' : ''"
    group="tasks"
  >
    <template #header>
      <q-item-section
        thumbnail
        style="cursor: grab"
        draggable="true"
        @dragstart="$emit('dragstart', $event, task)"
        @touchmove:native="(e) => {}"
      >
        <q-icon name="drag_indicator" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ task.name }}</q-item-label>
        <q-item-label caption>{{ caption }}</q-item-label>
      </q-item-section>
    </template>
    <TimeDoneForm
      :id="task.id"
      :done="Boolean(task.done)"
      @mutate="$emit('mutate')"
      @submited="expanded = false"
    />
    <q-separator class="q-ma-sm" />
  </q-expansion-item>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDialogPluginComponent, date } from "quasar";
import NumberInput from "../components/NumberInput.vue";
import DurationInput from "../components/DurationInput.vue";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
defineEmits([...useDialogPluginComponent.emits]);
const performance = ref(props.task.performance);
const duration = ref(null);
const hint = computed(() => {
  let txt = "of " + props.task.target;
  const ph = props.task.performance_history;
  if (ph && ph.length) {
    txt +=
      " · last updated " + date.formatDate(ph[0].updated, "DD.MM.YYYY HH:mm");
  }
  return txt;
});
const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();
const disable = computed(() => {
  return performance.value === props.task.performance && !duration.value;
});
function onOKClick() {
  onDialogOK({ performance: performance.value, duration: duration.value });
}
</script>

<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <div class="text-h6">Progress</div>
      </q-card-section>
      <q-card-section>
        <NumberInput v-model="performance" label="Performance" :hint="hint" />
      </q-card-section>
      <q-card-section>
        <DurationInput v-model="duration" label="Time spent" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          flat
          label="Edit Task"
          class="text-primary"
          :to="{ name: 'task', params: { id: task.id } }"
        />
        <q-space />
        <q-btn
          flat
          label="Cancel"
          class="text-primary"
          @click="onDialogCancel"
        />
        <q-btn
          :disable="disable"
          flat
          label="Submit"
          class="text-primary"
          @click="onOKClick"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

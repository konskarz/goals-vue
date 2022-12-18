<script setup>
import { ref, computed } from "vue";
import apiClient from "stores/api.client";

const options = [
  { value: "15", label: "15 min" },
  { value: "30", label: "30 min" },
  { value: "45", label: "45 min" },
  { value: "60", label: "1 h" },
  { value: "90", label: "1.5 h" },
  { value: "120", label: "2 h" },
  { value: "150", label: "2.5 h" },
  { value: "180", label: "3 h" },
  { value: "240", label: "4 h" },
  { value: "300", label: "5 h" },
  { value: "360", label: "6 h" },
  { value: "480", label: "8 h" },
];
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["mutate", "submited"]);
const time = ref(null);
const done = ref(props.done);
const disable = computed(() => {
  return !time.value && done.value === props.done;
});
function submit() {
  if (time.value) {
    apiClient
      .create("/api/v2/times/", {
        task: props.id,
        start: new Date().toISOString(),
        end: null,
        duration: time.value,
        description: "",
      })
      .then(() => {
        emit("mutate");
      });
    time.value = null;
  }
  if (done.value !== props.done) {
    apiClient
      .update("/api/v2/tasks/" + props.id + "/", {
        done: done.value ? new Date().toISOString() : null,
      })
      .then(() => {
        emit("mutate");
      });
    done.value === props.done;
  }
  emit("submited");
}
</script>

<template>
  <form class="q-pa-sm row q-col-gutter-sm" @submit.prevent="submit">
    <div class="col-12 col-sm-10 row q-col-gutter-sm">
      <q-radio
        v-for="(slot, index) in options"
        :key="index"
        v-model="time"
        :val="slot.value"
        :label="slot.label"
        class="col-6 col-sm-3 col-lg-2 col-xl-1"
      />
    </div>
    <div class="col-12 col-sm-2 row q-col-gutter-sm">
      <div class="col-6 col-sm-12 col-xl-6">
        <q-checkbox v-model="done" label="Done" />
      </div>
      <div class="col-6 col-sm-12 col-xl-6">
        <q-btn type="submit" label="Submit" no-caps :disable="disable" />
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from "vue";
import apiClient from "../stores/api.client";

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
const time = ref(null);
const performance = ref(null);
const done = ref(props.done);
const disable = computed(() => {
  return !time.value && done.value === props.done;
});
function submit() {
  if (time.value) {
    apiClient
      .create("/times/", {
        task: props.id,
        start: new Date().toISOString(),
        end: null,
        duration: time.value,
        description: "",
      })
      .then(() => emit("mutate"));
    time.value = null;
  }
  if (done.value !== props.done) {
    apiClient
      .update("/tasks/" + props.id + "/", {
        done: done.value ? new Date().toISOString() : null,
      })
      .then(() => emit("mutate"));
    done.value === props.done;
  }
  emit("submited");
}
</script>

<template>
  <form class="q-pa-sm row" @submit.prevent="submit">
    <div class="col-12 col-xl-10 row">
      <q-radio
        v-for="(option, index) in options"
        :key="index"
        v-model="time"
        :val="option.value"
        :label="option.label"
        class="col-4 col-sm-2 col-lg"
      />
    </div>
    <div class="col-12 col-xl-2 row items-end">
      <div class="col col-sm-8 col-lg-10 col-xl">
        <q-input
          v-model="performance"
          type="number"
          label="Performance"
          stack-label
          class="q-px-sm"
        />
      </div>
      <div class="col col-sm-2 col-lg-1 col-xl">
        <q-checkbox v-model="done" label="Done" />
      </div>
      <div class="col col-sm-2 col-lg-1 col-xl-auto">
        <q-btn
          type="submit"
          flat
          round
          icon="save"
          :disable="disable"
          @click="submit"
        />
      </div>
    </div>
  </form>
</template>

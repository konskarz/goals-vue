<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import useSWRV from "swrv";
import { apiService } from "@/common/api.service.js";
import { dateInput, dateOutput } from "@/common/date.format.js";

const route = useRoute();
const router = useRouter();
const endpoint = "/api/times/";
const time = ref({
  goal: null,
  start: null,
  end: null,
  duration: null,
  description: "",
});
const submited = ref(false);
const timeId = computed(() => {
  return parseInt(route.params.id);
});
const goalId = computed(() => {
  return parseInt(route.params.goal);
});
const start = computed({
  get() {
    return dateInput(time.value.start);
  },
  set(value) {
    time.value.start = value ? dateOutput(value) : null;
  },
});
const end = computed({
  get() {
    return dateInput(time.value.end);
  },
  set(value) {
    time.value.end = value ? dateOutput(value) : null;
  },
});
function saveTime() {
  submited.value = true;
  if (timeId.value)
    apiService(endpoint + timeId.value + "/", "PUT", time.value).then(() =>
      toTimes()
    );
  else apiService(endpoint, "POST", time.value).then(() => toProgress());
}
function deleteTime() {
  submited.value = true;
  apiService(endpoint + timeId.value + "/", "DELETE").then(() => toTimes());
}
function toTimes() {
  router.push({ name: "times" });
}
function toProgress() {
  router.push({ name: "progress" });
}
if (timeId.value) {
  const { data } = useSWRV(endpoint + timeId.value);
  watch(data, (newData) => (time.value = newData));
} else time.value.goal = goalId.value;
</script>
<template>
  <form class="row g-3" @submit.prevent>
    <div class="col-12">
      <div class="d-flex justify-content-between align-items-center my-3">
        <h1>Time</h1>
        <div class="d-flex ms-auto">
          <button
            v-if="timeId"
            class="btn btn-outline-dark ms-2"
            :disabled="submited"
            @click="deleteTime"
          >
            Delete
          </button>
          <button
            class="btn btn-outline-dark ms-2"
            :disabled="submited"
            @click="saveTime"
          >
            Save
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <label for="staticGoal" class="form-label">Goal</label>
      <input
        id="staticGoal"
        type="text"
        readonly
        class="form-control-plaintext"
        :value="time.goal"
      />
    </div>
    <div class="col-md-6">
      <label for="inputDuration" class="form-label">Duration</label>
      <input
        id="inputDuration"
        v-model="time.duration"
        type="number"
        class="form-control"
      />
    </div>
    <div class="col-md-6">
      <label for="inputStart" class="form-label">Start</label>
      <input id="inputStart" v-model="start" type="date" class="form-control" />
    </div>
    <div class="col-md-6">
      <label for="inputEnd" class="form-label">Done</label>
      <input id="inputEnd" v-model="end" type="date" class="form-control" />
    </div>
    <div class="col-12">
      <label for="inputDescription" class="form-label">Description</label>
      <textarea
        id="inputDescription"
        v-model="time.description"
        rows="3"
        class="form-control"
      ></textarea>
    </div>
  </form>
</template>

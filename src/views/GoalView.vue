<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import useSWRV from "swrv";
import { apiService } from "@/common/api.service.js";
import { dateInput, dateOutput } from "@/common/date.format.js";

const route = useRoute();
const router = useRouter();
const endpoint = "/api/goals/";
const goal = ref({
  name: "",
  parent_id: null,
  planned: null,
  done: null,
  goal_type: "subtask",
  description: "",
});
const actionables = ref([]);
const submited = ref(false);
const goalId = computed(() => {
  return parseInt(route.params.id);
});
const planned = computed({
  get() {
    return dateInput(goal.value.planned);
  },
  set(value) {
    goal.value.planned = value ? dateOutput(value) : null;
  },
});
const done = computed({
  get() {
    return dateInput(goal.value.done);
  },
  set(value) {
    goal.value.done = value ? dateOutput(value) : null;
  },
});
function saveGoal() {
  submited.value = true;
  if (goalId.value)
    apiService(endpoint + goalId.value + "/", "PUT", goal.value).then(() =>
      toGoals()
    );
  else apiService(endpoint, "POST", goal.value).then(() => toGoals());
}
function deleteGoal() {
  submited.value = true;
  apiService(endpoint + goalId.value + "/", "DELETE").then(() => toGoals());
}
function toGoals() {
  router.push({ name: "goals" });
}
const { data } = useSWRV(endpoint);
watch(data, (newData) => {
  if (goalId.value)
    goal.value = newData.find((goal) => goal.id === goalId.value);
  actionables.value = newData.filter((goal) => goal.goal_type === "actionable");
});
/*
watchEffect(async () => {
  const data = await apiService(endpoint);
  if (goalId.value) goal.value = data.find((goal) => goal.id === goalId.value);
  actionables.value = data.filter((goal) => goal.goal_type === "actionable");
});
*/
</script>
<template>
  <form class="row g-3" @submit.prevent="saveGoal">
    <div class="col-12">
      <div class="d-flex justify-content-between align-items-center my-3">
        <h1>Goal</h1>
        <div class="d-flex ms-auto">
          <button
            v-if="goalId"
            class="btn btn-outline-dark ms-2"
            :disabled="submited"
            @click="deleteGoal"
          >
            Delete
          </button>
          <button
            class="btn btn-outline-dark ms-2"
            type="submit"
            :disabled="submited"
            @click="saveGoal"
          >
            Save
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <label for="inputName" class="form-label">Name</label>
      <input
        id="inputName"
        v-model="goal.name"
        required
        type="text"
        class="form-control"
      />
    </div>
    <div class="col-md-6">
      <label for="selectParent" class="form-label">Parent</label>
      <select
        id="selectParent"
        v-model="goal.parent_id"
        class="form-select"
        aria-label="Select Parent"
      >
        <option value=""></option>
        <option
          v-for="actionable in actionables"
          :key="actionable.id"
          :value="actionable.id"
        >
          {{ actionable.name }}
        </option>
      </select>
    </div>
    <div class="col-md-6">
      <label for="inputPlanned" class="form-label">Planned</label>
      <input
        id="inputPlanned"
        v-model="planned"
        type="date"
        class="form-control"
      />
    </div>
    <div class="col-md-6">
      <label for="inputDone" class="form-label">Done</label>
      <input id="inputDone" v-model="done" type="date" class="form-control" />
    </div>
    <div class="col-12">
      <label for="inputImage" class="form-label">Image</label>
      <input
        id="inputImage"
        type="file"
        class="form-control"
        :value="goal.image"
      />
    </div>
    <div class="col-12">
      <label for="inputDescription" class="form-label">Description</label>
      <textarea
        id="inputDescription"
        v-model="goal.description"
        rows="3"
        class="form-control"
      ></textarea>
    </div>
  </form>
</template>

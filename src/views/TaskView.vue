<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import useSWRV from "swrv";
import { apiService } from "@/common/api.service.js";
import { dateInput, dateOutput } from "@/common/date.format.js";

const route = useRoute();
const router = useRouter();
const tasksEndpoint = "/api/v2/tasks/";
const goalsEndpoint = "/api/v2/goals/";
const task = ref({
  name: "",
  goal: null,
  planned: null,
  planned_total_time: null,
  done: null,
  description: "",
});
const goals = ref([]);
const submited = ref(false);
const taskId = computed(() => {
  return parseInt(route.params.id);
});
const planned = computed({
  get() {
    return dateInput(task.value.planned);
  },
  set(value) {
    task.value.planned = value ? dateOutput(value) : null;
  },
});
const done = computed({
  get() {
    return dateInput(task.value.done);
  },
  set(value) {
    task.value.done = value ? dateOutput(value) : null;
  },
});
function saveTask() {
  if (!task.value.name || !task.value.goal) return;
  submited.value = true;
  if (taskId.value)
    apiService(tasksEndpoint + taskId.value + "/", "PUT", task.value).then(() =>
      goBack()
    );
  else apiService(tasksEndpoint, "POST", task.value).then(() => goBack());
}
function deleteTask() {
  submited.value = true;
  apiService(tasksEndpoint + taskId.value + "/", "DELETE").then(() => goBack());
}
function goBack() {
  router.back();
}
if (taskId.value) {
  const { data: taskData } = useSWRV(tasksEndpoint + taskId.value);
  watch(taskData, (newTask) => (task.value = newTask));
}
const { data: goalsData } = useSWRV(goalsEndpoint);
watch(goalsData, (newGoals) => (goals.value = newGoals)); // .filter((goal) => goal.goal_type === "actionable");
</script>
<template>
  <form class="row g-3" @submit.prevent="saveTask">
    <div class="col-12">
      <div class="d-flex justify-content-between align-items-center my-3">
        <h1>Task</h1>
        <div class="d-flex ms-auto">
          <button
            class="btn btn-outline-dark ms-2"
            :disabled="submited"
            @click="goBack"
          >
            Cancel
          </button>
          <button
            v-if="taskId"
            class="btn btn-outline-dark ms-2"
            :disabled="submited"
            @click="deleteTask"
          >
            Delete
          </button>
          <button
            class="btn btn-outline-dark ms-2"
            type="submit"
            :disabled="submited"
            @click="saveTask"
          >
            Save
          </button>
        </div>
      </div>
    </div>
    <div class="col-12">
      <label for="inputName" class="form-label">Name</label>
      <input
        id="inputName"
        v-model="task.name"
        required
        type="text"
        class="form-control"
      />
    </div>
    <div class="col-md-6">
      <label for="selectParent" class="form-label">Parent</label>
      <select
        id="selectParent"
        v-model="task.goal"
        required
        class="form-select"
        aria-label="Select Parent"
      >
        <option v-for="item in goals" :key="item.id" :value="item.id">
          {{ item.name }}
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
      <label for="inputDuration" class="form-label">Duration</label>
      <input
        id="inputDuration"
        v-model="task.planned_total_time"
        type="number"
        class="form-control"
      />
    </div>
    <div class="col-md-6">
      <label for="inputDone" class="form-label">Done</label>
      <input id="inputDone" v-model="done" type="date" class="form-control" />
    </div>
    <div class="col-12">
      <label for="inputDescription" class="form-label">Description</label>
      <textarea
        id="inputDescription"
        v-model="task.description"
        rows="3"
        class="form-control"
      ></textarea>
    </div>
  </form>
</template>

<script setup>
import { useRouter } from "vue-router";
import useSWRV from "swrv";
import Goal from "@/components/GoalsGoal.vue";

const router = useRouter();
const goalsEndpoint = "/api/v2/goals/?children=true";
const { data: goals } = useSWRV(goalsEndpoint);

function newTask() {
  router.push({ name: "task", params: { id: 0 } });
}
function newGoal() {
  router.push({ name: "goal", params: { id: 0 } });
}
</script>

<template>
  <div class="d-flex justify-content-between align-items-center my-3">
    <h1>Goals</h1>
    <div class="d-flex ms-auto">
      <button class="btn btn-outline-dark ms-2" @click="newTask">
        New Task
      </button>
      <button class="btn btn-outline-dark ms-2" @click="newGoal">
        New Goal
      </button>
    </div>
  </div>
  <ul v-if="goals" class="list-group-flush ps-0">
    <Goal
      v-for="goal in goals"
      :key="goal.id"
      class="list-group-item my-2"
      :goal-id="goal.id"
      :goals="goals"
    >
    </Goal>
  </ul>
</template>

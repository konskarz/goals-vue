<script setup>
import { computed } from "vue";
import apiClient from "@/stores/api.client";
import GoalsGoal from "@/components/GoalsGoal.vue";

// https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript/70554215#70554215
const arrayToTree = (array, parent = null) => {
  return array
    .filter((item) => item.parent === parent)
    .map((child) => ({ ...child, children: arrayToTree(array, child.id) }));
};
const mainEndpoint = "/api/v2/goals/";
const { data: mainData } = apiClient.read(mainEndpoint);
const goals = computed(() =>
  mainData.value ? arrayToTree(mainData.value) : null
);
</script>

<template>
  <div class="d-flex justify-content-between align-items-center my-3">
    <h1>Goals</h1>
    <div class="d-flex ms-auto">
      <router-link
        :to="{ name: 'goal', params: { id: 'create' } }"
        class="btn btn-outline-dark ms-2"
        >New Goal
      </router-link>
    </div>
  </div>
  <ul v-if="goals" class="list-group-flush ps-0">
    <GoalsGoal
      v-for="goal in goals"
      :key="goal.id"
      :goal="goal"
      class="list-group-item my-2"
    />
  </ul>
</template>

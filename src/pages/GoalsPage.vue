<script setup>
import { computed } from "vue";
import apiClient from "stores/api.client";
import GoalListItem from "src/components/GoalListItem.vue";

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
  <q-page padding>
    <q-toolbar>
      <q-toolbar-title>Goals</q-toolbar-title>
      <q-btn
        flat
        round
        icon="add_task"
        :to="{ name: 'goal', params: { id: 'create' } }"
      />
    </q-toolbar>
    <q-list v-if="goals">
      <GoalListItem v-for="goal in goals" :key="goal.id" :goal="goal" />
    </q-list>
  </q-page>
</template>

<script setup>
import apiClient from "@/stores/api.client";
import Week from "@/components/ProgressWeek.vue";

const mainEndpoint = "/api/progress/";
const { data: progress } = apiClient.read(mainEndpoint);
</script>

<template>
  <div class="d-flex justify-content-between align-items-center my-3">
    <h1>Progress</h1>
    <div class="d-flex ms-auto">
      <router-link
        :to="{ name: 'task', params: { id: 'create' } }"
        class="btn btn-outline-dark ms-2"
        >New Task</router-link
      >
    </div>
  </div>
  <ul v-if="progress" class="list-group-flush ps-0">
    <Week
      v-for="(week, key) in progress.key_results"
      :key="key"
      :week="week"
      class="list-group-item py-2"
    >
      {{ week.week }}
    </Week>
  </ul>
</template>

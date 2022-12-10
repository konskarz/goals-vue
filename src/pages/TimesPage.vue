<script setup>
import apiClient from "@/stores/api.client";

const mainEndpoint = "/api/times/";
const { data: times } = apiClient.read(mainEndpoint);
function timeToDate(str) {
  return str ? new Date(str).toDateString() : "";
}
</script>

<template>
  <h1 class="my-3">Times</h1>
  <div v-if="times" class="list-group-flush ps-0">
    <div class="list-group-item d-flex py-2">
      <div class="col-4">Time</div>
      <div class="col">Date</div>
      <div class="col-auto">Goal</div>
    </div>
    <router-link
      v-for="time in times"
      :key="time.id"
      :to="{ name: 'time', params: { id: time.id, goal: time.goal } }"
      class="list-group-item list-group-item-action d-flex py-2"
    >
      <div class="col-4">{{ time.duration }}</div>
      <div class="col">{{ timeToDate(time.start) }}</div>
      <div class="col-auto">{{ time.goal }}</div>
    </router-link>
  </div>
</template>

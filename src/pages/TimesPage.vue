<script setup>
import apiClient from "stores/api.client";

const mainEndpoint = "/api/times/";
const { data: times } = apiClient.read(mainEndpoint);
function timeToDate(str) {
  return str ? new Date(str).toDateString() : "";
}
</script>

<template>
  <q-page padding>
    <q-toolbar>
      <q-toolbar-title>Times</q-toolbar-title>
    </q-toolbar>
    <q-list v-if="times" separator>
      <q-item class="row">
        <q-item-section class="col-4">Time</q-item-section>
        <q-item-section class="col">Date</q-item-section>
        <q-item-section class="col-auto">Goal</q-item-section>
      </q-item>
      <q-item
        v-for="time in times"
        :key="time.id"
        :to="{ name: 'time', params: { id: time.id, goal: time.goal } }"
        class="row"
      >
        <q-item-section class="col-4">{{ time.duration }}</q-item-section>
        <q-item-section class="col">
          {{ timeToDate(time.start) }}
        </q-item-section>
        <q-item-section class="col-auto">{{ time.goal }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

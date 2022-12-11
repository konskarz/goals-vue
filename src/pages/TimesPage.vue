<script setup>
import apiClient from "stores/api.client";

const mainEndpoint = "/api/v2/times/";
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
        <q-item-section class="col-auto">Task</q-item-section>
      </q-item>
      <q-item
        v-for="time in times"
        :key="time.id"
        :to="{ name: 'time', params: { id: time.id, task: time.task } }"
        class="row"
      >
        <q-item-section class="col-4">{{ time.duration }}</q-item-section>
        <q-item-section class="col">
          {{ timeToDate(time.start) }}
        </q-item-section>
        <q-item-section class="col-auto">{{ time.task }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

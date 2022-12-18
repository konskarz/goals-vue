<script setup>
import apiClient from "stores/api.client";

const { data: tasks } = apiClient.read("/api/v2/tasks/");
function timeToDate(str) {
  return str ? new Date(str).toDateString() : "";
}
</script>

<template>
  <q-page padding>
    <q-toolbar>
      <q-toolbar-title>Tasks</q-toolbar-title>
    </q-toolbar>
    <q-list v-if="tasks" separator>
      <q-item class="row">
        <q-item-section class="col-4">Name</q-item-section>
        <q-item-section class="col">Date</q-item-section>
        <q-item-section class="col-auto">Goal</q-item-section>
      </q-item>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        :to="{ name: 'task', params: { id: task.id } }"
        class="row"
      >
        <q-item-section class="col-4">{{ task.name }}</q-item-section>
        <q-item-section class="col">
          {{ timeToDate(task.planned) }}
        </q-item-section>
        <q-item-section class="col-auto">{{ task.goal }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

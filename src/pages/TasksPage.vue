<script setup>
import apiClient from "stores/api.client";

const { data: tasks } = apiClient.read("/api/v2/tasks/");
function isoToDate(str) {
  return str ? new Date(str).toDateString() : "";
}
</script>

<template>
  <q-page padding>
    <q-toolbar>
      <q-toolbar-title>Tasks</q-toolbar-title>
    </q-toolbar>
    <q-list v-if="tasks" separator>
      <q-item>
        <q-item-section class="col-5">Planned</q-item-section>
        <q-item-section>Name</q-item-section>
        <q-item-section side>Goal</q-item-section>
      </q-item>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        :to="{ name: 'task', params: { id: task.id } }"
      >
        <q-item-section class="col-5">
          {{ isoToDate(task.planned) }}
        </q-item-section>
        <q-item-section>{{ task.name }}</q-item-section>
        <q-item-section side>{{ task.goal }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

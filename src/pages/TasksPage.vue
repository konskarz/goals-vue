<script setup>
import apiClient from "stores/api.client";

const mainEndpoint = "/api/v2/tasks/";
const { data: tasks } = apiClient.read(mainEndpoint);
</script>

<template>
  <q-page padding>
    <q-toolbar>
      <q-toolbar-title>Tasks</q-toolbar-title>
    </q-toolbar>
    <q-list v-if="tasks" separator>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        :to="{ name: 'task', params: { id: task.id } }"
      >
        <q-item-section>{{ task.name }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

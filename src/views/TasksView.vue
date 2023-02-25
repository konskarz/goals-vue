<script setup>
import { date } from "quasar";
import { useTaskStore } from "../stores/TaskStore";

const store = useTaskStore();
</script>

<template>
  <q-page padding>
    <q-toolbar>
      <q-toolbar-title>Tasks</q-toolbar-title>
    </q-toolbar>
    <q-list v-if="store.relative">
      <q-item
        v-for="task in store.relative"
        :key="task.id"
        :to="{ name: 'task', params: { id: task.id } }"
      >
        <q-item-section>
          <q-item-label>{{ task.name }}</q-item-label>
          <q-item-label caption>{{ task.goalName }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          {{ date.formatDate(task.planned, "ddd MMM DD YYYY") }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

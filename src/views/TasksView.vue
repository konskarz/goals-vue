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
      <q-intersection
        v-for="task in store.relative"
        :key="task.id"
        style="min-height: 51.19px"
      >
        <q-item :to="{ name: 'task', params: { id: task.id } }">
          <q-item-section>
            <q-item-label>{{ task.name }}</q-item-label>
            <q-item-label caption>{{ task.goalName }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            {{ date.formatDate(task.starts, "ddd MMM DD YYYY") }}
          </q-item-section>
        </q-item>
      </q-intersection>
    </q-list>
  </q-page>
</template>

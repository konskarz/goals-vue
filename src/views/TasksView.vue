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
    <q-list v-if="store.relative" separator>
      <q-item>
        <q-item-section class="col-5">Planned</q-item-section>
        <q-item-section>Name</q-item-section>
        <q-item-section side>Goal</q-item-section>
      </q-item>
      <q-item
        v-for="task in store.relative"
        :key="task.id"
        :to="{ name: 'task', params: { id: task.id } }"
      >
        <q-item-section class="col-5">
          {{ date.formatDate(task.planned, "ddd MMM DD YYYY") }}
        </q-item-section>
        <q-item-section>{{ task.name }}</q-item-section>
        <q-item-section side>{{ task.goalName }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

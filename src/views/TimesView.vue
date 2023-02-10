<script setup>
import { date } from "quasar";
import { useTimeStore } from "../stores/TimeStore";

const store = useTimeStore();
</script>

<template>
  <q-page padding>
    <q-toolbar>
      <q-toolbar-title>Times</q-toolbar-title>
    </q-toolbar>
    <q-list v-if="store.relative" separator>
      <q-item>
        <q-item-section class="col-5">Start</q-item-section>
        <q-item-section>Duration</q-item-section>
        <q-item-section side>Task</q-item-section>
      </q-item>
      <q-item
        v-for="time in store.relative"
        :key="time.id"
        :to="{ name: 'time', params: { id: time.id, task: time.task } }"
      >
        <q-item-section class="col-5">
          {{ date.formatDate(time.start, "ddd MMM DD YYYY") }}
        </q-item-section>
        <q-item-section>{{ time.duration }}</q-item-section>
        <q-item-section side>{{ time.taskName }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

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
    <q-list v-if="store.relative">
      <q-item
        v-for="time in store.relative"
        :key="time.id"
        :to="{ name: 'time', params: { id: time.id, task: time.task } }"
      >
        <q-item-section>
          <q-item-label>{{ time.duration }}</q-item-label>
          <q-item-label caption>{{ time.taskName }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          {{ date.formatDate(time.start, "ddd MMM DD YYYY") }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

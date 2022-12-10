<script setup>
import apiClient from "stores/api.client";
import Week from "components/ProgressWeek.vue";

const mainEndpoint = "/api/progress/";
const { data: progress } = apiClient.read(mainEndpoint);
</script>

<template>
  <q-page padding>
    <q-toolbar>
      <q-toolbar-title>Progress</q-toolbar-title>
      <q-btn
        flat
        round
        icon="assignment_add"
        :to="{ name: 'task', params: { id: 'create' } }"
      />
    </q-toolbar>
    <q-list v-if="progress" separator>
      <Week
        v-for="(week, key) in progress.key_results"
        :key="key"
        :week="week"
      />
    </q-list>
  </q-page>
</template>

<script setup>
import apiClient from "stores/api.client";
import Week from "src/components/PlanWeek.vue";

const mainEndpoint = "/api/v2/plan";
const { data: plan } = apiClient.read(mainEndpoint);
</script>

<template>
  <q-page padding>
    <q-toolbar>
      <q-toolbar-title>Plan</q-toolbar-title>
      <q-btn
        flat
        round
        icon="assignment_add"
        :to="{ name: 'task', params: { id: 'create' } }"
      />
    </q-toolbar>
    <q-list v-if="plan" separator>
      <Week v-for="(week, key) in plan.key_results" :key="key" :week="week" />
    </q-list>
  </q-page>
</template>

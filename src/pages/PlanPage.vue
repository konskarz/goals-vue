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
    <q-timeline v-if="plan" layout="dense" class="q-px-md">
      <Week
        v-for="(week, key, index) in plan.key_results"
        :key="key"
        :color="index ? 'primary' : 'orange'"
        :week="week"
      />
    </q-timeline>
  </q-page>
</template>

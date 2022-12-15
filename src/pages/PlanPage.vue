<script setup>
import apiClient from "stores/api.client";
import WeekTimelineEntry from "components/WeekTimelineEntry.vue";

const { data: plan } = apiClient.read("/api/v2/plan/");
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
      <WeekTimelineEntry
        v-for="(week, key, index) in plan.key_results"
        :key="key"
        :color="index ? 'primary' : 'orange'"
        :week="week"
        :slots="plan.slots"
      />
    </q-timeline>
  </q-page>
</template>

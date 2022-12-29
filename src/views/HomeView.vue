<script setup>
import { computed } from "vue";
import apiClient from "../stores/api.client";
import WeekTimelineEntry from "../components/WeekTimelineEntryDrop.vue";

const { data: plan, mutate } = apiClient.read("/api/v2/plan/");
const current = computed(() => {
  return Object.keys(plan.value.key_results).find((key) => {
    return !plan.value.key_results[key].in_the_past;
  });
});
</script>

<template>
  <q-page padding>
    <q-toolbar>
      <q-toolbar-title>Plan</q-toolbar-title>
      <q-btn
        :to="{ name: 'task', params: { id: 'create' } }"
        icon="assignment_add"
        flat
        round
      />
    </q-toolbar>
    <q-timeline v-if="plan" layout="dense" class="q-px-md">
      <WeekTimelineEntry
        v-for="(week, key) in plan.key_results"
        :key="key"
        :color="key === current ? 'orange' : ''"
        :week="week"
        @mutate="mutate"
      />
    </q-timeline>
  </q-page>
</template>

<script setup>
import { computed } from "vue";
import apiClient from "../stores/api.client";
import WeekTimelineEntry from "../components/WeekTimelineEntryDrop.vue";

const { data: plan, mutate } = apiClient.read("/plan/");
const current = computed(() => {
  return Object.keys(plan.value).find((key) => {
    return !plan.value[key].in_the_past;
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
      <template v-for="(week, key) in plan" :key="key">
        <WeekTimelineEntry
          v-if="week.day"
          :color="key === current ? 'orange' : ''"
          :week="week"
          @mutate="mutate"
        />
      </template>
    </q-timeline>
  </q-page>
</template>

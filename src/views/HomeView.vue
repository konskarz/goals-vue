<script setup>
import { date } from "quasar";
import apiClient from "../stores/api.client";
import WeekTimelineEntry from "../components/WeekTimelineEntryDrop.vue";

const current = date.formatDate(new Date(), "YYYY-w");
const { data: plan, mutate } = apiClient.read("/plan/");
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

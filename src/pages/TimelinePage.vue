<script setup>
import apiClient from "stores/api.client";
import Task from "src/components/PlanWeekTask.vue";

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
      <q-timeline-entry
        v-for="(week, key) in plan.key_results"
        :key="key"
        :title="'Week ' + week.week"
        :subtitle="week.quarter + ' · ' + week.month + ' · ' + week.day"
      >
        <div style="min-height: 50px; margin-left: -16px">
          <q-list v-if="week.tasks && week.tasks.length" dense>
            <Task v-for="task in week.tasks" :key="task.id" :task="task"></Task>
          </q-list>
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

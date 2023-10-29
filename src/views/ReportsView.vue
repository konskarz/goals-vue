<script setup>
import { useTaskStore } from '../stores/TaskStore'
import HeatmapLabel from '../components/HeatmapLabel.vue'

const store = useTaskStore()
</script>

<template>
  <q-toolbar class="q-pl-lg">
    <q-toolbar-title>Reports</q-toolbar-title>
  </q-toolbar>
  <q-list v-if="store.series" class="q-px-sm">
    <q-item v-for="(data, name) in store.series" :key="name">
      <q-item-section>
        <q-item-label>{{ name }}</q-item-label>
        <HeatmapLabel caption :series="[{ name, data }]" :height="29" class="q-mb-xs" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

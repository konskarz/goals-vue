<script setup>
import { useTaskStore } from '../stores/TaskStore'

const store = useTaskStore()
const options = {
  chart: {
    height: 350,
    type: 'heatmap'
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#21BA45'],
  title: {
    text: 'Recurring Tasks'
  }
}
</script>

<template>
  <q-page>
    <q-toolbar class="q-mt-md q-pl-lg">
      <q-toolbar-title>Reports</q-toolbar-title>
    </q-toolbar>
    <div v-if="store.recurring" class="q-px-md">
      <apexchart type="heatmap" height="350" :options="options" :series="store.recurring" />
    </div>
  </q-page>
</template>

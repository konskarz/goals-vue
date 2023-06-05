<script setup>
import { getCssVar } from 'quasar'
import { useTaskStore } from '../stores/TaskStore'

const store = useTaskStore()
const options = {
  chart: {
    toolbar: {
      tools: { download: false }
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: [getCssVar('positive')],
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
      <apexchart
        type="heatmap"
        :height="store.recurring.length * 50"
        :options="options"
        :series="store.recurring"
      />
    </div>
  </q-page>
</template>

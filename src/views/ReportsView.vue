<script setup>
import { getCssVar } from 'quasar'
import { useTaskStore } from '../stores/TaskStore'

const store = useTaskStore()
const options = {
  chart: {
    toolbar: { show: false }
  },
  dataLabels: { enabled: false },
  colors: [getCssVar('positive')],
  responsive: [
    {
      breakpoint: 600,
      options: {
        chart: { width: 535 },
        yaxis: {
          labels: { maxWidth: 100 }
        }
      }
    }
  ]
}
</script>

<template>
  <q-page>
    <q-toolbar class="q-mt-md q-pl-lg">
      <q-toolbar-title>Reports</q-toolbar-title>
    </q-toolbar>
    <div v-if="store.recurring" class="q-px-lg">
      <div class="text-subtitle2">Recurring Tasks</div>
      <apexchart
        type="heatmap"
        :height="store.recurring.length * 44"
        :options="options"
        :series="store.recurring"
        style="overflow: auto hidden"
      />
    </div>
  </q-page>
</template>

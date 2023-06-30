<script setup>
import { date, getCssVar } from 'quasar'
import { useTaskStore } from '../stores/TaskStore'

const store = useTaskStore()
const heatmapOptions = {
  chart: {
    toolbar: { show: false },
    parentHeightOffset: 0
  },
  yaxis: {
    labels: { show: false }
  },
  xaxis: {
    type: 'datetime',
    labels: {
      show: true,
      rotate: 0,
      hideOverlappingLabels: true,
      // format: 'dd.MM',
      formatter: (value, timestamp) => date.formatDate(timestamp, 'DD.MM'),
      style: {
        colors: 'rgba(0, 0, 0, 0.54)',
        fontSize: '.75rem'
      },
      offsetY: -4,
      offsetX: 5
    },
    tooltip: { enabled: false },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  grid: {
    padding: {
      top: -30,
      // bottom: -15,
      left: -10,
      right: 10 // 0
    }
  },
  tooltip: { enabled: false },
  dataLabels: { enabled: false },
  colors: [getCssVar('primary')]
}
</script>

<template>
  <q-page>
    <q-toolbar class="q-mt-md q-pl-lg">
      <q-toolbar-title>Reports</q-toolbar-title>
    </q-toolbar>
    <q-list v-if="store.recurring" class="q-py-sm q-pl-sm">
      <q-item v-for="(data, name) in store.recurring" :key="name">
        <q-item-section>
          <q-item-label>{{ name }}</q-item-label>
          <q-item-label caption>
            <apexchart
              type="heatmap"
              :series="[{ name, data }]"
              :options="heatmapOptions"
              :height="32 + 14"
            />
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

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
      formatter: (value, timestamp) => date.formatDate(timestamp, 'DD.MM'),
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
      bottom: -15,
      left: -10,
      right: 0
    }
  },
  tooltip: {
    custom: ({ series, seriesIndex, dataPointIndex, w }) =>
      '<div class="apexcharts-tooltip-series-group apexcharts-active" style="order: 1; display: flex;">' +
      '<div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">' +
      '<div class="apexcharts-tooltip-y-group">' +
      '<span class="apexcharts-tooltip-text-y-label">' +
      date.formatDate(w.globals.seriesX[seriesIndex][dataPointIndex], 'DD.MM') +
      ':  </span><span class="apexcharts-tooltip-text-y-value">' +
      series[seriesIndex][dataPointIndex] +
      '</span></div></div></div>'
  },
  dataLabels: { enabled: false },
  colors: [getCssVar('positive')]
}
</script>

<template>
  <q-page>
    <q-toolbar class="q-mt-md q-pl-lg">
      <q-toolbar-title>Reports</q-toolbar-title>
    </q-toolbar>
    <q-list v-if="store.recurring" class="q-pl-sm">
      <q-item-label header>Recurring Tasks</q-item-label>
      <q-item v-for="(data, name) in store.recurring" :key="name">
        <q-item-section>
          <q-item-label>{{ name }}</q-item-label>
          <q-item-label caption>
            <apexchart
              type="heatmap"
              :series="[{ name, data }]"
              :options="heatmapOptions"
              :height="heatmapOptions.xaxis.labels.show ? 17 + 24 : 7 + 24"
              :width="data.length * 24"
              style="overflow: auto hidden"
            />
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

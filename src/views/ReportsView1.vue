<script setup>
import { computed } from 'vue'
import { date, getCssVar } from 'quasar'
import { useTaskStore } from '../stores/TaskStore'

const store = useTaskStore()
const heatmapSeries = computed(() => {
  if (!store.recurring) return null
  const series = []
  for (const name in store.recurring) {
    series.push({
      name,
      data: store.recurring[name]
    })
  }
  return series
})
const heatmapOptions = {
  chart: {
    toolbar: { show: false },
    parentHeightOffset: 0
  },
  yaxis: {
    labels: {
      maxWidth: 100,
      align: 'left',
      offsetX: 9
    }
  },
  xaxis: {
    type: 'datetime',
    labels: {
      show: true,
      rotate: 0,
      hideOverlappingLabels: true,
      // format: 'dd.MM',
      formatter: (value, timestamp) => date.formatDate(timestamp, 'DD.MM'),
      offsetY: -4
      // offsetX: 5
    },
    tooltip: { enabled: false },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  grid: {
    padding: {
      top: -14, // -30,
      bottom: -12, // -15,
      left: 0, // -10,
      right: 0
    }
  },
  tooltip: {
    custom: ({ series, seriesIndex, dataPointIndex, w }) =>
      '<div class="apexcharts-tooltip-series-group apexcharts-active" style="order: 1; display: flex;">' +
      '<div class="apexcharts-tooltip-text">' +
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
    <div v-if="heatmapSeries" class="q-py-md q-px-lg">
      <q-item-label>Recurring Tasks</q-item-label>
      <apexchart
        type="heatmap"
        :series="heatmapSeries"
        :options="heatmapOptions"
        :height="36 + heatmapSeries.length * 24"
        :width="100 + heatmapSeries[0].data.length * 24"
        style="overflow: auto hidden"
      />
    </div>
  </q-page>
</template>

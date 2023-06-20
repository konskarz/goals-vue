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
    labels: { maxWidth: 100 }
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
      top: -14, // -30,
      bottom: -15,
      // left: -10,
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
const heatmapHeight = computed(() => 33 + heatmapSeries.value.length * 24)
const heatmapWidth = computed(() => {
  let length = 0
  heatmapSeries.value.forEach((group) => {
    if (group.data.length > length) length = group.data.length
  })
  return length > 0 ? 110 + length * 24 : '100%'
})
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
        :height="heatmapHeight"
        :width="heatmapWidth"
        style="overflow: auto hidden"
      />
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import { getCssVar } from 'quasar'
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
  grid: {
    padding: {
      top: -15,
      bottom: -15
    }
  },
  yaxis: {
    labels: { maxWidth: 100 }
  },
  xaxis: {
    labels: { show: true },
    tooltip: { enabled: false },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  tooltip: {
    custom: ({ series, seriesIndex, dataPointIndex, w }) =>
      '<div class="arrow_box"><span>' +
      w.globals.labels[dataPointIndex] +
      ': ' +
      series[seriesIndex][dataPointIndex] +
      '</span></div>'
  },
  dataLabels: { enabled: false },
  colors: [getCssVar('positive')]
}
const heatmapHeight = computed(() => 51 + heatmapSeries.value.length * 24)
const heatmapWidth = computed(() => {
  let length = 0
  heatmapSeries.value.forEach((group) => {
    if (group.data.length > length) length = group.data.length
  })
  return length > 0 ? 130 + length * 24 : '100%'
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

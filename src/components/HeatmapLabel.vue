<script setup>
import { date, getCssVar } from 'quasar'
import VueApexCharts from 'vue3-apexcharts'

defineProps({
  series: { type: Object, required: true },
  height: { type: Number, default: 16 + 10 },
  label: { type: String, default: null },
  labelIcon: { type: String, default: null }
})
/* 
xaxis: { position: 'bottom', labels: { offsetY: -5 } },
grid: { padding: { top: -30, bottom: -15 } }

xaxis: { position: 'top', labels: { offsetY: 0 } },
grid: { padding: { top: -20, bottom: -25 } }
 */
const options = {
  chart: {
    toolbar: { show: false },
    parentHeightOffset: 0
  },
  yaxis: { labels: { show: false } },
  xaxis: {
    type: 'datetime',
    position: 'bottom',
    labels: {
      show: true,
      rotate: 0,
      hideOverlappingLabels: true,
      // format: 'dd.MM',
      formatter: (value, timestamp) => date.formatDate(timestamp, 'DD.MM'),
      style: { colors: 'rgba(0, 0, 0, 0.54)' },
      offsetY: -5,
      offsetX: 6
    },
    tooltip: { enabled: false },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  grid: { padding: { top: -30, bottom: -15, left: -10, right: 0 } },
  tooltip: { enabled: false },
  dataLabels: { enabled: false },
  colors: [getCssVar('primary')]
}
</script>

<template>
  <q-item-label>
    <div v-if="label" class="row items-center q-mb-xs">
      <q-icon v-if="labelIcon" :name="labelIcon" class="q-mr-sm" />
      {{ label }}
    </div>
    <VueApexCharts type="heatmap" :series="series" :options="options" :height="height" />
  </q-item-label>
</template>

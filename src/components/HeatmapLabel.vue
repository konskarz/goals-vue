<script setup>
import { date, getCssVar } from 'quasar'

defineProps({
  series: { type: Object, required: true },
  height: { type: Number, default: 18 + 12 }
})
/* 
height: 18 + 12
xaxis: { position: 'bottom', labels: { offsetY: -4 } },
grid: { padding: { top: -30, bottom: -14 } }
height: 17 + 12
xaxis: { position: 'top', labels: { offsetY: 0 } },
grid: { padding: { top: -20, bottom: -25 } }
 */
const options = {
  chart: {
    toolbar: { show: false },
    parentHeightOffset: 0
  },
  yaxis: {
    labels: { show: false }
  },
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
      offsetY: -4,
      offsetX: 6
    },
    tooltip: { enabled: false },
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  grid: {
    padding: {
      top: -30,
      bottom: -14,
      left: -10,
      right: 0
    }
  },
  tooltip: { enabled: false },
  dataLabels: { enabled: false },
  colors: [getCssVar('primary')]
}
</script>

<template>
  <q-item-label>
    <apexchart type="heatmap" :series="series" :options="options" :height="height" />
  </q-item-label>
</template>

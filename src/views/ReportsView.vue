<script setup>
import { computed } from 'vue'
import { getCssVar } from 'quasar'
import { useTaskStore } from '../stores/TaskStore'

const store = useTaskStore()
const heatmapOptions = {
  chart: {
    toolbar: { show: false }
  },
  yaxis: {
    labels: { maxWidth: 100 }
  },
  dataLabels: { enabled: false },
  colors: [getCssVar('positive')]
}
const heatmapHeight = computed(() => 80 + store.recurring.length * 24)
const heatmapWidth = computed(() => {
  let length = 0
  store.recurring.forEach((group) => {
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
    <div v-if="store.recurring" class="q-px-lg">
      <div class="text-subtitle2">Recurring Tasks</div>
      <apexchart
        type="heatmap"
        :series="store.recurring"
        :options="heatmapOptions"
        :height="heatmapHeight"
        :width="heatmapWidth"
        style="overflow: auto hidden"
      />
    </div>
  </q-page>
</template>

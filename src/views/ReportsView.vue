<script setup>
import { date, getCssVar } from 'quasar'
import { useTaskStore } from '../stores/TaskStore'
import MainPage from '../components/MainPage.vue'

const store = useTaskStore()
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
  <MainPage>
    <template #toolbar><q-toolbar-title>Reports</q-toolbar-title></template>
    <template #default>
      <q-list v-if="store.heatmap" class="q-pt-sm q-px-sm">
        <q-item v-for="(data, name) in store.heatmap" :key="name">
          <q-item-section>
            <q-item-label>{{ name }}</q-item-label>
            <q-item-label caption class="q-pb-md">
              <apexchart
                type="heatmap"
                :series="[{ name, data }]"
                :options="options"
                :height="18 + 12"
              />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </template>
  </MainPage>
</template>

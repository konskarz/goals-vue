<script setup>
import { useTaskStore } from '../stores/TaskStore'
import MainPage from '../components/MainPage.vue'
import HeatmapLabel from '../components/HeatmapLabel.vue'

const store = useTaskStore()
</script>

<template>
  <MainPage>
    <template #toolbar><q-toolbar-title>Reports</q-toolbar-title></template>
    <q-list v-if="store.series" class="q-pt-sm q-px-sm">
      <q-item v-for="(data, name) in store.series" :key="name">
        <q-item-section>
          <q-item-label>{{ name }}</q-item-label>
          <HeatmapLabel caption class="q-pb-md" :series="[{ name, data }]" />
        </q-item-section>
      </q-item>
    </q-list>
  </MainPage>
</template>

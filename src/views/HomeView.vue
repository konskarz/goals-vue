<script setup>
import { useTaskStore } from '../stores/TaskStore'
import MainPage from '../components/MainPage.vue'
import SupportPane from '../components/SupportPane.vue'
import ReportPane from '../components/ReportPane.vue'
import WeekTimelineEntry from '../components/WeekTimelineEntry.vue'

const store = useTaskStore()
</script>

<template>
  <MainPage>
    <template #toolbar>
      <q-toolbar-title>Tasks</q-toolbar-title>
      <q-btn flat round icon="filter_list" @click="store.filter.show = !store.filter.show" />
    </template>
    <q-slide-transition>
      <SupportPane v-show="store.filter.show" />
    </q-slide-transition>
    <ReportPane
      v-if="store.report"
      :item="store.report"
      :show-series="store.filter.pastRecurring"
      class="q-pb-lg q-px-lg"
    />
    <q-timeline v-if="store.calendar" class="q-mt-md q-pl-lg">
      <WeekTimelineEntry
        v-for="(week, key) in store.calendar"
        :key="key"
        :week="week"
        :monday="key"
      />
    </q-timeline>
  </MainPage>
</template>

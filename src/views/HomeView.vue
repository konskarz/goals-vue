<script setup>
import { useTaskStore } from '../stores/TaskStore'
import MainPage from '../components/MainPage.vue'
import HomePane from '../components/HomePane.vue'
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
      <HomePane v-show="store.filter.show" />
    </q-slide-transition>
    <q-timeline v-if="store.calendar" class="q-pl-lg">
      <WeekTimelineEntry
        v-for="(week, key) in store.calendar"
        :key="key"
        :week="week"
        :monday="key"
      />
    </q-timeline>
  </MainPage>
</template>

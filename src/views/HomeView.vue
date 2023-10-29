<script setup>
import { useTaskStore } from '../stores/TaskStore'
import SupportPane from '../components/SupportPane.vue'
import WeekPane from '../components/WeekPane.vue'

const store = useTaskStore()
</script>

<template>
  <q-toolbar class="q-pl-lg">
    <q-toolbar-title>Tasks</q-toolbar-title>
    <q-btn flat round icon="filter_list" @click="store.filter.show = !store.filter.show" />
  </q-toolbar>
  <q-slide-transition>
    <SupportPane v-show="store.filter.show" />
  </q-slide-transition>
  <template v-if="store.calendar">
    <WeekPane
      v-for="(week, key) in store.calendar"
      :key="key"
      :week="week"
      :monday="key"
      class="q-pb-lg"
    />
  </template>
</template>

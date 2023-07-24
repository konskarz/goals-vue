<script setup>
import { scroll } from 'quasar'
import { useTaskStore } from '../stores/TaskStore'
import SupportPane from '../components/SupportPane.vue'
import ReportPane from '../components/ReportPane.vue'
import WeekPane from '../components/WeekPane.vue'

const { getScrollbarWidth } = scroll
const store = useTaskStore()

function width(screen) {
  const minWidth = 933 + getScrollbarWidth() // MainLayout 583 + 350
  return screen.width > minWidth ? (screen.width - minWidth) / 2 + 350 : 350
}
</script>

<template>
  <div class="primary">
    <q-toolbar class="q-pl-lg">
      <q-toolbar-title>Tasks</q-toolbar-title>
      <q-btn
        flat
        round
        icon="filter_list"
        class="lt-md"
        @click="store.filter.show = !store.filter.show"
      />
    </q-toolbar>
    <q-slide-transition class="lt-md">
      <SupportPane v-show="store.filter.show" />
    </q-slide-transition>
    <ReportPane
      v-if="store.report"
      :item="store.report"
      :show-series="store.filter.pastRecurring"
      class="q-pb-lg q-px-lg"
    />
    <template v-if="store.calendar">
      <WeekPane
        v-for="(week, key) in store.calendar"
        :key="key"
        :week="week"
        :monday="key"
        class="q-pb-lg"
      />
    </template>
  </div>
  <q-page-sticky position="right" expand class="gt-sm" :style="{ width: width($q.screen) + 'px' }">
    <q-scroll-area class="fit">
      <SupportPane class="q-pt-lg secondary" />
    </q-scroll-area>
  </q-page-sticky>
</template>
<style scoped>
@media (min-width: 1024px) {
  .primary {
    margin-right: 350px;
  }
  .secondary {
    max-width: 350px;
  }
}
</style>

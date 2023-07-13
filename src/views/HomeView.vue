<script setup>
import { useTaskStore } from '../stores/TaskStore'
import GoalSelect from '../components/GoalSelect.vue'
import MainPage from '../components/MainPage.vue'
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
      <div v-show="store.filter.show" class="row q-pl-lg q-pr-sm">
        <GoalSelect
          v-model="store.filter.goal"
          label="Filter by goal"
          :borderless="$q.screen.gt.xs"
          dense
          class="col-xs-12 col-sm-4 q-pb-md q-pr-md"
        />
        <q-toggle
          v-model="store.filter.pastDone"
          label="Show past done"
          dense
          class="col-xs-12 col-sm-auto q-pb-md q-pr-md"
        />
        <q-toggle
          v-model="store.filter.pastRecurring"
          label="Show past recurring"
          dense
          class="col-xs-12 col-sm-auto q-pb-md q-pr-md"
        />
      </div>
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

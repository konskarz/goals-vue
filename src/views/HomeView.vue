<script setup>
import { useTaskStore } from '../stores/TaskStore'
import GoalSelect from '../components/GoalSelect.vue'
import WeekTimelineEntry from '../components/WeekTimelineEntry.vue'

const store = useTaskStore()
</script>

<template>
  <q-page>
    <q-toolbar class="q-mt-md q-pl-lg">
      <q-toolbar-title>Plan</q-toolbar-title>
      <q-btn flat round icon="filter_list" @click="store.filter.show = !store.filter.show" />
    </q-toolbar>
    <q-slide-transition>
      <div v-show="store.filter.show" class="row">
        <GoalSelect
          v-model="store.filter.goal"
          label="For Goal"
          dense
          :borderless="$q.screen.gt.xs"
          class="q-px-lg q-pb-md col-xs-12 col-sm-4"
        />
        <q-toggle v-model="store.filter.done" label="Show passed done" class="q-pl-md q-pb-md" />
        <q-toggle
          v-model="store.filter.recurring"
          label="Show passed recurring"
          class="q-pl-md q-pb-md"
        />
      </div>
    </q-slide-transition>
    <q-timeline v-if="store.calendar" class="q-pl-lg">
      <WeekTimelineEntry
        v-for="(tasks, key) in store.calendar"
        :key="key"
        :tasks="tasks"
        :monday="key"
      />
    </q-timeline>
  </q-page>
</template>

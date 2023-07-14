<script setup>
import { useTaskStore } from '../stores/TaskStore'
import GoalSelect from './GoalSelect.vue'
import ProgressItem from './ProgressItem.vue'

const store = useTaskStore()
</script>
<template>
  <div>
    <div class="q-px-lg row q-col-gutter-md">
      <GoalSelect
        v-model="store.filter.goal"
        label="Filter by goal"
        :borderless="$q.screen.gt.xs"
        dense
        class="col-12 col-sm"
      />
      <q-toggle v-model="store.filter.pastDone" label="Show past done" dense />
      <q-toggle v-model="store.filter.pastRecurring" label="Show past recurring" dense />
    </div>
    <ProgressItem v-if="store.progress" :item="store.progress" class="q-pb-lg q-px-lg" />
  </div>
</template>

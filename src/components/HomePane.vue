<script setup>
import { useTaskStore } from '../stores/TaskStore'
import GoalSelect from './GoalSelect.vue'
import ProgressItem from './ProgressItem.vue'

const store = useTaskStore()
</script>
<template>
  <div>
    <div class="row q-pl-lg q-pr-sm">
      <GoalSelect
        v-model="store.filter.goal"
        label="Filter by goal"
        :borderless="$q.screen.gt.xs"
        dense
        hide-bottom-space
        class="col-12 col-sm q-pb-md q-pr-md"
      />
      <q-toggle
        v-model="store.filter.pastDone"
        label="Show past done"
        dense
        class="q-pb-md q-pr-md"
      />
      <q-toggle
        v-model="store.filter.pastRecurring"
        label="Show past recurring"
        dense
        class="q-pb-md q-pr-lg"
      />
    </div>
    <ProgressItem v-if="store.progress" :item="store.progress" class="q-pb-lg q-px-lg" />
  </div>
</template>

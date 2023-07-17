<script setup>
import { useTaskStore } from '../stores/TaskStore'
import { useGoalStore } from '../stores/GoalStore'
import HomePaneItem from './HomePaneItem.vue'
import GoalTree from './GoalTree.vue'
import ProgressItem from './ProgressItem.vue'

const tasks = useTaskStore()
const goals = useGoalStore()
const filters = [
  { label: 'Past done', icon: 'event_available', target: 'pastDone' },
  { label: 'Past recurring', icon: 'free_cancellation', target: 'pastRecurring' }
]
</script>

<template>
  <div>
    <HomePaneItem label="Show">
      <div class="q-pt-sm q-pb-lg q-px-lg q-gutter-md">
        <q-checkbox
          v-for="(item, index) in filters"
          :key="index"
          v-model="tasks.filter[item.target]"
          :label="item.label"
          dense
        />
      </div>
    </HomePaneItem>
    <template v-if="goals.tree">
      <HomePaneItem label="Filter by goal">
        <GoalTree class="q-pb-lg" />
      </HomePaneItem>
    </template>
    <ProgressItem v-if="tasks.progress" :item="tasks.progress" class="q-pb-lg q-px-lg" />
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/TaskStore'
import { useGoalStore } from '../stores/GoalStore'
import SupportPaneItem from './SupportPaneItem.vue'
import GoalTree from './GoalTree.vue'
import ReportPane from './ReportPane.vue'

const tasks = useTaskStore()
const goals = useGoalStore()
const filters = [
  { label: 'Past done', icon: 'event_available', target: 'pastDone' },
  { label: 'Past recurring', icon: 'free_cancellation', target: 'pastRecurring' }
]
</script>
<template>
  <div>
    <SupportPaneItem v-if="tasks.calendar" label="Show">
      <div class="q-pt-sm q-pb-lg q-px-lg q-gutter-md">
        <q-checkbox
          v-for="(item, index) in filters"
          :key="index"
          v-model="tasks.filter[item.target]"
          :label="item.label"
          dense
        />
      </div>
    </SupportPaneItem>
    <SupportPaneItem v-if="goals.tree" label="Filter by goal">
      <GoalTree class="q-pb-lg" />
    </SupportPaneItem>
    <ReportPane v-if="tasks.report" :item="tasks.report" class="q-pb-lg q-px-lg" />
  </div>
</template>

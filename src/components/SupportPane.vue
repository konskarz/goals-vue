<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/TaskStore'
import { useGoalStore } from '../stores/GoalStore'
import ReportPane from './ReportPane.vue'

const tasks = useTaskStore()
const goals = useGoalStore()
const filters = [
  { label: 'Past done', icon: 'event_available', target: 'pastDone' },
  { label: 'Past recurring', icon: 'free_cancellation', target: 'pastRecurring' },
  { label: 'Future recurring', icon: 'date_range', target: 'futureRecurring' },
  { label: 'Empty weeks', icon: 'calendar_today', target: 'emptyWeeks' }
]

const selected = ref(null)

function go(router, id) {
  router.push({ name: 'goal', params: { id } })
}
</script>
<template>
  <div>
    <q-item-label overline class="q-py-sm q-px-lg text-uppercase">Show</q-item-label>
    <div class="q-pt-sm q-pb-md q-px-lg q-gutter-sm">
      <q-checkbox
        v-for="(item, index) in filters"
        :key="index"
        v-model="tasks.filter[item.target]"
        :label="item.label"
        dense
        class="q-mb-xs q-mr-xs"
      />
    </div>
    <template v-if="goals.tree">
      <q-item-label overline class="q-py-sm q-px-lg text-uppercase">Filter by goal</q-item-label>
      <q-tree
        v-model:selected="selected"
        v-model:ticked="goals.treeTicked"
        v-model:expanded="goals.treeExpanded"
        tick-strategy="strict"
        :nodes="goals.tree"
        node-key="id"
        label-key="name"
        icon="keyboard_arrow_right"
        selected-color="primary"
        class="q-pb-lg"
        @update:selected="(target) => go($router, target)"
      >
        <template #default-header="prop">
          <div class="q-pl-xs q-pr-lg">{{ prop.node.name }}</div>
        </template>
      </q-tree>
    </template>
    <ReportPane
      v-if="tasks.report"
      :item="tasks.report"
      :show-series="false"
      class="q-pb-lg q-px-lg"
    />
  </div>
</template>

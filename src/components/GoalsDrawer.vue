<script setup>
import { useGoalStore } from '../stores/GoalStore'
import GoalListItem from './GoalListItem.vue'

const store = useGoalStore()
</script>

<template>
  <q-drawer>
    <q-scroll-area class="fit">
      <q-toolbar class="q-mt-md q-pl-md">
        <q-toolbar-title>Goals</q-toolbar-title>
      </q-toolbar>
      <q-list v-if="store.tree" class="q-py-sm">
        <GoalListItem v-for="goal in store.tree" :key="goal.id" :goal="goal" />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

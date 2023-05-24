<script setup>
import { useGoalStore } from '../stores/GoalStore'
import GoalListItem from './GoalListItem.vue'

const store = useGoalStore()
</script>

<template>
  <q-drawer>
    <q-scroll-area class="fit q-pa-md">
      <q-toolbar>
        <q-toolbar-title>Goals</q-toolbar-title>
        <q-btn :to="{ name: 'goal', params: { id: 'new' } }" flat round icon="add" />
      </q-toolbar>
      <q-list v-if="store.tree" class="q-py-sm">
        <GoalListItem v-for="goal in store.tree" :key="goal.id" :goal="goal" />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { useGoalStore } from '../stores/GoalStore'
import GoalListItem from '../components/GoalListItem.vue'

const store = useGoalStore()
</script>

<template>
  <q-page padding>
    <q-toolbar>
      <q-toolbar-title>Goals</q-toolbar-title>
    </q-toolbar>
    <q-list v-if="store.tree">
      <GoalListItem v-for="goal in store.tree" :key="goal.id" :goal="goal" />
    </q-list>
  </q-page>
</template>

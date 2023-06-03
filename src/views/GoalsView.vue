<script setup>
import { useGoalStore } from '../stores/GoalStore'
import GoalListItem from '../components/GoalListItem.vue'

const store = useGoalStore()
</script>

<template>
  <q-page>
    <q-toolbar class="q-mt-md q-pl-lg">
      <q-toolbar-title>Goals</q-toolbar-title>
    </q-toolbar>
    <q-list v-if="store.tree" class="q-py-sm q-pl-sm">
      <GoalListItem v-for="goal in store.tree" :key="goal.id" :goal="goal" />
    </q-list>
  </q-page>
</template>

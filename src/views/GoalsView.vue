<script setup>
import { useGoalStore } from '../stores/GoalStore'
import GoalListItem from '../components/GoalListItem.vue'

const store = useGoalStore()
</script>

<template>
  <q-toolbar class="q-pl-lg">
    <q-toolbar-title>Goals</q-toolbar-title>
  </q-toolbar>
  <q-list v-if="store.treeReport" class="q-pt-sm q-pl-sm">
    <GoalListItem v-for="item in store.treeReport" :key="item.id" :item="item" />
  </q-list>
</template>

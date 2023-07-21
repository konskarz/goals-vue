<script setup>
import { useGoalStore } from '../stores/GoalStore'
import MainPage from '../components/MainPage.vue'
import GoalListItem from '../components/GoalListItem.vue'

const store = useGoalStore()
</script>

<template>
  <MainPage>
    <template #toolbar><q-toolbar-title>Goals</q-toolbar-title></template>
    <q-list v-if="store.treeReport" class="q-pt-sm q-pl-sm">
      <GoalListItem v-for="item in store.treeReport" :key="item.id" :item="item" />
    </q-list>
  </MainPage>
</template>

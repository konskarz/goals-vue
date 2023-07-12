<script setup>
import { useGoalStore } from '../stores/GoalStore'
import MainPage from '../components/MainPage.vue'
import GoalListItem from '../components/GoalListItem.vue'

const store = useGoalStore()
</script>

<template>
  <MainPage>
    <template #toolbar><q-toolbar-title>Goals</q-toolbar-title></template>
    <template #default>
      <q-list v-if="store.tree" class="q-pt-sm q-pl-sm">
        <GoalListItem v-for="goal in store.tree" :key="goal.id" :item="goal" class="q-pb-lg" />
      </q-list>
    </template>
  </MainPage>
</template>

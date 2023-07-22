<script setup>
import { useRouter, useRoute } from 'vue-router'
import { getActivePinia } from 'pinia'
import { useUserStore } from '../stores/UserStore'

const router = useRouter()
const route = useRoute()
const pinia = getActivePinia()
const store = useUserStore()
const entities = [
  { label: 'New task', icon: 'add_task', to: { name: 'task', params: { id: 'new' } } },
  { label: 'New goal', icon: 'control_point', to: { name: 'goal', params: { id: 'new' } } }
]
const dev = import.meta.env.DEV

function copyData() {
  navigator.clipboard.writeText(
    JSON.stringify({
      goals: pinia.state._rawValue.GoalStore.data._rawValue,
      tasks: pinia.state._rawValue.TaskStore.data._rawValue
    })
  )
}
function logout() {
  store.logout()
  router.push({ name: 'login', query: { next: route.fullPath } })
  pinia._s.forEach((s) => {
    s.$dispose()
    delete pinia.state.value[s.$id]
  })
  localStorage.clear()
}
</script>

<template>
  <q-list>
    <q-item v-for="(item, index) in entities" :key="index" class="q-pr-lg" :to="item.to">
      <q-item-section side><q-icon :name="item.icon" /></q-item-section>
      <q-item-section no-wrap>{{ item.label }}</q-item-section>
    </q-item>
    <q-item v-if="dev" clickable class="q-pr-lg" @click="copyData">
      <q-item-section side><q-icon name="copy_all" /></q-item-section>
      <q-item-section no-wrap><q-item-label>Copy data</q-item-label></q-item-section>
    </q-item>
    <q-item clickable class="q-pr-lg" @click="logout">
      <q-item-section side><q-icon name="logout" /></q-item-section>
      <q-item-section no-wrap><q-item-label>Logout</q-item-label></q-item-section>
    </q-item>
  </q-list>
</template>

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
  <q-layout view="hHh LpR fFf">
    <q-header reveal :reveal-offset="0">
      <q-toolbar class="q-pl-lg">
        <q-toolbar-title>LifeTrackerBuddy</q-toolbar-title>
        <q-btn-dropdown
          auto-close
          flat
          square
          stretch
          padding="xs sm"
          no-icon-animation
          dropdown-icon="more_vert"
        >
          <q-list>
            <q-item
              v-for="(entity, index) in entities"
              :key="index"
              class="q-pr-lg"
              :to="entity.to"
            >
              <q-item-section side><q-icon :name="entity.icon" /></q-item-section>
              <q-item-section>{{ entity.label }}</q-item-section>
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
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view :key="$route.path" />
    </q-page-container>
  </q-layout>
</template>

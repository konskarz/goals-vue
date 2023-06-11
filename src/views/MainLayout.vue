<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getActivePinia } from 'pinia'
import { useUserStore } from '../stores/UserStore'

const router = useRouter()
const route = useRoute()
const pinia = getActivePinia()
const store = useUserStore()
const views = [
  { to: '/', icon: 'pending_actions', label: 'Plan' },
  { to: 'tasks', icon: 'task_alt', label: 'Tasks' },
  { to: 'goals', icon: 'outlined_flag', label: 'Goals' },
  { to: 'reports', icon: 'auto_graph', label: 'Reports' }
]
const drawer = ref(false)
function logout() {
  store.logout()
  router.push({ name: 'login', query: { next: route.fullPath } })
  pinia._s.forEach((store) => {
    store.$dispose()
    delete pinia.state.value[store.$id]
  })
  localStorage.clear()
}
</script>

<template>
  <q-layout view="hhh LpR fff">
    <q-header reveal :reveal-offset="0">
      <q-toolbar>
        <q-btn flat round icon="menu" class="lt-md" @click="drawer = !drawer" />
        <q-toolbar-title>LifeTrackerBuddy</q-toolbar-title>
        <q-btn flat round icon="add">
          <q-menu auto-close>
            <q-list>
              <q-item :to="{ name: 'task', params: { id: 'new' } }">
                <q-item-section><q-item-label>New task</q-item-label></q-item-section>
              </q-item>
              <q-item :to="{ name: 'goal', params: { id: 'new' } }">
                <q-item-section><q-item-label>New goal</q-item-label></q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn flat round icon="person_outline">
          <q-menu>
            <q-list>
              <q-item v-close-popup clickable @click="logout">
                <q-item-section><q-item-label>Logout</q-item-label></q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawer" show-if-above>
      <q-scroll-area class="fit">
        <q-list class="q-mt-md">
          <q-item v-for="(view, index) in views" :key="index" :to="view.to" exact>
            <q-item-section avatar><q-icon :name="view.icon" /></q-item-section>
            <q-item-section>{{ view.label }}</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view :key="$route.path" />
    </q-page-container>
  </q-layout>
</template>

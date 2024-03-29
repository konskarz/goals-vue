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
  { to: '/', icon: 'task_alt', label: 'Tasks' },
  { to: '/goals', icon: 'outlined_flag', label: 'Goals' },
  { to: '/reports', icon: 'bar_chart', label: 'Reports' }
]
const entities = [
  { to: { name: 'task', params: { id: 'new' } }, icon: 'add_task', label: 'New task' },
  { to: { name: 'goal', params: { id: 'new' } }, icon: 'control_point', label: 'New goal' }
]
const dev = import.meta.env.DEV
const drawer = ref(false)

function width(screen) {
  const margin = (screen.width - 583) / 2 // .page max-width
  return margin > 300 ? margin : 300
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
function copyData() {
  navigator.clipboard.writeText(
    JSON.stringify({
      goals: pinia.state._rawValue.GoalStore.data._rawValue,
      tasks: pinia.state._rawValue.TaskStore.data._rawValue
    })
  )
}
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal :reveal-offset="0">
      <q-toolbar>
        <q-btn flat round icon="menu" class="lt-md" @click="drawer = !drawer" />
        <q-toolbar-title>LifeTrackerBuddy</q-toolbar-title>
        <q-btn flat round icon="logout" @click="logout" />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawer" show-if-above :width="width($q.screen)">
      <q-scroll-area class="drawer fit">
        <q-toolbar class="lt-md bg-primary text-white">
          <q-btn flat round icon="menu_open" @click="drawer = false" />
        </q-toolbar>
        <q-list class="q-mt-md">
          <q-item v-for="(view, index) in views" :key="index" :to="view.to" exact>
            <q-item-section avatar><q-icon :name="view.icon" /></q-item-section>
            <q-item-section no-wrap>{{ view.label }}</q-item-section>
          </q-item>
        </q-list>
        <q-list class="q-mt-lg">
          <q-item v-for="(entity, index) in entities" :key="index" :to="entity.to">
            <q-item-section avatar><q-icon :name="entity.icon" /></q-item-section>
            <q-item-section no-wrap>{{ entity.label }}</q-item-section>
          </q-item>
          <q-item v-if="dev" clickable @click="copyData">
            <q-item-section avatar><q-icon name="copy_all" /></q-item-section>
            <q-item-section no-wrap><q-item-label>Copy data</q-item-label></q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <q-page>
        <div class="page q-pb-lg" :class="$q.platform.is.desktop ? 'q-mt-md' : 'q-pt-md'">
          <router-view :key="$route.path" />
        </div>
        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
          <q-btn fab-mini icon="arrow_upward" color="primary" />
        </q-page-scroller>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<style scoped>
.page {
  max-width: 583px; /* 667 - ((12 + 42 + 12 - 24) * 2) */
}
@media (max-width: 1023.98px) {
  .page {
    margin-left: auto;
    margin-right: auto;
  }
}
@media (min-width: 1024px) {
  .drawer {
    max-width: 300px;
  }
}
</style>

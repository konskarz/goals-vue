<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getActivePinia } from 'pinia'
import { useUserStore } from '../stores/UserStore'

const router = useRouter()
const route = useRoute()
const pinia = getActivePinia()
const store = useUserStore()
const menuList = [
  {
    to: '/',
    icon: 'pending_actions',
    label: 'Plan'
  },
  {
    to: '/goals',
    icon: 'task_alt',
    label: 'Goals'
  },
  {
    to: '/tasks',
    icon: 'done',
    label: 'Tasks'
  }
]
const drawerLeft = ref(false)
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
    <q-header reveal>
      <q-toolbar>
        <q-btn flat round icon="menu" @click="drawerLeft = !drawerLeft" />
        <q-toolbar-title>LifeTrackerBuddy</q-toolbar-title>
        <q-btn flat round icon="add">
          <q-menu auto-close>
            <q-list>
              <q-item :to="{ name: 'task', params: { id: 'new' } }">
                <q-item-section>
                  <q-item-label>New task</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :to="{ name: 'goal', params: { id: 'new' } }">
                <q-item-section>
                  <q-item-label>New goal</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn flat round icon="person_outline">
          <q-menu>
            <q-list>
              <q-item v-close-popup clickable @click="logout">
                <q-item-section>
                  <q-item-label>Logout</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawerLeft" show-if-above>
      <q-scroll-area class="fit">
        <q-list class="q-mt-md">
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item :to="menuItem.to" exact>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view :key="$route.path" />
    </q-page-container>
  </q-layout>
</template>

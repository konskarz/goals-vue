<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getActivePinia } from 'pinia'
import { useUserStore } from '../stores/UserStore'
import GoalsDrawer from '../components/GoalsDrawer.vue'
import TasksDrawer from '../components/TasksDrawer.vue'

const router = useRouter()
const route = useRoute()
const pinia = getActivePinia()
const store = useUserStore()
const drawerLeft = ref(false)
const drawerRight = ref(false)
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
        <q-toolbar-title>LifeTrackerBuddy</q-toolbar-title>
        <q-btn flat round icon="task_alt" class="lt-md" @click="drawerLeft = !drawerLeft" />
        <q-btn flat round icon="outlined_flag" class="lt-sm" @click="drawerRight = !drawerRight" />
        <q-btn flat round icon="logout" @click="logout" />
        <!-- <q-btn flat round icon="add">
          <q-menu auto-close>
            <q-list>
              <q-item :to="{ name: 'goal', params: { id: 'new' } }">
                <q-item-section>
                  <q-item-label>New goal</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :to="{ name: 'task', params: { id: 'new' } }">
                <q-item-section>
                  <q-item-label>New task</q-item-label>
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
        </q-btn> -->
      </q-toolbar>
    </q-header>
    <TasksDrawer v-model="drawerLeft" show-if-above side="left" bordered />
    <GoalsDrawer v-model="drawerRight" :breakpoint="599" show-if-above side="right" bordered />
    <q-page-container>
      <router-view :key="$route.path" />
    </q-page-container>
  </q-layout>
</template>

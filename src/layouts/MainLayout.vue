<script setup>
import { ref } from "vue";

const menuList = [
  {
    to: "/",
    icon: "pending_actions",
    label: "Progress",
  },
  {
    to: "/times",
    icon: "schedule",
    label: "Times",
  },
  {
    to: "/goals",
    icon: "task_alt",
    label: "Goals",
  },
];
const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<template>
  <q-layout view="hHh LpR fff">
    <q-header>
      <q-toolbar>
        <q-btn flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>LifeTrackerBuddy</q-toolbar-title>
        <q-btn flat round icon="logout" href="/api-auth/logout" />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above>
      <q-scroll-area class="fit q-pa-sm">
        <q-list padding>
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

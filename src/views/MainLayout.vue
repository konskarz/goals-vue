<script setup>
import MainList from '../components/MainList.vue'
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal :reveal-offset="0">
      <q-toolbar class="q-pl-lg">
        <q-toolbar-title>LifeTrackerBuddy</q-toolbar-title>
        <q-btn flat square stretch icon="more_vert" padding="xs sm">
          <q-menu auto-close><MainList /></q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <div class="page q-mx-auto q-pb-lg" :class="$q.platform.is.desktop ? 'q-mt-md' : 'q-pt-md'">
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
@media (min-width: 1024px) {
  .page {
    max-width: 933px; /* HomeView 583 + 350 */
  }
}
</style>

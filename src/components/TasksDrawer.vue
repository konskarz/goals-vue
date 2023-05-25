<script setup>
import { date } from 'quasar'
import { useTaskStore } from '../stores/TaskStore'

const store = useTaskStore()
</script>

<template>
  <q-drawer>
    <q-scroll-area class="fit">
      <q-toolbar class="q-mt-md q-pl-md">
        <q-toolbar-title>Tasks</q-toolbar-title>
      </q-toolbar>
      <q-list v-if="store.filtered" class="q-py-sm">
        <q-intersection v-for="task in store.filtered" :key="task.id" style="min-height: 51.19px">
          <q-item :to="{ name: 'task', params: { id: task.id } }">
            <q-item-section>
              <q-item-label>{{ task.name }}</q-item-label>
              <q-item-label caption>
                {{ date.formatDate(task.planned, 'ddd MMM DD YYYY') }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-intersection>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

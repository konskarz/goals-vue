<script setup>
import { date } from 'quasar'
import { useTaskStore } from '../stores/TaskStore'

const store = useTaskStore()
</script>

<template>
  <q-page>
    <q-toolbar class="q-mt-md q-pl-lg">
      <q-toolbar-title>Tasks</q-toolbar-title>
    </q-toolbar>
    <q-list v-if="store.data" class="q-py-sm q-pl-sm">
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
  </q-page>
</template>

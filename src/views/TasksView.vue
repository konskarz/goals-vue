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
    <div v-if="store.data" class="q-py-sm q-pl-sm">
      <q-intersection v-for="task in store.filtered" :key="task.id" class="task-list-item" once>
        <q-item :to="{ name: 'task', params: { id: task.id } }">
          <q-item-section>
            <q-item-label>{{ task.name }}</q-item-label>
            <q-item-label caption>
              {{ date.formatDate(task.planned, 'ddd MMM DD YYYY') }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-intersection>
    </div>
  </q-page>
</template>
<style scoped>
.task-list-item {
  min-height: 51.19px;
}
</style>

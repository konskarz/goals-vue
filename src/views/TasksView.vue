<script setup>
import { date } from 'quasar'
import { useTaskStore } from '../stores/TaskStore'
import MainPage from '../components/MainPage.vue'

const store = useTaskStore()
</script>

<template>
  <MainPage>
    <template #toolbar><q-toolbar-title>Tasks</q-toolbar-title></template>
    <div v-if="store.data" class="q-pt-sm q-pl-sm">
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
  </MainPage>
</template>
<style scoped>
.task-list-item {
  min-height: 51.19px;
}
</style>

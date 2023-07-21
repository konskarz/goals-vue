<script setup>
import { computed } from 'vue'
import { useTaskStore } from '../stores/TaskStore'
import TaskListItem from './TaskListItem.vue'
import 'drag-drop-touch'

const props = defineProps({
  week: { type: Object, required: true },
  monday: { type: String, required: true }
})
const store = useTaskStore()
const tasks = computed(() =>
  props.week.tasks.length ? [...props.week.tasks].sort((a, b) => b.target - a.target) : null
)

function onDragStart(e, task) {
  const data = {
    id: task.id,
    planned: task.planned,
    monday: props.monday
  }
  e.dataTransfer.setData('text', JSON.stringify(data))
  e.dataTransfer.dropEffect = 'move'
}
function onDrop(e) {
  const data = JSON.parse(e.dataTransfer.getData('text'))
  if (data.monday !== props.monday) store.moveItem(data, props.monday)
}
</script>

<template>
  <div @dragover.prevent @dragenter.prevent @drop.prevent="onDrop($event)">
    <q-item-label v-if="week.start" overline class="q-px-lg q-py-sm text-uppercase">
      {{ week.month }}
    </q-item-label>
    <q-item-label header class="q-px-lg q-py-sm" :class="week.current ? 'text-weight-medium' : ''">
      {{ week.title }}
    </q-item-label>
    <q-intersection v-for="task in tasks" :key="task.id" class="min-h" once>
      <TaskListItem :item="task" class="q-pl-lg" @ondragstart="onDragStart" />
    </q-intersection>
  </div>
</template>
<style scoped>
.min-h {
  min-height: 49.59px;
}
</style>

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
  <q-timeline-entry
    :subtitle="week.title"
    :color="week.current ? 'orange' : 'primary'"
    :icon="week.start ? 'calendar_month' : undefined"
    @dragover.prevent
    @dragenter.prevent
    @drop.prevent="onDrop($event)"
  >
    <div v-if="tasks">
      <q-intersection v-for="task in tasks" :key="task.id" class="min-h-58" once>
        <TaskListItem :item="task" @ondragstart="onDragStart" />
      </q-intersection>
    </div>
  </q-timeline-entry>
</template>
<style scoped>
.min-h-58 {
  min-height: 58px;
}
</style>

<script setup>
import { computed } from 'vue'
import { date } from 'quasar'
import { useTaskStore } from '../stores/TaskStore'
import TaskListItem from './TaskListItem.vue'
import 'drag-drop-touch'

const props = defineProps({
  tasks: {
    type: Array,
    required: true
  },
  monday: {
    type: String,
    required: true
  }
})
const store = useTaskStore()
const sorted = computed(() => {
  return props.tasks.length ? [...props.tasks].sort((a, b) => b.target - a.target) : null
})
const isNewMonth = computed(() => {
  const previousSunday = date.subtractFromDate(props.monday, { days: 1 })
  const currentSunday = date.addToDate(props.monday, { days: 6 })
  const getMonth = (srcDate) => date.formatDate(srcDate, 'MMMM')
  const currentMonth = getMonth(props.monday)
  return currentMonth !== getMonth(previousSunday) || currentMonth !== getMonth(currentSunday)
})
const formated = date.formatDate(props.monday, 'w-Q-YYYY-MMM D').split('-')
const subtitle = ['Week ' + formated[0], 'Q' + formated[1], formated[2], formated[3]].join(' · ')

function onDragStart(e, task) {
  const data = {
    id: task.id,
    day: date.getDayOfWeek(task.planned),
    week: formated[0]
  }
  e.dataTransfer.setData('text', JSON.stringify(data))
  e.dataTransfer.dropEffect = 'move'
}
function onDrop(e) {
  const data = JSON.parse(e.dataTransfer.getData('text'))
  if (data.week === formated[0]) return
  const changed = {
    planned: date
      .addToDate(props.monday, {
        days: data.day - 1
      })
      .toISOString()
  }
  store.updateItem(data.id + '/', changed).then(() => store.refetch())
}
</script>

<template>
  <q-timeline-entry
    :color="monday === store.currentWeek ? 'orange' : 'primary'"
    :subtitle="subtitle"
    :icon="isNewMonth ? 'calendar_month' : undefined"
    @dragover.prevent
    @dragenter.prevent
    @drop.prevent="onDrop($event)"
  >
    <q-list v-if="sorted">
      <q-intersection v-for="task in sorted" :key="task.id" style="min-height: 51.19px">
        <TaskListItem :task="task" @ondragstart="onDragStart" />
      </q-intersection>
    </q-list>
  </q-timeline-entry>
</template>

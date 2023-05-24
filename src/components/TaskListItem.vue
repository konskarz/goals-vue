<script setup>
import { computed } from 'vue'
import { date } from 'quasar'
import { useRouter } from 'vue-router'
import { useTaskStore } from '../stores/TaskStore'
import { fireworks } from '../lib/fireworks'

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['ondragstart'])
const router = useRouter()
const taskStore = useTaskStore()
const showProgress = computed(() => props.task.target > 1 && !props.task.done)
const progress = computed(() =>
  showProgress.value ? props.task.performance / props.task.target : 0
)
const caption = computed(() => [props.task.performance, 'of', props.task.target].join(' '))
const hint = computed(() => {
  const ph = props.task.performance_history
  return ph && ph.length ? 'Changed ' + date.formatDate(ph[0].updated, 'DD.MM.YYYY HH:mm') : null
})
function go() {
  router.push({ name: 'task', params: { id: props.task.id } })
}
function undone() {
  const changed = { done: null }
  if (props.task.performance >= props.task.target) changed.performance = props.task.target - 1
  taskStore.updateItem(props.task.id + '/', changed).then(() => taskStore.refetch())
}
function increase() {
  const changed = { performance: props.task.performance + 1 }
  if (changed.performance >= props.task.target) fireworks()
  taskStore.updateItem(props.task.id + '/', changed).then(() => taskStore.refetch())
}
function done() {
  const changed = { done: new Date().toISOString() }
  fireworks()
  taskStore.updateItem(props.task.id + '/', changed).then(() => taskStore.refetch())
}
function onDragStart(event) {
  emit('ondragstart', event, props.task)
}
</script>

<template>
  <q-item clickable :active="Boolean(task.done)" active-class="text-positive">
    <q-item-section v-if="task.group_id" thumbnail>
      <q-icon name="event_repeat" />
    </q-item-section>
    <q-item-section
      v-else
      thumbnail
      style="cursor: grab"
      draggable="true"
      @dragstart="onDragStart"
      @touchmove:native="(e) => {}"
    >
      <q-icon name="drag_indicator" />
    </q-item-section>
    <q-item-section @click="go">
      <q-item-label>{{ task.name }}</q-item-label>
      <q-item-label v-if="showProgress" caption>{{ caption }}</q-item-label>
      <q-item-label v-if="showProgress">
        <q-linear-progress :value="progress" color="positive" />
      </q-item-label>
      <q-item-label v-if="showProgress && hint" caption>{{ hint }}</q-item-label>
    </q-item-section>
    <q-item-section avatar>
      <q-btn v-if="task.done" flat round icon="check_box" @click="undone" />
      <q-btn v-else-if="showProgress" flat round icon="plus_one" @click="increase" />
      <q-btn v-else flat round icon="check_box_outline_blank" @click="done" />
    </q-item-section>
  </q-item>
</template>

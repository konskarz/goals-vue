<script setup>
import { computed } from 'vue'
import { date } from 'quasar'
import { useTaskStore } from '../stores/TaskStore'
import { fireworks } from '../lib/fireworks'

const props = defineProps({
  item: { type: Object, required: true }
})
const emit = defineEmits(['ondragstart'])
const store = useTaskStore()
const showProgress = computed(() => props.item.target > 1 && !props.item.done)
const progressHint = computed(() => {
  if (!props.item.performance_history || !props.item.performance_history.length) return null
  return date.formatDate(props.item.performance_history[0].updated, 'DD.MM.YYYY HH:mm')
})

function onDragStart(event) {
  emit('ondragstart', event, props.item)
}
function go(router, id) {
  router.push({ name: 'task', params: { id } })
}
function undone() {
  const changed = { done: null }
  if (props.item.performance >= props.item.target) changed.performance = props.item.target - 1
  store.updateItem(props.item.id + '/', changed).then(() => store.refetch())
}
function increase() {
  const changed = { performance: props.item.performance + 1 }
  if (changed.performance >= props.item.target) fireworks()
  store.updateItem(props.item.id + '/', changed).then(() => store.refetch())
}
function done() {
  const changed = { done: new Date().toISOString() }
  fireworks()
  store.updateItem(props.item.id + '/', changed).then(() => store.refetch())
}
</script>

<template>
  <q-item clickable :active="Boolean(item.done)" active-class="text-positive">
    <q-item-section v-if="item.group_id" thumbnail>
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
    <q-item-section @click="go($router, item.id)">
      <q-item-label>{{ item.name }}</q-item-label>
      <q-item-label v-if="showProgress" caption>
        <q-icon name="track_changes" />
        {{ item.performance + ' of ' + item.target }}
      </q-item-label>
      <q-item-label v-if="showProgress">
        <q-linear-progress :value="item.performance / item.target" color="positive" />
      </q-item-label>
      <q-item-label v-if="showProgress && progressHint" caption>
        <q-icon name="update" class="vertical-top" />
        {{ progressHint }}
      </q-item-label>
    </q-item-section>
    <q-item-section avatar>
      <q-btn v-if="item.done" flat round icon="check_box" @click="undone" />
      <q-btn v-else-if="showProgress" flat round icon="plus_one" @click="increase" />
      <q-btn v-else flat round icon="check_box_outline_blank" @click="done" />
    </q-item-section>
  </q-item>
</template>

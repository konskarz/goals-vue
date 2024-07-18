<script setup>
import { computed } from 'vue'
import { date } from 'quasar'
import { useTaskStore } from '../stores/TaskStore'
import { fireworks } from '../lib/fireworks'
import ProgressLabel from './ProgressLabel.vue'

defineEmits(['ondragstart'])
const props = defineProps({
  item: { type: Object, required: true }
})
const store = useTaskStore()

const showProgress = computed(() => props.item.target > 1 && !props.item.done)
const progressHint = computed(() => {
  if (!props.item.performanceHistory || !props.item.performanceHistory.length) return null
  return date.formatDate(props.item.performanceHistory[0].updated, 'DD.MM.YYYY HH:mm')
})

function go(router, id) {
  router.push({ name: 'task', params: { id } })
}
function undone() {
  const changed = { done: null }
  if (props.item.performance >= props.item.target) changed.performance = props.item.target - 1
  store.updateItem(props.item.id, changed).then(() => store.refetch())
}
function increase() {
  const changed = { performance: props.item.performance + 1 }
  if (changed.performance >= props.item.target) fireworks()
  store.updateItem(props.item.id, changed).then(() => store.refetch())
}
function done() {
  const changed = { done: new Date().toISOString() }
  fireworks()
  store.updateItem(props.item.id, changed).then(() => store.refetch())
}
</script>

<template>
  <q-item clickable :active="Boolean(item.done)" active-class="text-positive">
    <q-item-section side>
      <q-icon
        :name="item.groupId ? 'event_repeat' : 'event'"
        style="cursor: grab"
        draggable="true"
        @dragstart="(e) => $emit('ondragstart', e, item)"
        @touchmove:native="(e) => {}"
      />
    </q-item-section>
    <q-item-section class="q-pl-sm" @click="go($router, item.id)">
      <q-item-label>{{ item.name }}</q-item-label>
      <ProgressLabel
        v-if="showProgress"
        :value="item.performance / item.target"
        :label="item.performance + ' of ' + item.target"
        :hint="progressHint"
        color="positive"
        label-icon="track_changes"
        hint-icon="update"
        caption
        class="q-mb-xs"
      />
    </q-item-section>
    <q-item-section side>
      <q-btn v-if="item.done" flat round dense icon="check_box" color="positive" @click="undone" />
      <q-btn v-else-if="showProgress" flat round dense icon="plus_one" @click="increase" />
      <q-btn v-else flat round dense icon="check_box_outline_blank" @click="done" />
    </q-item-section>
  </q-item>
</template>

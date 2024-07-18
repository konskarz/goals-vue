<script setup>
import { computed, ref, watch } from 'vue'
import { date } from 'quasar'
import { useTaskStore } from '../stores/TaskStore'
import { usePersistent } from '../stores/persistent'
import GoalSelect from '../components/GoalSelect.vue'
import DateInput from '../components/DateInput.vue'
import NumberInput from '../components/NumberInput.vue'

const props = defineProps({
  id: { type: String, required: true }
})
const itemId = parseInt(props.id)
const { item, original, path, persist, changed, remove, save, back } = usePersistent(
  itemId,
  useTaskStore(),
  {
    name: '',
    goal: null,
    planned: new Date().toISOString(),
    recurring_until: null,
    target: 1,
    performance: 0,
    done: null,
    description: ''
  }
)
const allTasks = ref(false)
const disable = computed(
  () =>
    !item.value.name ||
    !item.value.planned ||
    persist.value ||
    Boolean(itemId && !changed(original, { ...item.value }))
)
const performanceHistory = computed(() => {
  const ph = item.value.performanceHistory
  if (!ph || !ph.length) return null
  return ph
    .map((log) => date.formatDate(log.updated, 'DD.MM.YYYY HH:mm') + ' to ' + log.value)
    .join(', ')
})
watch(allTasks, (newValue) => {
  path.value = newValue ? 'recurring/' + item.value.groupId : itemId
})
</script>

<template>
  <q-toolbar class="q-pl-lg">
    <q-toolbar-title v-if="!allTasks">Task</q-toolbar-title>
    <q-toolbar-title v-else>Group</q-toolbar-title>
    <q-toggle
      v-if="item.groupId"
      v-model="allTasks"
      checked-icon="done_all"
      unchecked-icon="done"
    />
    <q-btn v-if="itemId" flat round icon="delete" :disable="persist" @click="remove" />
    <q-btn flat round icon="save" :disable="disable" @click="save" />
    <q-btn flat round icon="clear" @click="back" />
  </q-toolbar>
  <q-form class="q-px-lg" @submit.prevent="save">
    <q-input
      v-model="item.name"
      label="Name"
      stack-label
      :autofocus="!itemId"
      :rules="[(val) => !!val || 'Field is required']"
      @keyup.esc="back"
    />
    <GoalSelect v-model="item.goal" label="Goal" stack-label class="q-pb-lg" />
    <DateInput
      v-if="!allTasks"
      v-model="item.planned"
      label="Planned"
      :rules="[(val) => !!val || 'Field is required']"
    />
    <DateInput v-if="itemId" v-model="item.done" label="Done" class="q-pb-lg" />
    <DateInput v-else v-model="item.recurring_until" label="Recurring until" class="q-pb-lg" />
    <NumberInput v-model="item.target" label="Target" class="q-pb-lg" />
    <NumberInput v-if="!allTasks" v-model="item.performance" label="Performance" class="q-pb-lg" />
    <q-input
      v-model="item.description"
      type="textarea"
      label="Description"
      stack-label
      class="q-pb-lg"
    />
    <q-input
      v-if="performanceHistory && !allTasks"
      v-model="performanceHistory"
      type="textarea"
      label="Performance updates"
      stack-label
      readonly
    />
  </q-form>
</template>

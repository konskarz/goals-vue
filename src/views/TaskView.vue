<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { date } from 'quasar'
import { useTaskStore } from '../stores/TaskStore'
import { usePersistent } from '../stores/persistent'
import GoalSelect from '../components/GoalSelect.vue'
import DateInput from '../components/DateInput.vue'
import NumberInput from '../components/NumberInput.vue'

const route = useRoute()
const store = useTaskStore()
const itemId = parseInt(route.params.id)
const { item, original, path, persist, changed, remove, save, back } = usePersistent(
  itemId,
  store,
  {
    name: '',
    goal: null,
    planned: null,
    recurring_until: null,
    target: 1,
    performance: 0,
    done: null,
    description: '',
    performance_history: []
  }
)
const allTasks = ref(false)
const disable = computed(
  () =>
    !item.value.name || persist.value || Boolean(itemId && !changed(original, { ...item.value }))
)
const performanceHistory = computed(() => {
  const ph = item.value.performance_history
  if (!ph || !ph.length) return null
  const getTxt = (log) => date.formatDate(log.updated, 'DD.MM.YYYY HH:mm') + ' to ' + log.value
  let txt = getTxt(ph[0])
  if (ph.length === 1) return txt
  for (let i = 1; i < ph.length; i++) txt += ', ' + getTxt(ph[i])
  return txt
})
watch(allTasks, (newValue) => {
  path.value = newValue ? 'recurring/' + item.value.group_id + '/' : itemId + '/'
})
</script>

<template>
  <q-page>
    <q-form @submit.prevent="save">
      <q-toolbar class="q-mt-md q-pl-lg">
        <q-toolbar-title v-if="!allTasks">Task</q-toolbar-title>
        <q-toolbar-title v-else>Group</q-toolbar-title>
        <q-toggle
          v-if="item.group_id"
          v-model="allTasks"
          checked-icon="done_all"
          unchecked-icon="done"
        />
        <q-btn
          v-if="itemId"
          type="button"
          flat
          round
          icon="delete"
          :disable="persist"
          @click="remove"
        />
        <q-btn type="submit" flat round icon="save" :disable="disable" />
        <q-btn type="button" flat round icon="clear" @click="back" />
      </q-toolbar>
      <div class="q-px-lg q-py-sm">
        <div class="row q-col-gutter-lg">
          <q-input
            v-model="item.name"
            label="Name"
            stack-label
            :autofocus="!itemId"
            :rules="[(val) => !!val || 'Field is required']"
            class="col-12 col-lg-6"
            @keyup.esc="back"
          />
          <GoalSelect v-model="item.goal" label="Goal" stack-label class="col-12 col-lg-6" />
          <DateInput
            v-if="!allTasks"
            v-model="item.planned"
            label="Planned"
            class="col-12 col-lg-6"
          />
          <DateInput v-if="itemId" v-model="item.done" label="Done" class="col-12 col-lg-6" />
          <DateInput
            v-else
            v-model="item.recurring_until"
            label="Recurring until"
            class="col-12 col-lg-6"
          />
          <NumberInput v-model="item.target" label="Target" class="col-12 col-lg-6" />
          <NumberInput
            v-if="!allTasks"
            v-model="item.performance"
            label="Performance"
            class="col-12 col-lg-6"
          />
        </div>
        <q-input
          v-model="item.description"
          type="textarea"
          label="Description"
          stack-label
          class="q-pt-md"
        />
        <q-input
          v-if="performanceHistory && !allTasks"
          v-model="performanceHistory"
          type="textarea"
          label="Performance updates"
          stack-label
          readonly
          class="q-pt-md"
        />
      </div>
    </q-form>
  </q-page>
</template>

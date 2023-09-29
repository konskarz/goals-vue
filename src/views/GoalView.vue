<script setup>
import { computed } from 'vue'
import { useGoalStore } from '../stores/GoalStore'
import { usePersistent } from '../stores/persistent'
import GoalSelect from '../components/GoalSelect.vue'
import DateInput from '../components/DateInput.vue'

const props = defineProps({
  id: { type: String, required: true }
})
const itemId = parseInt(props.id)
const { item, original, persist, changed, remove, save, back } = usePersistent(
  itemId,
  useGoalStore(),
  {
    name: '',
    parent: null,
    planned: null,
    description: ''
  }
)
const disable = computed(
  () =>
    !item.value.name || persist.value || Boolean(itemId && !changed(original, { ...item.value }))
)
</script>

<template>
  <q-toolbar class="q-pl-lg">
    <q-toolbar-title>Goal</q-toolbar-title>
    <q-btn v-if="itemId" flat round icon="delete" :disable="persist" @click="remove" />
    <q-btn flat round icon="save" :disable="disable" @click="save" />
    <q-btn flat round icon="clear" @click="back" />
  </q-toolbar>
  <q-form class="q-pt-sm q-px-lg column q-gutter-lg" @submit.prevent="save">
    <q-input
      v-model="item.name"
      label="Name"
      stack-label
      :autofocus="!itemId"
      :rules="[(val) => !!val || 'Field is required']"
      @keyup.esc="back"
    />
    <GoalSelect v-model="item.parent" label="Parent" stack-label :except-id="itemId" />
    <DateInput v-model="item.planned" label="Planned" />
    <q-input v-model="item.description" type="textarea" label="Description" stack-label />
  </q-form>
</template>

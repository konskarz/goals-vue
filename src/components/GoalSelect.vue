<script setup>
import { computed } from 'vue'
import { useGoalStore } from '../stores/GoalStore'

const props = defineProps({
  modelValue: {
    type: Number,
    default: null
  },
  optionDisableId: {
    type: Number,
    default: null
  }
})
const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
const store = useGoalStore()
function optionDisable(option) {
  return option.id === props.optionDisableId
}
</script>

<template>
  <q-select
    v-model="model"
    :options="store.data"
    option-value="id"
    option-label="name"
    :option-disable="optionDisable"
    emit-value
    map-options
    clearable
    clear-icon="close"
    dropdown-icon="keyboard_arrow_down"
  />
</template>

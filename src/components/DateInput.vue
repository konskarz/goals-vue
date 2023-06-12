<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: null }
})
const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return props.modelValue ? props.modelValue.slice(0, 10) : null
  },
  set(value) {
    emit('update:modelValue', value ? new Date(value).toISOString() : null)
  }
})
</script>

<template>
  <q-input v-model="model" type="date" stack-label />
</template>

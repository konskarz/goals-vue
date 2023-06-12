<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: Number, default: null }
})
const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    if (value >= 0) emit('update:modelValue', value)
  }
})
</script>

<template>
  <q-input v-model.number="model" type="number" min="0" stack-label>
    <template #append>
      <q-btn round label="-1" @click="model--" />
      <q-btn round label="+1" @click="model++" />
    </template>
  </q-input>
</template>

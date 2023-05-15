<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
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
    if (value >= 0) emit('update:modelValue', value)
  }
})
</script>

<template>
  <q-input v-model.number="model" type="number" min="0" :label="label" stack-label>
    <template #append>
      <q-btn round label="-10" @click="model -= 10" />
      <q-btn round label="-1" @click="model--" />
      <q-btn round label="+1" @click="model++" />
      <q-btn round label="+10" @click="model += 10" />
    </template>
  </q-input>
</template>

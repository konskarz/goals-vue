<script setup>
import { computed } from 'vue'
import { useGoalStore } from '../stores/GoalStore'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: { type: Number, default: null },
  exceptId: { type: Number, default: null }
})

const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
const store = useGoalStore()
const selected = computed(() => (props.modelValue ? store.getItem(props.modelValue).name : null))

function filterTreeNodes(node) {
  return node.id !== props.exceptId
}
</script>

<template>
  <q-field v-model="model" clearable clear-icon="close">
    <template #control>
      <div class="self-center full-width no-outline ellipsis" tabindex="0">
        {{ selected }}
      </div>
    </template>
    <template #append>
      <q-icon name="keyboard_arrow_down"></q-icon>
    </template>
    <q-popup-proxy fit auto-close>
      <q-banner>
        <q-tree
          v-model:selected="model"
          :nodes="store.tree"
          :filter="String(exceptId)"
          :filter-method="filterTreeNodes"
          node-key="id"
          label-key="name"
          icon="keyboard_arrow_right"
          no-selection-unset
          default-expand-all
        />
      </q-banner>
    </q-popup-proxy>
  </q-field>
</template>

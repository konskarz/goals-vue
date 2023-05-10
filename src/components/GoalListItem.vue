<script setup>
import { computed } from 'vue'
import GoalListItemSections from './GoalListItemSections.vue'

const props = defineProps({
  goal: {
    type: Object,
    required: true
  }
})
const route = { name: 'goal', params: { id: props.goal.id } }
const hasChildren = computed(() => props.goal.children && props.goal.children.length)
</script>

<template>
  <q-expansion-item
    v-if="hasChildren"
    :to="route"
    :content-inset-level="0.5"
    default-opened
    expand-icon-toggle
    expand-icon="keyboard_arrow_right"
    expanded-icon="keyboard_arrow_down"
  >
    <template #header>
      <GoalListItemSections :goal="goal" />
    </template>
    <q-list>
      <GoalListItem v-for="child in goal.children" :key="child.id" :goal="child" />
    </q-list>
  </q-expansion-item>
  <q-item v-else :to="route">
    <GoalListItemSections :goal="goal" />
  </q-item>
</template>

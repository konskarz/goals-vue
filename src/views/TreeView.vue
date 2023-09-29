<script setup>
import { ref } from 'vue'
import { useGoalStore } from '../stores/GoalStore'

const store = useGoalStore()
const tree = ref(null)
const selected = ref(null)

function go(router, id) {
  const item = tree.value.getNodeByKey(id)
  router.push({ name: item.type, params: { id } })
}
</script>

<template>
  <q-toolbar class="q-pl-lg">
    <q-toolbar-title>Tasks & Goals</q-toolbar-title>
  </q-toolbar>
  <q-tree
    v-if="store.treeAll"
    ref="tree"
    v-model:selected="selected"
    :nodes="store.treeAll"
    node-key="id"
    label-key="name"
    default-expand-all
    icon="keyboard_arrow_right"
    selected-color="primary"
    @update:selected="(target) => go($router, target)"
  />
</template>

<script setup>
import { ref } from 'vue'
import { useGoalStore } from '../stores/GoalStore'

const store = useGoalStore()
const selected = ref(null)
function go(router, id) {
  router.push({ name: 'goal', params: { id } })
}
</script>
<template>
  <q-tree
    v-model:selected="selected"
    v-model:ticked="store.treeTicked"
    v-model:expanded="store.treeExpanded"
    tick-strategy="strict"
    :nodes="store.tree"
    node-key="id"
    label-key="name"
    icon="keyboard_arrow_right"
    selected-color="primary"
    @update:selected="(target) => go($router, target)"
  >
    <template #default-header="prop">
      <div class="q-pl-xs q-pr-lg">{{ prop.node.name }}</div>
    </template>
  </q-tree>
</template>

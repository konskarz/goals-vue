<script setup>
const prop = defineProps({
  goal: {
    type: Object,
    required: true,
  },
});
const route = { name: "goal", params: { id: prop.goal.id } };
const hasChildren = prop.goal.children && prop.goal.children.length;
</script>

<template>
  <q-expansion-item
    v-if="hasChildren"
    :to="route"
    :label="goal.name"
    :content-inset-level="0.5"
    default-opened
    expand-icon-toggle
    expand-icon="keyboard_arrow_right"
    expanded-icon="keyboard_arrow_down"
    expand-separator
  >
    <GoalsGoal v-for="child in goal.children" :key="child.id" :goal="child" />
  </q-expansion-item>
  <q-item v-else :to="route">
    <q-item-section>
      <q-item-label>{{ goal.name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

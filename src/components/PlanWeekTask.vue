<script setup>
defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <q-item :to="{ name: 'time', params: { id: 'create', task: task.id } }" exact>
    <q-item-section>
      <q-item-label>{{ task.name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

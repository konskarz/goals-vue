<script setup>
defineProps({
  goal: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <q-item :to="{ name: 'time', params: { id: 'create', goal: goal.id } }" exact>
    <q-item-section>
      <q-item-label>{{ goal.name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

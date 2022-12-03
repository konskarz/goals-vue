<script setup>
defineProps({
  goal: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <li>
    <router-link
      class="nav-link"
      :to="{ name: 'time', params: { id: 0, goal: goal.id } }"
    >
      {{ goal.name }}
    </router-link>
  </li>
</template>

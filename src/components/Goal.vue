<script>
export default {
  name: 'Goal',
  props: {
    goal: Object
  }
}
</script>
<template>
  <li>
    <router-link class="nav-link" :to="{ name: 'goal', params: { id: goal.id } }">
      {{ goal.name }}
    </router-link>
  </li>
</template>
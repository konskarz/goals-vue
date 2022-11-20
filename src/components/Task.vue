<script>
export default {
  name: 'Task',
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
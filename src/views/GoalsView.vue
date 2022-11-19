<script>
import { store } from '@/store.js'
export default {
  data() {
    return {
      store
    }
  },
  created() {
    store.fetchGoals()
  }
}
</script>
<template>
  <p v-for="goal in store.goals" :key="goal.id">{{ goal.name }}</p>
</template>
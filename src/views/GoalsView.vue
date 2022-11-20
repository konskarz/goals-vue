<script>
import { store } from '@/store.js'
import Goal from '@/components/Goal.vue'
export default {
  components: {
    Goal
  },
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
  <div class="d-flex justify-content-between align-items-center my-3">
    <h1>Goals</h1>
    <div class="d-flex ms-auto">
      <button class="btn btn-outline-dark ms-2">New Goal</button>
      <button class="btn btn-outline-dark ms-2">New Task</button>
    </div>
  </div>
  <ul class="list-group-flush ps-0">
    <Goal class="list-group-item py-2"
      v-for="goal in store.goals"
      :key="goal.id" :goal="goal">
    </Goal>
  </ul>
</template>
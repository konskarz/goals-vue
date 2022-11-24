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
    if(!store.goals) store.fetchGoals()
  },
  computed: {
    children() {
      return store.goals.filter(goal => !goal.parent)
    }
  }
}
</script>
<template>
  <div class="d-flex justify-content-between align-items-center my-3">
    <h1>Goals</h1>
    <div class="d-flex ms-auto">
      <button class="btn btn-outline-dark ms-2">New Goal</button>
    </div>
  </div>
  <ul class="list-group-flush ps-0" v-if="store.goals">
    <Goal class="list-group-item py-2"
      v-for="child in children"
      :key="child.id" :goal="child" :goals="store.goals">
    </Goal>
  </ul>
</template>
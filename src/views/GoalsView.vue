<script>
import { apiService } from '@/common/api.service.js'
import Goal from '@/components/Goal.vue'
export default {
  components: {
    Goal
  },
  data() {
    return {
      goals: null
    }
  },
  created() {
    apiService('/api/goals-tree').then((data) => this.goals = data)
  },
  methods: {
    newGoal() {
      this.$router.push({ name: 'goal', params: { id: 0 } });
    }
  }
}
</script>
<template>
  <div class="d-flex justify-content-between align-items-center my-3">
    <h1>Goals</h1>
    <div class="d-flex ms-auto">
      <button class="btn btn-outline-dark ms-2" @click="newGoal">New Goal</button>
    </div>
  </div>
  <ul class="list-group-flush ps-0">
    <Goal class="list-group-item my-2"
      v-for="goal in goals"
      :key="goal.id"
      :goal="goal">
    </Goal>
  </ul>
</template>
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
  },
  computed: {
    children() {
      return store.goals.filter(goal => !goal.parent)
    }
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
  <ul class="list-group-flush ps-0" v-if="store.goals">
    <Goal class="list-group-item py-2"
      v-for="child in children"
      :key="child.id" :goal="child" :goals="store.goals">
    </Goal>
  </ul>
</template>
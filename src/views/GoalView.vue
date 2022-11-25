<script>
import { store } from '@/store.js'
export default {
  name: 'Goal',
  data() {
    return {
      store 
    }
  },
  created() {
    if(!this.store.goals) store.fetchGoals()
  },
  computed: {
    goalId() {
      return parseInt(this.$route.params.id);
    },
    goal() {
      return this.store.goals ? this.store.goals.find(goal => goal.id === this.goalId) : null
    },
    actionables() {
      return this.store.goals.filter(goal => goal.goal_type === 'actionable')
    }
  },
  methods: {
    onSubmit() {}
  }
}
</script>
<template>
  <form class="row g-3" @submit.prevent="onSubmit" v-if="goal">
    <div class="col-12">
      <div class="d-flex justify-content-between align-items-center my-3">
        <h1>Goal</h1>
        <div class="d-flex ms-auto">
          <button class="btn btn-outline-dark ms-2">Delete</button>
          <button class="btn btn-outline-dark ms-2">Save</button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <label for="inputName" class="form-label">Name</label>
      <input type="text" class="form-control" id="inputName" :value="goal.name">
    </div>
    <div class="col-md-6">
      <label for="selectParent" class="form-label">Parent</label>
      <select class="form-select" aria-label="Select Parent" id="selectParent">
        <option :selected="!goal.parent"></option>
        <option v-for="actionable in actionables" :key="actionable.id"
          :selected="goal.parent && actionable.id === goal.parent.id ? true : false">
            {{ actionable.name }}
        </option>
      </select>
    </div>
    <div class="col-md-6">
      <label for="inputPlanned" class="form-label">Planned</label>
      <input type="date" class="form-control" id="inputPlanned" :value="goal.planned ? goal.planned.slice(0, 10) : ''">
    </div>
    <div class="col-md-6">
      <label for="inputDone" class="form-label">Done</label>
      <input type="date" class="form-control" id="inputDone" :value="goal.done ? goal.done.slice(0, 10) : ''">
    </div>
    <div class="col-12">
      <label for="inputImage" class="form-label">Image</label>
      <input type="file" class="form-control" id="inputImage" :value="goal.image">
    </div>
    <div class="col-12">
      <label for="inputDescription" class="form-label">Description</label>
      <textarea rows="3" class="form-control" id="inputDescription">{{ goal.description }}</textarea>
    </div>
  </form>
</template>
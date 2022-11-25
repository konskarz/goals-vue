<script>
import { store } from '@/store.js'
export default {
  data() {
    return {
      store,
      goal: {
        name: '',
        planned: null,
        done: null,
        goal_type: 'actionable',
        description: ''
      },
      actionables: [],
      submited: false
    }
  },
  created() {
    if(!store.goals) store.fetchGoals().then(() => {
      this.actionables = store.goals.filter(goal => goal.goal_type === 'actionable')
      if(this.goalId) this.setGoal(this.goalId)
    })
    else if(this.goalId) this.setGoal(this.goalId)
  },
  computed: {
    goalId() {
      return parseInt(this.$route.params.id);
    },
    parent: {
      get() {
        return this.goal.parent ? this.goal.parent.id : null
      },
      set(value) {
        this.goal.parent = value ? this.actionables.find((actionable) => actionable.id === value) : null
      }
    },
    planned: {
      get() {
        return this.dateInput(this.goal.planned)
      },
      set(value) {
        this.goal.planned = value ? this.dateOutput(value) : null
      }
    },
    done: {
      get() {
        return this.dateInput(this.goal.done)
      },
      set(value) {
        this.goal.done = value ? this.dateOutput(value) : null
      }
    }
  },
  methods: {
    setGoal(id) {
      this.goal = store.goals.find(goal => goal.id === id)
    },
    dateInput(str) {
      return str ? str.slice(0, 10) : null
    },
    dateOutput(str) {
      return new Date(str).toISOString()
    },
    saveGoal() {
      this.submited = true
      if(this.goalId) store.updateGoal(this.goalId, this.goal).then(() => this.toGoals())
      else store.createGoal(this.goal).then(() => this.toGoals())
    },
    deleteGoal() {
      this.submited = true
      store.deleteGoal(this.goalId).then(() => this.toGoals())
    },
    toGoals() {
      this.$router.push({ name: 'goals' });
    }
  }
}
</script>
<template>
  <form class="row g-3" @submit.prevent="saveGoal">
    <div class="col-12">
      <div class="d-flex justify-content-between align-items-center my-3">
        <h1>Goal</h1>
        <div class="d-flex ms-auto">
          <button class="btn btn-outline-dark ms-2"
            :disabled="submited" @click="deleteGoal" v-if="goalId">Delete</button>
          <button class="btn btn-outline-dark ms-2" type="submit"
            :disabled="submited" @click="saveGoal">Save</button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <label for="inputName" class="form-label">Name</label>
      <input required type="text" class="form-control" id="inputName" v-model="goal.name">
    </div>
    <div class="col-md-6">
      <label for="selectParent" class="form-label">Parent</label>
      <select class="form-select" aria-label="Select Parent" id="selectParent" v-model="parent">
        <option value=""></option>
        <option v-for="actionable in actionables" :key="actionable.id" :value="actionable.id">
          {{ actionable.name }}
        </option>
      </select>
    </div>
    <div class="col-md-6">
      <label for="inputPlanned" class="form-label">Planned</label>
      <input type="date" class="form-control" id="inputPlanned" v-model="planned">
    </div>
    <div class="col-md-6">
      <label for="inputDone" class="form-label">Done</label>
      <input type="date" class="form-control" id="inputDone" v-model="done">
    </div>
    <div class="col-12">
      <label for="inputImage" class="form-label">Image</label>
      <input type="file" class="form-control" id="inputImage" :value="goal.image">
    </div>
    <div class="col-12">
      <label for="inputDescription" class="form-label">Description</label>
      <textarea rows="3" class="form-control" id="inputDescription" v-model="goal.description"></textarea>
    </div>
  </form>
</template>
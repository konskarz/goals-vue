<script>
import { apiService } from '@/common/api.service.js'
export default {
  data() {
    return {
      endpoint: '/api/goals/',
      goal: {
        name: '',
        parent_id: null,
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
    apiService(this.endpoint).then((data) => {
      if(this.goalId) this.goal = data.find(goal => goal.id === this.goalId)
      this.actionables = data.filter(goal => goal.goal_type === 'actionable')
    })
  },
  computed: {
    goalId() {
      return parseInt(this.$route.params.id);
    },
    parent_id: {
      get() {
        return this.goal.parent_id ? this.goal.parent_id : null
      },
      set(value) {
        this.goal.parent_id = value ? this.actionables.find((actionable) => actionable.id === value) : null
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
    dateInput(str) {
      return str ? str.slice(0, 10) : null
    },
    dateOutput(str) {
      return new Date(str).toISOString()
    },
    saveGoal() {
      this.submited = true
      if(this.goalId) apiService(this.endpoint + this.goalId + '/', 'PUT', this.goal).then(() => this.toGoals())
      else apiService(this.endpoint, 'POST', this.goal).then(() => this.toGoals())
    },
    deleteGoal() {
      this.submited = true
      apiService(this.endpoint + this.goalId + '/', 'DELETE').then(() => this.toGoals())
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
      <select class="form-select" aria-label="Select Parent" id="selectParent" v-model="goal.parent_id">
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
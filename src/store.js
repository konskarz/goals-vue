import { reactive } from 'vue'
import { apiService } from '@/api.service.js'
export const store = reactive({
  key_results: null,
  goals: null,
  times: null,
  goal: null,
  time: null,
  async fetchProgress() {
    const data = await apiService('/api/progress/')
    this.key_results = data.key_results
  },
  async fetchGoals() {
    this.goals = await apiService('/api/goals-tree/')
  },
  async fetchGoal(id) {
    this.goal = await apiService(`/api/goals/${id}/`)
  },
  async fetchTimes() {
    this.times = await apiService('/api/times/')
  },
  async fetchTime(id) {
    // this.time = await apiService(`/api/times/${id}/`)
    this.time = this.times.find(time => time.id === id)
  }
})

import { reactive } from 'vue'
import { apiService } from '@/api.service.js'
export const store = reactive({
  key_results: null,
  goals: null,
  times: null,
  async fetchProgress() {
    const data = await apiService('/api/progress/')
    this.key_results = data.key_results
  },
  async fetchTimes() {
    this.times = await apiService('/api/times/')
  },
  async fetchGoals() {
    this.goals = await apiService('/api/goals/')
  }
})

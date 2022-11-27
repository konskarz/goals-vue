import { reactive } from 'vue'
import { apiService } from '@/common/api.service.js'
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
  },
  createGoal(data) {
    return apiService(`/api/goals/`, 'POST', data)
  },
  updateGoal(id, data) {
    return apiService(`/api/goals/${id}/`, 'PUT', data)
  },
  deleteGoal(id) {
    return apiService(`/api/goals/${id}/`, 'DELETE')
  },
  createTime(data) {
    return apiService(`/api/times/`, 'POST', data)
  },
  updateTime(id, data) {
    return apiService(`/api/times/${id}/`, 'PUT', data)
  },
  deleteTime(id) {
    return apiService(`/api/times/${id}/`, 'DELETE')
  }

})

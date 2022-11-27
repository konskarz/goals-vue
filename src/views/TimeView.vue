<script>
import { store } from '@/store.js'
export default {
  name: 'Time',
  data() {
    return {
      store,
      time: {
        goal: null,
        start: null,
        end: null,
        duration: null,
        description: ''
      },
      submited: false
    }
  },
  created() {
    if(!this.timeId) this.time.goal = this.goalId
    else {
      if(!store.goals) store.fetchTimes().then(() => this.setTime(this.timeId))
      else this.setTime(this.timeId)
    }
  },
  computed: {
    timeId() {
      return parseInt(this.$route.params.id)
    },
    goalId() {
      return parseInt(this.$route.params.goal)
    },
    start: {
      get() {
        return this.dateInput(this.time.start)
      },
      set(value) {
        this.time.start = value ? this.dateOutput(value) : null
      }
    },
    end: {
      get() {
        return this.dateInput(this.time.end)
      },
      set(value) {
        this.time.end = value ? this.dateOutput(value) : null
      }
    }
  },
  methods: {
    setTime(id) {
      this.time = store.times.find(time => time.id === id)
    },
    dateInput(str) {
      return str ? str.slice(0, 10) : null
    },
    dateOutput(str) {
      return new Date(str).toISOString()
    },
    saveTime() {
      this.submited = true
      if(this.timeId) store.updateTime(this.timeId, this.time).then(() => this.toTimes())
      else store.createTime(this.time).then(() => this.toProgress())
    },
    deleteTime() {
      this.submited = true
      store.deleteTime(this.timeId).then(() => this.toTimes())
    },
    toTimes() {
      this.$router.push({ name: 'times' });
    },
    toProgress() {
      this.$router.push({ name: 'progress' });
    }
  }
}
</script>
<template>
  <form class="row g-3" @submit.prevent>
    <div class="col-12">
      <div class="d-flex justify-content-between align-items-center my-3">
        <h1>Time</h1>
        <div class="d-flex ms-auto">
          <button class="btn btn-outline-dark ms-2"
            :disabled="submited" @click="deleteTime" v-if="timeId">Delete</button>
          <button class="btn btn-outline-dark ms-2"
            :disabled="submited" @click="saveTime">Save</button>
       </div>
      </div>
    </div>
    <div class="col-md-6">
      <label for="staticGoal" class="form-label">Goal</label>
      <input type="text" readonly class="form-control-plaintext" id="staticGoal" :value="time.goal">
    </div>
    <div class="col-md-6">
      <label for="inputDuration" class="form-label">Duration</label>
      <input type="number" class="form-control" id="inputDuration" v-model="time.duration">
    </div>
    <div class="col-md-6">
      <label for="inputStart" class="form-label">Start</label>
      <input type="date" class="form-control" id="inputStart" v-model="start">
    </div>
    <div class="col-md-6">
      <label for="inputEnd" class="form-label">Done</label>
      <input type="date" class="form-control" id="inputEnd" v-model="end">
    </div>
    <div class="col-12">
      <label for="inputDescription" class="form-label">Description</label>
      <textarea rows="3" class="form-control" id="inputDescription" v-model="time.description"></textarea>
    </div>
  </form>
</template>
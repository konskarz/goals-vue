<script>
import { store } from '@/store.js'
export default {
  name: 'Time',
  data() {
    return {
      store 
    }
  },
  created() {
    if(!this.store.times) store.fetchTimes()
  },
  computed: {
    timeId() {
      return parseInt(this.$route.params.id);
    },
    time() {
      return this.store.times ? this.store.times.find(time => time.id === this.timeId) : null
    }
  },
  methods: {
    onSubmit() {}
  }
}
</script>
<template>
  <form class="row g-3" @submit.prevent="onSubmit" v-if="time">
    <div class="col-12">
      <div class="d-flex justify-content-between align-items-center my-3">
        <h1>Time</h1>
        <div class="d-flex ms-auto">
          <button class="btn btn-outline-dark ms-2">Save</button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <label for="staticGoal" class="form-label">Goal</label>
      <input type="text" readonly class="form-control-plaintext" id="staticGoal" :value="time.goal">
    </div>
    <div class="col-md-6">
      <label for="inputDuration" class="form-label">Duration</label>
      <input type="number" class="form-control" id="inputDuration" :value="time.duration">
    </div>
    <div class="col-md-6">
      <label for="inputStart" class="form-label">Start</label>
      <input type="date" class="form-control" id="inputStart" :value="time.start ? time.start.slice(0, 10) : ''">
    </div>
    <div class="col-md-6">
      <label for="inputEnd" class="form-label">Done</label>
      <input type="date" class="form-control" id="inputEnd" :value="time.end ? time.end.slice(0, 10) : ''">
    </div>
    <div class="col-12">
      <label for="inputDescription" class="form-label">Description</label>
      <textarea rows="3" class="form-control" id="inputDescription">{{ time.description }}</textarea>
    </div>
  </form>
</template>
<script>
import { store } from '@/store.js'
export default {
  data() {
    return {
      store
    }
  },
  created() {
    if(!store.times) store.fetchTimes()
  }
}
</script>
<template>
  <h1 class="my-3">Times</h1>
  <table class="table" v-if="store.times">
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Date</th>
        <th scope="col">Goal</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="time in store.times" :key="time.id">
        <th scope="row">
          <span class="badge bg-primary rounded-pill">
            <router-link class="nav-link"
              :to="{ name: 'time', params: { id: time.id }}">
              {{ time.duration }}
            </router-link>
          </span>
        </th>
        <td>{{ time.start ? new Date(time.start).toDateString() : '' }}</td>
        <td>{{ time.goal }}</td>
      </tr>
    </tbody>
  </table>
</template>
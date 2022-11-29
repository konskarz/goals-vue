<script>
import useSWRV from 'swrv'
export default {
  data() {
    return {
      endpoint: '/api/times/',
      times: null
    }
  },
  created() {
    const { data } = useSWRV(this.endpoint)
    this.times = data
  }
}
</script>
<template>
  <h1 class="my-3">Times</h1>
  <table class="table" v-if="times">
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Date</th>
        <th scope="col">Goal</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="time in times" :key="time.id">
        <th scope="row">
          <span class="badge bg-primary rounded-pill">
            <router-link
              class="nav-link"
              :to="{ name: 'time', params: { id: time.id, goal: time.goal }}"
            >
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
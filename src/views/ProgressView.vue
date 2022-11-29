<script>
import { apiService } from '@/common/api.service.js'
import Week from '@/components/Week.vue'
export default {
  components: {
    Week
  },
  data() {
    return {
      key_results: null
    }
  },
  created() {
    apiService('/api/progress').then((data) => this.key_results = data.key_results)
  }
}
</script>
<template>
  <h1 class="my-3">Progress</h1>
  <ul class="list-group-flush ps-0">
    <Week
      class="list-group-item py-2"
      v-for="(week, key) in key_results"
      :key="key"
      :week="week"
    ></Week>
  </ul>
</template>
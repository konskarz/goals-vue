<script>
import { store } from '@/store.js'
import Week from '@/components/Week.vue'
export default {
  components: {
    Week
  },
  data() {
    return {
      store
    }
  },
  created() {
    store.fetchProgress()
  }
}
</script>
<template>
  <h1 class="my-3">Progress</h1>
  <ul class="list-group-flush ps-0">
    <Week class="list-group-item py-2"
      v-for="(week, key) in store.key_results"
      :key="key" :week="week"></Week>
  </ul>
</template>
<script>
import { store } from '@/store.js'
export default {
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
  <p v-for="(week, key) in store.key_results" :key="key">Week {{ week.week }}</p>
</template>
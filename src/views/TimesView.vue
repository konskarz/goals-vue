<script>
import { store } from '@/store.js'
export default {
  data() {
    return {
      store
    }
  },
  created() {
    store.fetchTimes()
  }
}
</script>
<template>
  <p v-for="time in store.times" :key="time.id">{{ time.duration }}</p>
</template>
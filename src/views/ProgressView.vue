<script>
import useSWRV from "swrv";
import Week from "@/components/ProgressWeek.vue";
export default {
  components: {
    Week,
  },
  data() {
    return {
      endpoint: "/api/progress/",
      progress: null,
    };
  },
  created() {
    const { data } = useSWRV(this.endpoint);
    this.progress = data;
  },
};
</script>
<template>
  <h1 class="my-3">Progress</h1>
  <ul class="list-group-flush ps-0" v-if="progress">
    <Week
      class="list-group-item py-2"
      v-for="(week, key) in progress.key_results"
      :key="key"
      :week="week"
    ></Week>
  </ul>
</template>

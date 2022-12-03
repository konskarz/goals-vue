<script setup>
import useSWRV from "swrv";
import Week from "@/components/ProgressWeek.vue";

const endpoint = "/api/progress/";
const { data: progress } = useSWRV(endpoint);
</script>

<template>
  <h1 class="my-3">Progress</h1>
  <ul v-if="progress" class="list-group-flush ps-0">
    <Week
      v-for="(week, key) in progress.key_results"
      :key="key"
      :week="week"
      class="list-group-item py-2"
    >
      {{ week.week }}
    </Week>
  </ul>
</template>

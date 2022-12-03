<script setup>
import useSWRV from "swrv";
import { timeToDate } from "@/common/date.format.js";

const endpoint = "/api/times/";
const { data: times } = useSWRV(endpoint);
</script>

<template>
  <h1 class="my-3">Times</h1>
  <table v-if="times" class="table">
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
              :to="{ name: 'time', params: { id: time.id, goal: time.goal } }"
            >
              {{ time.duration }}
            </router-link>
          </span>
        </th>
        <td>{{ timeToDate(time.start) }}</td>
        <td>{{ time.goal }}</td>
      </tr>
    </tbody>
  </table>
</template>

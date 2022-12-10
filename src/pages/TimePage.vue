<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import apiClient from "@/stores/api.client";

const router = useRouter();
const route = useRoute();
const processingData = ref(false);
const pageItem = ref({
  goal: null,
  start: null,
  end: null,
  duration: null,
  description: "",
});

const mainEndpoint = "/api/times/";
const pageItemId = computed(() => parseInt(route.params.id));
if (pageItemId.value) {
  const { data: mainData } = apiClient.read(mainEndpoint + pageItemId.value);
  const setPageItem = (newData) => {
    pageItem.value = newData;
  };
  if (mainData.value) {
    setPageItem(mainData.value);
  } else {
    watch(mainData, setPageItem);
  }
} else {
  pageItem.value.goal = parseInt(route.params.goal);
  pageItem.value.start = new Date().toISOString();
}

const start = computed({
  get() {
    return pageItem.value.start ? pageItem.value.start.slice(0, 10) : null;
  },
  set(value) {
    pageItem.value.start = value ? new Date(value).toISOString() : null;
  },
});
const end = computed({
  get() {
    return pageItem.value.end ? pageItem.value.end.slice(0, 10) : null;
  },
  set(value) {
    pageItem.value.end = value ? new Date(value).toISOString() : null;
  },
});

function deletePageItem() {
  processingData.value = true;
  apiClient.delete(mainEndpoint + pageItemId.value + "/").then(() => goBack());
}
function savePageItem() {
  if (!pageItem.value.duration) return;
  processingData.value = true;
  if (pageItemId.value) {
    apiClient
      .update(mainEndpoint + pageItemId.value + "/", pageItem.value)
      .then(() => goBack());
  } else {
    apiClient.create(mainEndpoint, pageItem.value).then(() => goBack());
  }
}
function goBack() {
  router.back();
}
</script>

<template>
  <form class="row g-3" @submit.prevent="savePageItem">
    <div class="col-12">
      <div class="d-flex justify-content-between align-items-center my-3">
        <h1>Time</h1>
        <div class="d-flex ms-auto">
          <button
            v-if="pageItemId"
            type="button"
            :disabled="processingData"
            class="btn btn-outline-dark ms-2"
            @click="deletePageItem"
          >
            Delete
          </button>
          <button
            type="submit"
            :disabled="processingData"
            class="btn btn-outline-dark ms-2"
          >
            Save
          </button>
          <button
            type="button"
            class="btn btn-outline-dark ms-2"
            @click="goBack"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <label for="staticGoal" class="form-label">Goal</label>
      <input
        id="staticGoal"
        type="text"
        readonly
        :value="pageItem.goal"
        class="form-control-plaintext"
      />
    </div>
    <div class="col-md-6">
      <label for="inputDuration" class="form-label">Duration</label>
      <input
        id="inputDuration"
        v-model="pageItem.duration"
        type="number"
        required
        :autofocus="!pageItemId"
        class="form-control"
        @keyup.esc="goBack"
      />
    </div>
    <div class="col-md-6">
      <label for="inputStart" class="form-label">Start</label>
      <input id="inputStart" v-model="start" type="date" class="form-control" />
    </div>
    <div class="col-md-6">
      <label for="inputEnd" class="form-label">Done</label>
      <input id="inputEnd" v-model="end" type="date" class="form-control" />
    </div>
    <div class="col-12">
      <label for="inputDescription" class="form-label">Description</label>
      <textarea
        id="inputDescription"
        v-model="pageItem.description"
        rows="3"
        class="form-control"
      ></textarea>
    </div>
  </form>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import apiClient from "@/stores/api.client";

const router = useRouter();
const route = useRoute();
const processingData = ref(false);
const pageItem = ref({
  name: "",
  goal: null,
  planned: null,
  planned_total_time: null,
  done: null,
  description: "",
});

const mainEndpoint = "/api/v2/tasks/";
const { data: parentItems } = apiClient.read("/api/v2/goals/");
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
}

const planned = computed({
  get() {
    return pageItem.value.planned ? pageItem.value.planned.slice(0, 10) : null;
  },
  set(value) {
    pageItem.value.planned = value ? new Date(value).toISOString() : null;
  },
});
const done = computed({
  get() {
    return pageItem.value.done ? pageItem.value.done.slice(0, 10) : null;
  },
  set(value) {
    pageItem.value.done = value ? new Date(value).toISOString() : null;
  },
});

function deletePageItem() {
  processingData.value = true;
  apiClient.delete(mainEndpoint + pageItemId.value + "/").then(() => goBack());
}
function savePageItem() {
  if (!pageItem.value.name) return;
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
        <h1>Task</h1>
        <div class="d-flex ms-auto">
          <button
            v-if="pageItemId"
            type="button"
            class="btn btn-outline-dark ms-2"
            :disabled="processingData"
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
    <div class="col-12">
      <label for="inputName" class="form-label">Name</label>
      <input
        id="inputName"
        v-model="pageItem.name"
        required
        :autofocus="!pageItemId"
        type="text"
        class="form-control"
        @keyup.esc="goBack"
      />
    </div>
    <div class="col-md-6">
      <label for="selectParent" class="form-label">Parent</label>
      <select
        id="selectParent"
        v-model="pageItem.goal"
        class="form-select"
        aria-label="Select Parent"
      >
        <option v-for="item in parentItems" :key="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </select>
    </div>
    <div class="col-md-6">
      <label for="inputPlanned" class="form-label">Planned</label>
      <input
        id="inputPlanned"
        v-model="planned"
        type="date"
        class="form-control"
      />
    </div>
    <div class="col-md-6">
      <label for="inputDuration" class="form-label">Duration</label>
      <input
        id="inputDuration"
        v-model="pageItem.planned_total_time"
        type="number"
        class="form-control"
      />
    </div>
    <div class="col-md-6">
      <label for="inputDone" class="form-label">Done</label>
      <input id="inputDone" v-model="done" type="date" class="form-control" />
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

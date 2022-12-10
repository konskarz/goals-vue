<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import apiClient from "stores/api.client";

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
  <q-page padding>
    <q-form @submit.prevent="savePageItem">
      <q-toolbar>
        <q-toolbar-title>Task</q-toolbar-title>
        <q-btn
          v-if="pageItemId"
          type="button"
          flat
          round
          icon="delete"
          :disable="processingData"
          @click="deletePageItem"
        />
        <q-btn type="submit" flat round icon="save" :disable="processingData" />
        <q-btn type="button" flat round icon="clear" @click="goBack" />
      </q-toolbar>
      <div class="q-pa-md">
        <q-input
          v-model="pageItem.name"
          label="Name"
          stack-label
          :autofocus="!pageItemId"
          :rules="[(val) => !!val || 'Field is required']"
          @keyup.esc="goBack"
        />
        <div class="row q-col-gutter-lg">
          <q-select
            v-model="pageItem.goal"
            :options="parentItems"
            option-value="id"
            option-label="name"
            emit-value
            map-options
            label="Parent"
            stack-label
            class="col-12 col-sm-6"
          />
          <q-input
            v-model="planned"
            type="date"
            label="Planned"
            stack-label
            class="col-12 col-sm-6"
          />
          <q-input
            v-model="pageItem.planned_total_time"
            type="number"
            label="Duration"
            stack-label
            class="col-12 col-sm-6"
          />
          <q-input
            v-model="done"
            type="date"
            label="Done"
            stack-label
            class="col-12 col-sm-6"
          />
        </div>
        <q-input
          v-model="pageItem.description"
          type="textarea"
          label="Description"
          stack-label
          class="q-pt-md"
        />
      </div>
    </q-form>
  </q-page>
</template>

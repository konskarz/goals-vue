<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import apiClient from "stores/api.client";
import DateInput from "components/DateInput.vue";

const router = useRouter();
const route = useRoute();
const processingData = ref(false);
const pageItem = ref({
  task: parseInt(route.params.task),
  start: new Date().toISOString(),
  end: null,
  duration: null,
  description: "",
});

const mainEndpoint = "/api/v2/times/";
const pageItemId = computed(() => parseInt(route.params.id));
if (pageItemId.value) {
  const { data: mainData } = apiClient.read(mainEndpoint + pageItemId.value);
  const setPageItem = (newData) => {
    pageItem.value = newData;
  };
  if (mainData.value) {
    setPageItem(mainData.value);
  }
  watch(mainData, setPageItem);
}

function deletePageItem() {
  processingData.value = true;
  apiClient.delete(mainEndpoint + pageItemId.value + "/").then(() => goBack());
}
function savePageItem() {
  processingData.value = true;
  if (pageItemId.value) {
    apiClient
      .replace(mainEndpoint + pageItemId.value + "/", pageItem.value)
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
        <q-toolbar-title>Time</q-toolbar-title>
        <q-btn
          v-if="pageItemId"
          type="button"
          flat
          round
          icon="delete"
          :disable="processingData"
          @click="deletePageItem"
        />
        <q-btn
          type="submit"
          flat
          round
          icon="save"
          :disable="!pageItem.duration || processingData"
        />
        <q-btn type="button" flat round icon="clear" @click="goBack" />
      </q-toolbar>
      <div class="q-pa-md">
        <div class="row q-col-gutter-lg">
          <q-input
            v-model="pageItem.task"
            label="Task"
            stack-label
            readonly
            class="col-12 col-sm-6"
          />
          <q-input
            v-model="pageItem.duration"
            type="number"
            label="Duration"
            stack-label
            class="col-12 col-sm-6"
            :autofocus="!pageItemId"
            :rules="[(val) => !!val || 'Field is required']"
            @keyup.esc="goBack"
          />
          <DateInput
            v-model="pageItem.start"
            label="Start"
            class="col-12 col-sm-6"
          />
          <DateInput
            v-model="pageItem.end"
            label="End"
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

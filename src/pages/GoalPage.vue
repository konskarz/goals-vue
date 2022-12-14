<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import apiClient from "stores/api.client";
import ParentSelect from "components/ParentSelect.vue";
import DateInput from "components/DateInput.vue";

const router = useRouter();
const route = useRoute();
const processingData = ref(false);
const pageItem = ref({
  name: "",
  parent: null,
  planned: null,
  description: "",
});

const mainEndpoint = "/api/v2/goals/";
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
        <q-toolbar-title>Goal</q-toolbar-title>
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
          :disable="!pageItem.name || processingData"
        />
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
          <ParentSelect
            v-model="pageItem.parent"
            label="Parent"
            :option-disable-id="pageItemId"
            class="col-12 col-sm-6"
          />
          <DateInput
            v-model="pageItem.planned"
            label="Planned"
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

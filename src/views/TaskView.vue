<script setup>
import { useRoute } from "vue-router";
import { usePersistent } from "../stores/persistent";
import ParentSelect from "../components/ParentSelect.vue";
import DateInput from "../components/DateInput.vue";

const route = useRoute();
const itemId = parseInt(route.params.id);
const { item, persist, remove, save, back } = usePersistent(
  {
    name: "",
    goal: null,
    planned: null,
    planned_total_time: null,
    done: null,
    description: "",
  },
  "/api/v2/tasks/",
  itemId
);
</script>

<template>
  <q-page padding>
    <q-form @submit.prevent="save">
      <q-toolbar>
        <q-toolbar-title>Task</q-toolbar-title>
        <q-btn
          v-if="itemId"
          type="button"
          flat
          round
          icon="delete"
          :disable="persist"
          @click="remove"
        />
        <q-btn
          type="submit"
          flat
          round
          icon="save"
          :disable="!item.name || persist"
        />
        <q-btn type="button" flat round icon="clear" @click="back" />
      </q-toolbar>
      <div class="q-pa-md">
        <q-input
          v-model="item.name"
          label="Name"
          stack-label
          :autofocus="!itemId"
          :rules="[(val) => !!val || 'Field is required']"
          @keyup.esc="back"
        />
        <div class="row q-col-gutter-lg">
          <ParentSelect
            v-model="item.goal"
            label="Goal"
            class="col-12 col-sm-6"
          />
          <q-input
            v-model="item.planned_total_time"
            type="number"
            label="Duration"
            stack-label
            class="col-12 col-sm-6"
          />
          <DateInput
            v-model="item.planned"
            label="Planned"
            class="col-12 col-sm-6"
          />
          <DateInput v-model="item.done" label="Done" class="col-12 col-sm-6" />
        </div>
        <q-input
          v-model="item.description"
          type="textarea"
          label="Description"
          stack-label
          class="q-pt-md"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useTimeStore } from "../stores/TimeStore";
import { useTaskStore } from "../stores/TaskStore";
import { usePersistent } from "../stores/persistent";
import DateInput from "../components/DateInput.vue";
import DurationInput from "../components/DurationInput.vue";

const route = useRoute();
const store = useTimeStore();
const taskStore = useTaskStore();
const itemId = parseInt(route.params.id);
const { item, persist, remove, save, back } = usePersistent(
  {
    task: parseInt(route.params.task),
    start: new Date().toISOString(),
    end: null,
    duration: null,
    description: "",
  },
  "/times/",
  store,
  itemId
);
const taskName = computed(() => taskStore.getItem(item.value.task).name);
</script>

<template>
  <q-page padding>
    <q-form @submit.prevent="save">
      <q-toolbar>
        <q-toolbar-title>Time</q-toolbar-title>
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
          :disable="!item.duration || persist"
        />
        <q-btn type="button" flat round icon="clear" @click="back" />
      </q-toolbar>
      <div class="q-pa-md">
        <div class="row q-col-gutter-lg">
          <q-input
            v-model="taskName"
            label="Task"
            stack-label
            readonly
            class="col-12 col-sm-6"
          />
          <DurationInput
            v-model="item.duration"
            label="Duration"
            class="col-12 col-sm-6"
            :autofocus="!itemId"
            :rules="[(val) => !!val || 'Field is required']"
            @keyup.esc="back"
          />
          <DateInput
            v-model="item.start"
            label="Start"
            class="col-12 col-sm-6"
          />
          <DateInput v-model="item.end" label="End" class="col-12 col-sm-6" />
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

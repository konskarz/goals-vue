<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useQuasar, date } from "quasar";
import { usePersistent } from "../stores/persistent";
import GoalSelect from "../components/GoalSelect.vue";
import DateInput from "../components/DateInput.vue";
import NumberInput from "../components/NumberInput.vue";
import DurationInput from "../components/DurationInput.vue";

const route = useRoute();
const $q = useQuasar();
const itemId = parseInt(route.params.id);
const group = "recurring/";
const { item, path, persist, remove, save, back } = usePersistent(
  {
    name: "",
    goal: null,
    planned: null,
    recurring_until: null,
    target: 1,
    performance: 0,
    planned_total_time: null,
    done: null,
    description: "",
    performance_history: [],
  },
  "/tasks/",
  itemId
);
const performanceHistory = computed(() => {
  const ph = item.value.performance_history;
  if (!ph || !ph.length) return null;
  const getTxt = (log) =>
    date.formatDate(log.updated, "DD.MM.YYYY HH:mm") + " to " + log.value;
  let txt = getTxt(ph[0]);
  if (ph.length === 1) return txt;
  for (let i = 1; i < ph.length; i++) txt += ", " + getTxt(ph[i]);
  return txt;
});
const options = {
  type: "radio",
  model: "this",
  items: [
    { label: "This task", value: "this" },
    { label: "All tasks", value: "all" },
  ],
};
function removeOptions() {
  if (item.value.group_id) {
    $q.dialog({
      title: "Delete recurring task",
      cancel: true,
      ok: "Delete",
      options: options,
    }).onOk((data) => {
      if (data === "all") path.value = group + item.value.group_id + "/";
      remove();
    });
  } else {
    remove();
  }
}
function saveOptions() {
  if (item.value.group_id) {
    $q.dialog({
      title: "Save recurring task",
      cancel: true,
      ok: "Save",
      options: options,
    }).onOk((data) => {
      if (data === "all") path.value = group + item.value.group_id + "/";
      save();
    });
  } else {
    save();
  }
}
</script>

<template>
  <q-page padding>
    <q-form @submit.prevent="saveOptions">
      <q-toolbar>
        <q-avatar v-if="item.group_id" icon="event_repeat" />
        <q-toolbar-title>Task</q-toolbar-title>
        <q-btn
          v-if="itemId"
          type="button"
          flat
          round
          icon="delete"
          :disable="persist"
          @click="removeOptions"
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
          <GoalSelect
            v-model="item.goal"
            label="Goal"
            stack-label
            class="col-12 col-sm-6"
          />
          <DateInput
            v-model="item.planned"
            label="Planned"
            class="col-12 col-sm-6"
          />
          <DateInput
            v-if="!itemId"
            v-model="item.recurring_until"
            label="Recurring until"
            class="col-12 col-sm-6"
          />
          <NumberInput
            v-model="item.target"
            label="Target"
            class="col-12 col-sm-6"
          />
          <NumberInput
            v-model="item.performance"
            label="Performance"
            class="col-12 col-sm-6"
          />
          <DurationInput
            v-model="item.planned_total_time"
            label="Planned total time"
            class="col-12 col-sm-6"
          />
          <DateInput
            v-if="itemId"
            v-model="item.done"
            label="Done"
            class="col-12 col-sm-6"
          />
        </div>
        <q-input
          v-model="item.description"
          type="textarea"
          label="Description"
          stack-label
          class="q-pt-md"
        />
        <q-input
          v-if="performanceHistory"
          v-model="performanceHistory"
          type="textarea"
          label="Performance updates"
          stack-label
          readonly
          class="q-pt-md"
        />
      </div>
    </q-form>
  </q-page>
</template>
<script setup>
import apiClient from "stores/api.client";
const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
  slots: {
    type: Array,
    required: true,
  },
});
function createTime(value) {
  apiClient.create("/api/v2/times/", {
    task: props.task.id,
    start: new Date().toISOString(),
    end: null,
    duration: value,
    description: "",
  });
}
function setDone() {
  apiClient.update("/api/v2/tasks/" + props.task.id + "/", {
    done: new Date().toISOString(),
  });
}
</script>

<template>
  <q-item clickable>
    <q-item-section>
      <q-item-label>{{ task.name }}</q-item-label>
      <q-menu auto-close>
        <template v-for="(group, groupIdx) in slots" :key="groupIdx">
          <q-btn-group spread flat>
            <q-btn
              v-for="(slot, slotIdx) in group"
              :key="slotIdx"
              :label="'+ ' + slot[1]"
              no-caps
              class="text-no-wrap"
              @click="createTime(slot[0])"
            />
          </q-btn-group>
        </template>
        <q-separator />
        <q-btn flat no-caps label="Done" class="full-width" @click="setDone" />
      </q-menu>
    </q-item-section>
  </q-item>
</template>

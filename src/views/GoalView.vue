<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useGoalStore } from '../stores/GoalStore'
import { usePersistent } from '../stores/persistent'
import GoalSelect from '../components/GoalSelect.vue'
import DateInput from '../components/DateInput.vue'

const route = useRoute()
const store = useGoalStore()
const itemId = parseInt(route.params.id)
const { item, original, persist, changed, remove, save, back } = usePersistent(itemId, store, {
  name: '',
  parent: null,
  planned: null,
  description: ''
})
const disable = computed(
  () =>
    !item.value.name || persist.value || Boolean(itemId && !changed(original, { ...item.value }))
)
</script>

<template>
  <q-page padding>
    <q-form @submit.prevent="save">
      <q-toolbar>
        <q-toolbar-title>Goal</q-toolbar-title>
        <q-btn
          v-if="itemId"
          type="button"
          flat
          round
          icon="delete"
          :disable="persist"
          @click="remove"
        />
        <q-btn type="submit" flat round icon="save" :disable="disable" />
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
            v-model="item.parent"
            label="Parent"
            stack-label
            :option-disable-id="itemId"
            class="col-12 col-sm-6"
          />
          <DateInput v-model="item.planned" label="Planned" class="col-12 col-sm-6" />
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

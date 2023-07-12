<script setup>
import { computed } from 'vue'
import { useGoalStore } from '../stores/GoalStore'
import { usePersistent } from '../stores/persistent'
import MainPage from '../components/MainPage.vue'
import GoalSelect from '../components/GoalSelect.vue'
import DateInput from '../components/DateInput.vue'

const props = defineProps({
  id: { type: String, required: true }
})
const itemId = parseInt(props.id)
const { item, original, persist, changed, remove, save, back } = usePersistent(
  itemId,
  useGoalStore(),
  {
    name: '',
    parent: null,
    planned: null,
    description: ''
  }
)
const disable = computed(
  () =>
    !item.value.name || persist.value || Boolean(itemId && !changed(original, { ...item.value }))
)
</script>

<template>
  <MainPage>
    <template #toolbar>
      <q-toolbar-title>Goal</q-toolbar-title>
      <q-btn v-if="itemId" flat round icon="delete" :disable="persist" @click="remove" />
      <q-btn flat round icon="save" :disable="disable" @click="save" />
      <q-btn flat round icon="clear" @click="back" />
    </template>
    <q-form class="q-pt-sm q-px-lg" @submit.prevent="save">
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
          :except-id="itemId"
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
    </q-form>
  </MainPage>
</template>

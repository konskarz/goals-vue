<script setup>
import { computed } from 'vue'
import { date } from 'quasar'

const props = defineProps({
  goal: { type: Object, required: true }
})
const caption = computed(() =>
  props.goal.planned ? date.formatDate(props.goal.planned, 'ddd MMM DD YYYY') : null
)
</script>

<template>
  <q-item-section>
    <q-item-label>{{ goal.name }}</q-item-label>
    <q-item-label caption>{{ caption }}</q-item-label>
  </q-item-section>
</template>

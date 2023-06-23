<script setup>
import { computed } from 'vue'

const props = defineProps({
  goal: { type: Object, required: true }
})
const showProgress = computed(() => props.goal.target > 0)
const caption = computed(() => [props.goal.performance, 'of', props.goal.target].join(' '))
const progress = computed(() =>
  showProgress.value ? props.goal.performance / props.goal.target : 0
)
const showAverage = computed(() => props.goal.average_performance !== null)
</script>

<template>
  <q-item-section>
    <q-item-label>{{ goal.name }}</q-item-label>
    <q-item-label v-if="showProgress" caption>{{ caption }}</q-item-label>
    <q-item-label v-if="showProgress">
      <q-linear-progress :value="progress" color="positive" />
    </q-item-label>
    <q-item-label v-if="showAverage" caption>
      <q-icon name="event_repeat" class="vertical-top" />
      {{ Math.round(goal.average_performance * 100) }}%
    </q-item-label>
    <q-item-label v-if="showAverage">
      <q-linear-progress :value="goal.average_performance" color="primary" />
    </q-item-label>
  </q-item-section>
</template>

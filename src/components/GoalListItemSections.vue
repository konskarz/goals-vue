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
const showRProgress = computed(() => props.goal.rperformance !== null)
const rprogress = computed(() =>
  showRProgress.value ? props.goal.rperformance / props.goal.rtarget : 0
)
</script>

<template>
  <q-item-section>
    <q-item-label>{{ goal.name }}</q-item-label>
    <q-item-label v-if="showProgress" caption>{{ caption }}</q-item-label>
    <q-item-label v-if="showProgress">
      <q-linear-progress :value="progress" color="positive" />
    </q-item-label>
    <q-item-label v-if="showRProgress" caption>
      <q-icon name="event_repeat" class="vertical-top" />
      {{ Math.round(rprogress * 100) }}% for {{ props.goal.rtarget }}
    </q-item-label>
    <q-item-label v-if="showRProgress">
      <q-linear-progress :value="rprogress" color="primary" />
    </q-item-label>
  </q-item-section>
</template>

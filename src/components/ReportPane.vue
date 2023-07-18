<script setup>
import ProgressLabel from './ProgressLabel.vue'

defineProps({
  item: { type: Object, required: true }
})
</script>

<template>
  <div>
    <ProgressLabel
      v-if="item.target > 0"
      :value="item.performance / item.target"
      :label="item.performance + ' of ' + item.target"
      color="positive"
      label-icon="event"
      caption
    />
    <ProgressLabel
      v-if="item.rperformance !== null"
      :value="item.rperformance / item.rtarget"
      :label="((item.rperformance / item.rtarget) * 100).toFixed(2) + '% for ' + item.rtarget"
      color="primary"
      label-icon="event_repeat"
      caption
    />
  </div>
</template>

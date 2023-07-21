<script setup>
import ProgressLabel from './ProgressLabel.vue'
import HeatmapLabel from './HeatmapLabel.vue'

defineProps({
  item: { type: Object, required: true },
  showSeries: { type: Boolean, default: false }
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
    <template v-if="showSeries && item.series">
      <HeatmapLabel
        v-for="(data, name) in item.series"
        :key="name"
        :series="[{ name, data }]"
        :height="26"
        :label="name"
        caption
        class="q-pt-sm"
      />
    </template>
  </div>
</template>

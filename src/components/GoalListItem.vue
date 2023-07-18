<script setup>
import { computed } from 'vue'
import ProgressLabel from './ProgressLabel.vue'

const props = defineProps({
  item: { type: Object, required: true }
})

const hasChildren = computed(() => props.item.children && props.item.children.length)
</script>

<template>
  <q-expansion-item
    :to="{ name: 'goal', params: { id: item.id } }"
    :content-inset-level="0.5"
    default-opened
    expand-icon-toggle
    expand-icon="keyboard_arrow_right"
    expanded-icon="keyboard_arrow_down"
    :hide-expand-icon="hasChildren ? false : true"
  >
    <template #header>
      <q-item-section :class="hasChildren ? '' : 'pr-40'">
        <q-item-label>{{ item.name }}</q-item-label>
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
          class="q-mb-xs"
        />
      </q-item-section>
    </template>
    <q-list v-if="hasChildren">
      <GoalListItem v-for="child in item.children" :key="child.id" :item="child" />
    </q-list>
  </q-expansion-item>
</template>

<style scoped>
.pr-40 {
  padding-right: 40px;
}
</style>

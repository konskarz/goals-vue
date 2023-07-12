<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: { type: Object, required: true }
})
const hasChildren = computed(() => props.item.children && props.item.children.length)
const showProgress = computed(() => props.item.target > 0)
const showRProgress = computed(() => props.item.rperformance !== null)
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
        <q-item-label v-if="showProgress" caption>
          <q-icon name="event" />
          {{ item.performance + ' of ' + item.target }}
        </q-item-label>
        <q-item-label v-if="showProgress">
          <q-linear-progress :value="item.performance / item.target" color="positive" />
        </q-item-label>
        <q-item-label v-if="showRProgress" caption>
          <q-icon name="event_repeat" />
          {{ ((item.rperformance / item.rtarget) * 100).toFixed(2) + '% for ' + item.rtarget }}
        </q-item-label>
        <q-item-label v-if="showRProgress">
          <q-linear-progress :value="item.rperformance / item.rtarget" color="primary" />
        </q-item-label>
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

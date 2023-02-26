<script setup>
import { computed } from "vue";

const props = defineProps({
  goal: {
    type: Object,
    required: true,
  },
});
const route = { name: "goal", params: { id: props.goal.id } };
const hasChildren = computed(
  () => props.goal.children && props.goal.children.length
);
const showProgress = computed(() => props.goal.tasks_target > 1);
const progress = computed(() =>
  showProgress.value
    ? props.goal.tasks_performance / props.goal.tasks_target
    : 0
);
const caption = computed(() =>
  [
    props.goal.on_track + "%",
    "·",
    props.goal.tasks_performance,
    "of",
    props.goal.tasks_target,
  ].join(" ")
);
</script>

<template>
  <q-expansion-item
    v-if="hasChildren"
    :to="route"
    :content-inset-level="0.5"
    default-opened
    expand-icon-toggle
    expand-icon="keyboard_arrow_right"
    expanded-icon="keyboard_arrow_down"
  >
    <template #header>
      <q-item-section>
        <q-item-label>{{ goal.name }}</q-item-label>
        <q-item-label v-if="showProgress" caption>{{ caption }}</q-item-label>
        <q-item-label v-if="showProgress">
          <q-linear-progress :value="progress" color="positive" />
        </q-item-label>
      </q-item-section>
    </template>
    <q-list>
      <GoalListItem
        v-for="child in goal.children"
        :key="child.id"
        :goal="child"
      />
    </q-list>
  </q-expansion-item>
  <q-item v-else :to="route">
    <q-item-section>
      <q-item-label>{{ goal.name }}</q-item-label>
      <q-item-label v-if="showProgress" caption>{{ caption }}</q-item-label>
      <q-item-label v-if="showProgress">
        <q-linear-progress :value="progress" color="positive" />
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

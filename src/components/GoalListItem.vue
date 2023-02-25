<script setup>
import { date } from "quasar";
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
const caption = computed(() =>
  props.goal.planned
    ? date.formatDate(props.goal.planned, "ddd MMM DD YYYY")
    : null
);
</script>

<template>
  <q-expansion-item
    v-if="hasChildren"
    :to="route"
    :label="goal.name"
    :caption="caption"
    :content-inset-level="0.5"
    default-opened
    expand-icon-toggle
    expand-icon="keyboard_arrow_right"
    expanded-icon="keyboard_arrow_down"
  >
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
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

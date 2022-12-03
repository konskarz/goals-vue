<script setup>
import { ref, computed } from "vue";
const prop = defineProps({
  goal: {
    type: Object,
    required: true,
  },
});
const hasChildren = computed(() => {
  return prop.goal.goal_set && prop.goal.goal_set.length;
});
const isOpen = ref(true);
function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <li>
    <div class="d-flex">
      <i
        v-if="hasChildren"
        class="flex-shrink-0 bi me-2"
        :class="isOpen ? 'bi-chevron-down' : 'bi-chevron-right'"
        @click="toggle"
      >
      </i>
      <div class="flex-grow-1" :class="hasChildren ? '' : 'ps-4'">
        <router-link
          class="nav-link"
          :to="{ name: 'goal', params: { id: goal.id } }"
        >
          {{ goal.name }}
        </router-link>
      </div>
    </div>
    <ul v-if="hasChildren" v-show="isOpen" class="list-group-flush">
      <GoalsGoal
        v-for="child in goal.goal_set"
        :key="child.id"
        class="list-group-item my-2"
        :goal="child"
      >
      </GoalsGoal>
    </ul>
  </li>
</template>

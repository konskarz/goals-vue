<script setup>
import { ref, computed } from "vue";

const prop = defineProps({
  goalId: {
    type: Number,
    required: true,
  },
  goals: {
    type: Array,
    required: true,
  },
});
const goal = computed(() => {
  return prop.goals.find((goal) => goal.id === prop.goalId);
});
const hasChildren = computed(() => {
  return goal.value.children && goal.value.children.length;
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
        v-for="childId in goal.children"
        :key="childId"
        class="list-group-item my-2"
        :goal-id="childId"
        :goals="goals"
      >
      </GoalsGoal>
    </ul>
  </li>
</template>

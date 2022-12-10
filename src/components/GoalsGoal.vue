<script setup>
import { ref } from "vue";

const prop = defineProps({
  goal: {
    type: Object,
    required: true,
  },
});
const route = { name: "goal", params: { id: prop.goal.id } };
const hasChildren = prop.goal.children && prop.goal.children.length;
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
        class="flex-shrink-0 me-2 bi"
        :class="isOpen ? 'bi-chevron-down' : 'bi-chevron-right'"
        @click="toggle"
      >
      </i>
      <div class="flex-grow-1" :class="hasChildren ? '' : 'ps-4'">
        <router-link class="nav-link" :to="route">
          {{ goal.name }}
        </router-link>
      </div>
    </div>
    <ul v-if="hasChildren" v-show="isOpen" class="list-group-flush">
      <GoalsGoal
        v-for="child in goal.children"
        :key="child.id"
        :goal="child"
        class="list-group-item my-2"
      >
      </GoalsGoal>
    </ul>
  </li>
</template>

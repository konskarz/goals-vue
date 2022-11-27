<script>
export default {
  name: 'Goal',
  props: {
    goal: Object,
    goals: Array
  },
  data() {
    return {
      isOpen: true
    }
  },
  computed: {
    children() {
      return this.goal.goal_set && this.goal.goal_set.length ?
        this.goals.filter(goal => goal.parent && goal.parent.id === this.goal.id) : null
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
<template>
  <li>
    <div class="d-flex">
      <i v-if="children"
        class="flex-shrink-0 bi me-2"
        :class="isOpen ? 'bi-chevron-down' : 'bi-chevron-right'"
        @click="toggle">
      </i>
      <div class="flex-grow-1" :class="children ? '' : 'ps-4'">
        <router-link class="nav-link"
          :to="{ name: 'goal', params: { id: goal.id }}">
          {{ goal.name }}
        </router-link>
      </div>
    </div>
    <ul v-if="children" class="list-group-flush" v-show="isOpen">
      <Goal class="list-group-item py-2"
        v-for="child in children"
        :key="child.id" :goal="child" :goals="goals">
      </Goal>
    </ul>
  </li>
</template>
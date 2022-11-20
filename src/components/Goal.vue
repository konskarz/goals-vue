<script>
export default {
  name: 'Goal',
  props: {
    goal: Object
  },
  data() {
    return {
      isOpen: true
    }
  },
  computed: {
    isFolder() {
      return this.goal.goal_set && this.goal.goal_set.length
    }
  },
  methods: {
    toggle() {
      if(this.isFolder) {
        this.isOpen = !this.isOpen
      }
    }
  }
}
</script>
<template>
  <li>
    <div class="d-flex">
      <i v-if="isFolder"
        class="flex-shrink-0 bi me-2"
        :class="isOpen ? 'bi-chevron-down' : 'bi-chevron-right'"
        @click="toggle">
      </i>
      <div class="flex-grow-1" :class="isFolder ? '' : 'ps-4'">
        <router-link class="nav-link"
          :to="{ name: 'goal', params: { id: goal.id }}">
          {{ goal.name }}
        </router-link>
      </div>
    </div>
    <ul v-if="isFolder" class="list-group-flush" v-show="isOpen">
      <Goal class="list-group-item py-2"
        v-for="goal in goal.goal_set"
        :key="goal.id" :goal="goal">
      </Goal>
    </ul>
  </li>
</template>
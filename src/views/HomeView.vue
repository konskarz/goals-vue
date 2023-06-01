<script setup>
import { useTaskStore } from '../stores/TaskStore'
import GoalSelect from '../components/GoalSelect.vue'
import WeekTimelineEntry from '../components/WeekTimelineEntry.vue'

const store = useTaskStore()
</script>

<template>
  <q-page>
    <q-toolbar class="q-mt-md q-pl-md">
      <q-toolbar-title>Plan</q-toolbar-title>
      <GoalSelect
        v-model="store.filter.goal"
        label="For Goal"
        dense
        borderless
        class="col-6 col-lg-3"
      />
      <q-btn flat round icon="filter_list">
        <q-menu>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>Hide passed done</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-toggle v-model="store.filter.done" />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>Hide passed recurring</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-toggle v-model="store.filter.recurring" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
    <q-timeline v-if="store.calendar" class="q-pl-lg">
      <WeekTimelineEntry
        v-for="(tasks, key) in store.calendar"
        :key="key"
        :tasks="tasks"
        :monday="key"
      />
    </q-timeline>
  </q-page>
</template>

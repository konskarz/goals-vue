import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useCollection } from './collection'
import { useCalendar } from './calendar'
import { useGoalStore } from './GoalStore'

export const useTaskStore = defineStore('TaskStore', () => {
  const { data, refetch, getItem, createItem, updateItem, deleteItem } = useCollection('/tasks/')
  const { beforeThisWeek, seriesRange, beforeThisDay, buildCalendar, buildSeries, changeWeek } =
    useCalendar()
  const relatedStore = useGoalStore()

  const relative = computed(() => {
    if (!data.value || !relatedStore.data) return null
    return data.value.map((item) => ({
      ...item,
      goalName: item.goal ? relatedStore.getItem(item.goal).name : null
    }))
  })
  const filter = ref({
    show: false,
    pastDone: false,
    pastRecurring: false,
    goal: null
  })
  relatedStore.$onAction(({ name, args }) => {
    if (name === 'deleteItem' && filter.value.goal === args[0]) filter.value.goal = null
  })
  const filterBranch = computed(() =>
    filter.value.goal && relatedStore.data ? relatedStore.getBranch(filter.value.goal) : null
  )
  const filtered = computed(() => {
    if (!data.value) return null
    return data.value
      .filter((task) => {
        if (!task.planned) return false
        if (beforeThisWeek(task.planned)) {
          if (!filter.value.pastDone && task.done) return false
          if (!filter.value.pastRecurring && task.group_id) return false
        }
        if (filterBranch.value && !filterBranch.value.includes(task.goal)) return false
        return true
      })
      .sort((a, b) => Date.parse(a.planned) - Date.parse(b.planned))
  })
  const calendar = computed(() =>
    filtered.value && filtered.value.length ? buildCalendar(filtered.value) : null
  )
  const series = computed(() => (data.value ? getSeries() : null))

  function buildProgress(tasks) {
    const regular = tasks.filter((task) => !task.group_id)
    const done = regular.filter((task) => task.done)
    const recurring = tasks.filter(
      (task) => task.group_id && task.planned && beforeThisDay(task.planned)
    )
    const perfsum = (tasks) =>
      tasks.reduce((sum, task) => {
        if (task.done) return sum + 1
        return task.target > 1 ? sum + task.performance / task.target : sum
      }, 0)
    return {
      target: regular.length,
      performance: done.length,
      rtarget: recurring.length,
      rperformance: recurring.length ? perfsum(recurring) : null
    }
  }
  function getSeries(group_id) {
    const rtasks = data.value
      .filter((task) => {
        if (!task.group_id || !task.planned) return false
        if (group_id && task.group_id !== group_id) return false
        return seriesRange(task.planned)
      })
      .sort((a, b) => Date.parse(a.planned) - Date.parse(b.planned))
    if (!rtasks.length) return null
    return buildSeries(rtasks)
  }
  function getProgress(goals) {
    const tasks = data.value.filter((task) => goals.includes(task.goal))
    return buildProgress(tasks)
  }
  function moveItem(item, monday) {
    const changed = { planned: changeWeek(item.planned, monday).toISOString() }
    updateItem(item.id + '/', changed).then(() => refetch())
  }

  return {
    data,
    refetch,
    getItem,
    createItem,
    updateItem,
    deleteItem,
    relative,
    filter,
    filtered,
    calendar,
    series,
    getSeries,
    getProgress,
    moveItem
  }
})

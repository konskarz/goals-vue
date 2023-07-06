import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useCollection } from './collection'
import { useCalendar } from './calendar'
import { useGoalStore } from './GoalStore'

export const useTaskStore = defineStore('TaskStore', () => {
  const { data, refetch, getItem, createItem, updateItem, deleteItem } = useCollection('/tasks/')
  const { filteredRange, heatmapRange, progressRange, buildTimeline, buildHeatmap, changeWeek } =
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
    done: false,
    recurring: false,
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
        if (filteredRange(task.planned)) {
          if (!filter.value.done && task.done) return false
          if (!filter.value.recurring && task.group_id) return false
        }
        if (filterBranch.value && !filterBranch.value.includes(task.goal)) return false
        return true
      })
      .sort((a, b) => Date.parse(a.planned) - Date.parse(b.planned))
  })
  const timeline = computed(() =>
    filtered.value && filtered.value.length ? buildTimeline(filtered.value) : null
  )
  const heatmap = computed(() => {
    if (!data.value) return null
    const rtasks = data.value
      .filter((task) => task.group_id && task.planned && heatmapRange(task.planned))
      .sort((a, b) => Date.parse(a.planned) - Date.parse(b.planned))
    if (!rtasks.length) return null
    return buildHeatmap(rtasks)
  })

  function getProgress(goals) {
    const tasks = data.value.filter((task) => goals.includes(task.goal))
    const regular = tasks.filter((task) => !task.group_id)
    const done = regular.filter((task) => task.done)
    const recurring = tasks.filter(
      (task) => task.group_id && task.planned && progressRange(task.planned)
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
    timeline,
    heatmap,
    getProgress,
    moveItem
  }
})

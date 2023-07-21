import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useCollection } from './collection'
import { useCalendar } from './calendar'
import { useGoalStore } from './GoalStore'

export const useTaskStore = defineStore('TaskStore', () => {
  const { data, refetch, getItem, createItem, updateItem, deleteItem } = useCollection('/tasks/')
  const {
    beforeThisWeek,
    afterThisWeek,
    seriesRange,
    beforeThisDay,
    buildCalendar,
    buildAgenda,
    buildSeries,
    changeWeek
  } = useCalendar()
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
    futureRecurring: false,
    emptyWeeks: false
  })
  const filtered = computed(() => {
    if (!data.value) return null
    return data.value
      .filter((item) => {
        if (!item.planned) return false
        if (beforeThisWeek(item.planned)) {
          if (!filter.value.pastDone && item.done) return false
          if (!filter.value.pastRecurring && item.group_id) return false
        }
        if (afterThisWeek(item.planned) && !filter.value.futureRecurring && item.group_id)
          return false
        if (relatedStore.treeTicked.length && !relatedStore.treeTicked.includes(item.goal))
          return false
        return true
      })
      .sort((a, b) => Date.parse(a.planned) - Date.parse(b.planned))
  })
  const calendar = computed(() =>
    filtered.value && filtered.value.length
      ? filter.value.emptyWeeks
        ? buildCalendar(filtered.value)
        : buildAgenda(filtered.value)
      : null
  )
  const series = computed(() => (data.value ? getSeries() : null))
  const report = computed(() => {
    if (!filtered.value) return null
    const report = buildReport(filtered.value)
    return report.target > 0 || report.rperformance !== null ? report : null
  })

  function buildReport(tasks) {
    const regular = tasks.filter((item) => !item.group_id)
    const done = regular.filter((item) => item.done)
    const recurring = tasks.filter(
      (item) => item.group_id && item.planned && beforeThisDay(item.planned)
    )
    const perfsum = (tasks) =>
      tasks.reduce((sum, item) => {
        if (item.done) return sum + 1
        return item.target > 1 ? sum + item.performance / item.target : sum
      }, 0)
    return {
      target: regular.length,
      performance: done.length,
      rtarget: recurring.length,
      rperformance: recurring.length ? perfsum(recurring) : null,
      series: recurring.length
        ? getSeries([...new Set(recurring.map((item) => item.group_id))])
        : null
    }
  }
  function getSeries(group_ids) {
    const rtasks = data.value
      .filter((item) => {
        if (!item.group_id || !item.planned) return false
        if (group_ids && group_ids.length && !group_ids.includes(item.group_id)) return false
        return seriesRange(item.planned)
      })
      .sort((a, b) => Date.parse(a.planned) - Date.parse(b.planned))
    return rtasks.length ? buildSeries(rtasks) : null
  }
  function getReport(goals) {
    return buildReport(data.value.filter((item) => goals.includes(item.goal)))
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
    report,
    getSeries,
    getReport,
    moveItem
  }
})

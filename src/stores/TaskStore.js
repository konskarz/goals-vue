import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { date } from 'quasar'
import { useCollection } from './collection'
import { useGoalStore } from './GoalStore'

export const useTaskStore = defineStore('TaskStore', () => {
  const { data, refetch, getItem, createItem, updateItem, deleteItem } = useCollection('/tasks/')
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
  const filterBranch = computed(() =>
    filter.value.goal ? relatedStore.getBranch(filter.value.goal) : null
  )
  relatedStore.$onAction(({ name, args }) => {
    if (name === 'deleteItem' && filter.value.goal === args[0]) filter.value.goal = null
  })
  const getDayStart = (srcDate) => date.startOfDate(srcDate, 'day')
  const getMonday = (srcDate) =>
    date.subtractFromDate(srcDate, { days: date.getDayOfWeek(srcDate) - 1 })
  const nextWeek = (srcDate) => date.addToDate(srcDate, { days: 7 })
  const getFormatedDay = (srcDate) => date.formatDate(srcDate, 'YYYY-MM-DD')
  const getFormatedMonth = (srcDate) => date.formatDate(srcDate, 'MMMM')
  const currentDate = getDayStart(new Date())
  const currentMonday = getMonday(currentDate)
  const filtered = computed(() => {
    if (!data.value) return null
    return data.value
      .filter((task) => {
        if (!task.planned) return false
        if (getDayStart(task.planned) < currentMonday) {
          if (!filter.value.done && task.done) return false
          if (!filter.value.recurring && task.group_id) return false
        }
        if (filterBranch.value && !filterBranch.value.includes(task.goal)) return false
        return true
      })
      .sort((a, b) => Date.parse(a.planned) - Date.parse(b.planned))
  })
  const timeline = computed(() => {
    if (!filtered.value || !filtered.value.length) return null
    const build = (weeks, startMonday, endMonday) => {
      let currentSunday,
        currentMonth,
        previousSunday = date.subtractFromDate(startMonday, { days: 1 })
      while (startMonday <= endMonday) {
        currentSunday = nextWeek(previousSunday)
        currentMonth = getFormatedMonth(startMonday)
        weeks[getFormatedDay(startMonday)] = {
          title: date.formatDate(startMonday, '[Week ]w · [Q]Q · YYYY · MMM D'),
          current: date.isSameDate(startMonday, currentMonday),
          start:
            currentMonth !== getFormatedMonth(previousSunday) ||
            currentMonth !== getFormatedMonth(currentSunday),
          tasks: []
        }
        startMonday = nextWeek(startMonday)
        previousSunday = currentSunday
      }
      return weeks
    }
    const start = getMonday(getDayStart(filtered.value[0].planned))
    const end = nextWeek(getMonday(getDayStart(filtered.value[filtered.value.length - 1].planned)))
    const weeks = build({}, start, end)
    filtered.value.forEach((task) => {
      weeks[getFormatedDay(getMonday(task.planned))].tasks.push(task)
    })
    return weeks
  })
  const heatmap = computed(() => {
    if (!data.value) return null
    const startDate = date.subtractFromDate(currentDate, { months: 6 })
    const rtasks = data.value
      .filter((task) => {
        if (!task.group_id || !task.planned) return false
        const planned = getDayStart(task.planned)
        if (planned > currentDate || planned < startDate) return false
        return true
      })
      .sort((a, b) => Date.parse(a.planned) - Date.parse(b.planned))
    if (!rtasks.length) return null
    const build = (weeks, startMonday, endMonday) => {
      while (startMonday <= endMonday) {
        weeks.push({ x: getFormatedDay(startMonday), y: null })
        startMonday = nextWeek(startMonday)
      }
      return weeks
    }
    const getData = (task) => {
      if (task.done) return 100
      if (task.target > 1) return Math.round((task.performance / task.target) * 100)
      return 0
    }
    const start = getMonday(getDayStart(rtasks[0].planned))
    const end = getMonday(getDayStart(rtasks[rtasks.length - 1].planned))
    return rtasks.reduce((groups, task) => {
      if (!groups[task.name]) groups[task.name] = build([], start, end)
      const key = getFormatedDay(getMonday(task.planned))
      groups[task.name].find((item) => item.x === key).y = getData(task)
      return groups
    }, {})
  })
  function sumPerformance(tasks) {
    if (!tasks.length) return null
    return tasks.reduce((sum, task) => {
      if (task.done) return sum + 1
      return task.target > 1 ? sum + task.performance / task.target : sum
    }, 0)
  }
  function getProgress(goals) {
    const tasks = data.value.filter((task) => goals.includes(task.goal))
    const regular = tasks.filter((task) => !task.group_id)
    const done = regular.filter((task) => task.done)
    const recurring = tasks.filter(
      (task) => task.group_id && task.planned && getDayStart(task.planned) <= currentDate
    )
    return {
      target: regular.length,
      performance: done.length,
      rtarget: recurring.length,
      rperformance: sumPerformance(recurring)
    }
  }
  function moveItem(item, monday) {
    const days = date.getDayOfWeek(item.planned) - 1
    const changed = { planned: date.addToDate(monday, { days }).toISOString() }
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

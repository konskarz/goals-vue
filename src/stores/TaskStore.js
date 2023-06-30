import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { date } from 'quasar'
import { useCollection } from './collection'
import { useGoalStore } from './GoalStore'

export const useTaskStore = defineStore('TaskStore', () => {
  const { data, refetch, getItem, createItem, updateItem, deleteItem } = useCollection('/tasks/')
  const relatedStore = useGoalStore()
  const relative = computed(() => {
    if (!data.value || relatedStore.data) return null
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
  const branch = computed(() =>
    filter.value.goal ? relatedStore.getBranch(filter.value.goal) : null
  )
  relatedStore.$onAction(({ name, args }) => {
    if (name === 'deleteItem' && filter.value.goal === args[0]) {
      filter.value.goal = null
    }
  })
  const getMonday = (srcDate) =>
    date.subtractFromDate(srcDate, {
      days: date.getDayOfWeek(srcDate) - 1
    })
  /*
  https://quasar.dev/quasar-utils/date-utils#format-for-display
  console.log(date.formatDate("2024-12-30", "YYYY-w")); // output: 2024-1
  */
  const getDay = (srcDate) => date.formatDate(srcDate, 'YYYY-MM-DD')
  const currentDate = date.startOfDate(new Date(), 'day')
  const currentMonday = getMonday(currentDate)
  const currentWeek = getDay(currentMonday)
  const filtered = computed(() => {
    if (!data.value) return null
    return data.value
      .filter((task) => {
        if (!task.planned) return false
        if (new Date(task.planned.slice(0, 10)) < currentMonday) {
          if (!filter.value.done && task.done) return false
          if (!filter.value.recurring && task.group_id) return false
        }
        if (branch.value && !branch.value.includes(task.goal)) {
          return false
        }
        return true
      })
      .sort((a, b) => Date.parse(a.planned) - Date.parse(b.planned))
  })
  const calendar = computed(() => {
    const build = (weeks, startMonday, endMonday) => {
      while (startMonday <= endMonday) {
        weeks[getDay(startMonday)] = []
        startMonday = date.addToDate(startMonday, { days: 7 })
      }
      return weeks
    }
    if (filtered.value && filtered.value.length) {
      const start = getMonday(filtered.value[0].planned.slice(0, 10))
      const end = date.addToDate(
        getMonday(filtered.value[filtered.value.length - 1].planned.slice(0, 10)),
        { days: 7 }
      )
      const weeks = build({}, start, end)
      filtered.value.forEach((task) => {
        weeks[getDay(getMonday(task.planned.slice(0, 10)))].push(task)
      })
      return weeks
    }
    return build({}, currentMonday, date.addToDate(currentMonday, { days: 14 }))
  })
  const recurring = computed(() => {
    if (!data.value) return null
    const startDate = date.subtractFromDate(currentDate, { months: 6 })
    const rtasks = data.value
      .filter((task) => {
        if (!task.group_id || !task.planned) return false
        const planned = new Date(task.planned.slice(0, 10))
        if (planned > currentDate || planned < startDate) return false
        return true
      })
      .sort((a, b) => Date.parse(a.planned) - Date.parse(b.planned))
    if (!rtasks.length) return null
    const build = (weeks, startMonday, endMonday) => {
      while (startMonday <= endMonday) {
        weeks.push({ x: getDay(startMonday), y: null })
        startMonday = date.addToDate(startMonday, { days: 7 })
      }
      return weeks
    }
    const getData = (task) => {
      if (task.done) return 100
      else if (task.target > 1) return Math.round((task.performance / task.target) * 100)
      else return 0
    }
    const start = getMonday(rtasks[0].planned.slice(0, 10))
    const end = getMonday(rtasks[rtasks.length - 1].planned.slice(0, 10))
    return rtasks.reduce((groups, task) => {
      if (!groups[task.name]) groups[task.name] = build([], start, end)
      const key = getDay(getMonday(task.planned.slice(0, 10)))
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
      (task) => task.group_id && task.planned && new Date(task.planned.slice(0, 10)) <= currentDate
    )
    return {
      target: regular.length,
      performance: done.length,
      rtarget: recurring.length,
      rperformance: sumPerformance(recurring)
    }
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
    currentWeek,
    filtered,
    calendar,
    recurring,
    getProgress
  }
})

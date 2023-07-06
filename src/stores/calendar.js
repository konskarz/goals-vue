import { date } from 'quasar'

export function useCalendar() {
  const getDayStart = (srcDate) => date.startOfDate(srcDate, 'day')
  const getMonday = (srcDate) =>
    date.subtractFromDate(srcDate, { days: date.getDayOfWeek(srcDate) - 1 })
  const nextWeek = (srcDate) => date.addToDate(srcDate, { days: 7 })
  const getFormatedMonth = (srcDate) => date.formatDate(srcDate, 'MMMM')
  const getFormatedDay = (srcDate) => date.formatDate(srcDate, 'YYYY-MM-DD')
  const currentDate = getDayStart(new Date())
  const currentMonday = getMonday(currentDate)
  const heatmapStart = date.subtractFromDate(currentDate, { months: 6 })
  const filteredRange = (srcDate) => getDayStart(srcDate) < currentMonday
  const heatmapRange = (srcDate) =>
    date.isBetweenDates(getDayStart(srcDate), heatmapStart, currentDate)
  const progressRange = (srcDate) => getDayStart(srcDate) <= currentDate

  function buildTimeline(tasks) {
    const weeks = {},
      endMonday = nextWeek(getMonday(getDayStart(tasks[tasks.length - 1].planned)))
    let currentSunday,
      currentMonth,
      startMonday = getMonday(getDayStart(tasks[0].planned)),
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
    tasks.forEach((task) => {
      weeks[getFormatedDay(getMonday(task.planned))].tasks.push(task)
    })
    return weeks
  }
  function buildHeatmap(tasks) {
    const getWeeks = (weeks, startMonday, endMonday) => {
      while (startMonday <= endMonday) {
        weeks.push({ x: getFormatedDay(startMonday), y: null })
        startMonday = nextWeek(startMonday)
      }
      return weeks
    }
    const getData = (task) => {
      if (task.done) return 100
      return task.target > 1 ? Math.round((task.performance / task.target) * 100) : 0
    }
    const start = getMonday(getDayStart(tasks[0].planned))
    const end = getMonday(getDayStart(tasks[tasks.length - 1].planned))
    return tasks.reduce((groups, task) => {
      if (!groups[task.name]) groups[task.name] = getWeeks([], start, end)
      const key = getFormatedDay(getMonday(task.planned))
      groups[task.name].find((item) => item.x === key).y = getData(task)
      return groups
    }, {})
  }
  function changeWeek(srcDate, monday) {
    const days = date.getDayOfWeek(srcDate) - 1
    return date.addToDate(monday, { days })
  }

  return {
    filteredRange,
    heatmapRange,
    progressRange,
    buildTimeline,
    buildHeatmap,
    changeWeek
  }
}

import { date } from 'quasar'

export function useCalendar() {
  const getDayStart = (srcDate) => date.startOfDate(srcDate, 'day')
  const getMonday = (srcDate) =>
    date.subtractFromDate(srcDate, { days: date.getDayOfWeek(srcDate) - 1 })
  const previousWeek = (srcDate) => date.subtractFromDate(srcDate, { days: 7 })
  const nextWeek = (srcDate) => date.addToDate(srcDate, { days: 7 })
  const getFormatedDay = (srcDate) => date.formatDate(srcDate, 'YYYY-MM-DD')
  const currentDate = getDayStart(new Date())
  const currentMonday = getMonday(currentDate)
  const heatmapStart = date.subtractFromDate(currentDate, { months: 6 })
  const beforeThisWeek = (srcDate) => getDayStart(srcDate) < currentMonday
  const heatmapRange = (srcDate) =>
    date.isBetweenDates(getDayStart(srcDate), heatmapStart, currentDate)
  const beforeThisDay = (srcDate) => getDayStart(srcDate) <= currentDate
  const buildWeekTitle = (start, end) => {
    const title = []
    if (!date.isSameDate(start, end, 'year')) {
      title.push(date.formatDate(start, 'D MMM YYYY – '))
      title.push(date.formatDate(end, 'D MMM YYYY'))
    } else {
      title.push(date.formatDate(start, date.isSameDate(start, end, 'month') ? 'D–' : 'D MMM – '))
      title.push(date.formatDate(end, 'D MMM'))
    }
    return title.join('')
  }
  const buildWeek = (monday, sunday) => ({
    // title: date.formatDate(monday, '[Week ]w · [Q]Q · YYYY · MMM D'),
    title: buildWeekTitle(monday, sunday),
    current: date.isSameDate(monday, currentMonday, 'day'),
    start: !date.isSameDate(monday, previousWeek(monday), 'month'),
    month: date.formatDate(monday, 'MMMM YYYY'),
    tasks: []
  })

  function buildTimeline(tasks) {
    const weeks = {},
      endMonday = nextWeek(getMonday(getDayStart(tasks[tasks.length - 1].planned)))
    let nextSunday,
      nextMonday = getMonday(getDayStart(tasks[0].planned)),
      previousSunday = date.subtractFromDate(nextMonday, { days: 1 })
    while (nextMonday <= endMonday) {
      nextSunday = nextWeek(previousSunday)
      weeks[getFormatedDay(nextMonday)] = buildWeek(nextMonday, nextSunday)
      nextMonday = nextWeek(nextMonday)
      previousSunday = nextSunday
    }
    tasks.forEach((task) => {
      weeks[getFormatedDay(getMonday(task.planned))].tasks.push(task)
    })
    return weeks
  }
  function buildHeatmap(tasks) {
    const getWeeks = (weeks, nextMonday, endMonday) => {
      while (nextMonday <= endMonday) {
        weeks.push({ x: getFormatedDay(nextMonday), y: null })
        nextMonday = nextWeek(nextMonday)
      }
      return weeks
    }
    const getData = (task) => {
      if (task.done) return 100
      return task.target > 1 ? Math.round((task.performance / task.target) * 100) : 0
    }
    const start = getMonday(heatmapStart)
    const end = getMonday(currentDate)
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
    beforeThisWeek,
    heatmapRange,
    beforeThisDay,
    buildTimeline,
    buildHeatmap,
    changeWeek
  }
}

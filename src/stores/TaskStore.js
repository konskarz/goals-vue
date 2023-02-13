import { computed, ref, toRaw } from "vue";
import { defineStore } from "pinia";
import { date } from "quasar";
import { useCollection } from "./collection";
import { useGoalStore } from "./GoalStore";

export const useTaskStore = defineStore("TaskStore", () => {
  const {
    isLoading,
    isError,
    data,
    error,
    refetch,
    getItem,
    getIndex,
    createItem,
    updateItem,
    deleteItem,
    getChanges,
    isChanged,
  } = useCollection("/tasks/");
  const relatedStore = useGoalStore();
  const addNames = (data) => {
    data.forEach((item) => {
      item.goalName = item.goal ? relatedStore.getItem(item.goal).name : null;
    });
    return data;
  };
  const filter = ref({
    done: true,
    recurring: true,
    goal: null,
  });
  relatedStore.$onAction(({ name, args }) => {
    if (name === "deleteItem" && filter.value.goal === args[0]) {
      filter.value.goal = null;
    }
  });
  const getMonday = (srcDate) =>
    date.subtractFromDate(srcDate, {
      days: date.getDayOfWeek(srcDate) - 1,
    });
  const getWeek = (srcDate) => date.formatDate(srcDate, "YYYY-w");
  const currentDate = date.startOfDate(new Date(), "day");
  const currentMonday = getMonday(currentDate);
  const currentWeek = getWeek(currentDate);
  const relative = computed(() =>
    data.value && relatedStore.data ? addNames([...toRaw(data.value)]) : null
  );
  const filtered = computed(() =>
    data.value
      ? data.value
          .filter((task) => {
            const passed = new Date(task.planned.slice(0, 10)) < currentMonday;
            if (passed && filter.value.done && task.done) {
              return false;
            } else if (passed && filter.value.recurring && task.group_id) {
              return false;
            } else if (
              filter.value.goal &&
              !relatedStore.getBranch(filter.value.goal).includes(task.goal)
            ) {
              return false;
            } else return true;
          })
          .sort((a, b) => Date.parse(a.planned) - Date.parse(b.planned))
      : null
  );
  const calendar = computed(() => {
    const build = (weeks, startMonday, endMonday) => {
      while (startMonday <= endMonday) {
        weeks[getWeek(startMonday)] = {
          day: date.formatDate(startMonday, "YYYY-MM-DD"),
          tasks: [],
        };
        startMonday = date.addToDate(startMonday, { days: 7 });
      }
      return weeks;
    };
    if (filtered.value && filtered.value.length) {
      const start = new Date(filtered.value[0].planned.slice(0, 10));
      const end = date.addToDate(
        new Date(
          filtered.value[filtered.value.length - 1].planned.slice(0, 10)
        ),
        { days: 7 }
      );
      const weeks = build({}, getMonday(start), getMonday(end));
      filtered.value.forEach((task) => {
        weeks[getWeek(task.planned)].tasks.push(task);
      });
      return weeks;
    }
    return build(
      {},
      currentMonday,
      date.addToDate(currentMonday, { days: 14 })
    );
  });

  return {
    isLoading,
    isError,
    data,
    error,
    refetch,
    getItem,
    getIndex,
    createItem,
    updateItem,
    deleteItem,
    getChanges,
    isChanged,
    currentWeek,
    filter,
    relative,
    filtered,
    calendar,
  };
});

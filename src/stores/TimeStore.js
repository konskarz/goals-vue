import { computed } from "vue";
import { defineStore } from "pinia";
import { useCollection } from "./collection";
import { useTaskStore } from "./TaskStore";

export const useTimeStore = defineStore("TimeStore", () => {
  const {
    data,
    error,
    isValidating,
    mutate,
    getItem,
    setItem,
    addItem,
    getIndex,
    removeItem,
    createItem,
    updateItem,
    deleteItem,
    getChanges,
    isChanged,
  } = useCollection("/times/");
  const relatedStore = useTaskStore();
  const addNames = (data) => {
    data.forEach((item) => {
      item.taskName = relatedStore.getItem(item.task).name;
    });
    return data;
  };
  const relative = computed(() =>
    data.value ? addNames([...data.value]) : null
  );

  return {
    data,
    error,
    isValidating,
    mutate,
    getItem,
    setItem,
    addItem,
    getIndex,
    removeItem,
    createItem,
    updateItem,
    deleteItem,
    getChanges,
    isChanged,
    relative,
  };
});

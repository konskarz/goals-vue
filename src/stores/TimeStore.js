import { computed, toRaw } from "vue";
import { defineStore } from "pinia";
import { useCollection } from "./collection";
import { useTaskStore } from "./TaskStore";

export const useTimeStore = defineStore("TimeStore", () => {
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
  } = useCollection("/times/");
  const relatedStore = useTaskStore();
  const addNames = (data) => {
    data.forEach((item) => {
      item.taskName = relatedStore.getItem(item.task).name;
    });
    return data;
  };
  const relative = computed(() =>
    data.value && relatedStore.data ? addNames([...toRaw(data.value)]) : null
  );

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
    relative,
  };
});

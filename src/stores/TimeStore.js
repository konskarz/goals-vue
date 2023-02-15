import { computed } from "vue";
import { defineStore } from "pinia";
import { useCollection } from "./collection";
import { useTaskStore } from "./TaskStore";

export const useTimeStore = defineStore("TimeStore", () => {
  const {
    data,
    refetch,
    getItem,
    createItem,
    updateItem,
    deleteItem,
    getChanges,
    isChanged,
  } = useCollection("/times/");
  const relatedStore = useTaskStore();
  const relative = computed(() =>
    data.value && relatedStore.data
      ? data.value.map((item) => ({
          ...item,
          taskName: relatedStore.getItem(item.task).name,
        }))
      : null
  );

  return {
    data,
    refetch,
    getItem,
    createItem,
    updateItem,
    deleteItem,
    getChanges,
    isChanged,
    relative,
  };
});

import { computed } from "vue";
import { defineStore } from "pinia";
import { useCollection } from "./collection";

// https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript/70554215#70554215
const arrayToTree = (array, parent = null) =>
  array
    .filter((item) => item.parent === parent)
    .map((child) => ({ ...child, children: arrayToTree(array, child.id) }));

export const useGoalStore = defineStore("GoalStore", () => {
  const {
    data,
    refetch,
    getItem,
    createItem,
    updateItem,
    deleteItem,
    getChanges,
    isChanged,
  } = useCollection("/goals/");
  const tree = computed(() => {
    return data.value ? arrayToTree(data.value) : null;
  });
  function getBranch(itemId) {
    const branch = [itemId];
    const getChildren = (parent) =>
      data.value
        .filter((item) => item.parent === parent)
        .forEach((child) => {
          branch.push(child.id);
          getChildren(child.id);
        });
    getChildren(itemId);
    return branch;
  }

  return {
    data,
    refetch,
    getItem,
    createItem,
    updateItem,
    deleteItem,
    getChanges,
    isChanged,
    tree,
    getBranch,
  };
});

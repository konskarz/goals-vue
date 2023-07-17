import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useCollection } from './collection'
import { useTaskStore } from './TaskStore'

// https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript/70554215#70554215
const arrayToTree = (array, parent = null) =>
  array
    .filter((item) => item.parent === parent)
    .map((child) => ({ ...child, children: arrayToTree(array, child.id) }))

export const useGoalStore = defineStore('GoalStore', () => {
  const { data, refetch, getItem, createItem, updateItem, deleteItem } = useCollection('/goals/')
  const relatedStore = useTaskStore()

  const treeExpanded = ref([])
  const treeTicked = ref([])
  watch(data, () => {
    if (treeTicked.value.length) {
      const ids = treeTicked.value
      const ii = ids.length
      for (let i = 0; i < ii; i++) {
        if (!getItem(ids[i])) {
          ids.splice(i, 1)
          break
        }
      }
    }
  })
  const relative = computed(() => {
    if (!data.value || !relatedStore.data) return null
    return data.value.map((item) => ({
      ...item,
      ...relatedStore.getProgress(getBranch(item.id))
    }))
  })
  const tree = computed(() => (data.value ? arrayToTree(data.value) : null))
  const treeProgress = computed(() => (relative.value ? arrayToTree(relative.value) : null))

  function getBranch(itemId) {
    if (!itemId) return data.value.map((item) => item.id)
    const branch = [itemId]
    const getChildren = (parent) =>
      data.value
        .filter((item) => item.parent === parent)
        .forEach((item) => {
          branch.push(item.id)
          getChildren(item.id)
        })
    getChildren(itemId)
    return branch
  }

  return {
    data,
    refetch,
    getItem,
    createItem,
    updateItem,
    deleteItem,
    treeTicked,
    treeExpanded,
    tree,
    treeProgress,
    getBranch
  }
})

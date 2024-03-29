import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useCollection } from './collection'
import { useTaskStore } from './TaskStore'

// https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript/70554215#70554215
const arrayToTree = (array, parent = null) =>
  array
    .filter((item) => item.parent === parent)
    .map((child) => ({ ...child, children: arrayToTree(array, child.id) }))

export const useGoalStore = defineStore('GoalStore', () => {
  const { data, refetch, getItem, createItem, updateItem, deleteItem } = useCollection('goals')
  const relatedStore = useTaskStore()

  const treeExpanded = ref([])
  const treeTicked = ref([])
  const relReport = computed(() => {
    if (!data.value || !relatedStore.data) return null
    return data.value.map((item) => ({
      ...item,
      ...relatedStore.getReport(getBranch(item.id))
    }))
  })
  const relAll = computed(() => {
    if (!data.value || !relatedStore.data) return null
    return data.value
      .map((item) => ({
        ...item,
        type: 'goal',
        icon: 'outlined_flag'
      }))
      .concat(relatedStore.getAll())
  })
  const tree = computed(() => (data.value ? arrayToTree(data.value) : null))
  const treeReport = computed(() => (relReport.value ? arrayToTree(relReport.value) : null))
  const treeAll = computed(() => (relAll.value ? arrayToTree(relAll.value) : null))
  
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
    treeReport,
    treeAll,
    getBranch
  }
})

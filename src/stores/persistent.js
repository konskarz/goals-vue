import { ref } from 'vue'
import { useRouter } from 'vue-router'

export function usePersistent(id, store, model) {
  const item = ref(id ? { ...store.getItem(id) } : model)
  const path = ref(id)
  const persist = ref(false)
  const original = id ? { ...item.value } : null
  const router = useRouter()
  function changes(src, trg) {
    return Object.fromEntries(Object.entries(trg).filter(([key, value]) => src[key] !== value))
  }
  function changed(src, trg) {
    return Object.keys(changes(src, trg)).length
  }
  function values(src) {
    return Object.fromEntries(Object.entries(src).filter(([key, value]) => !!value))
  }
  function back() {
    router.back()
  }
  function remove() {
    persist.value = true
    store.deleteItem(path.value).then(() => {
      store.refetch()
      back()
    })
  }
  function save() {
    persist.value = true
    if (id) {
      store.updateItem(path.value, changes(original, { ...item.value })).then(() => {
        store.refetch()
        back()
      })
    } else {
      store.createItem(values(item.value)).then(() => {
        store.refetch()
        back()
      })
    }
  }

  return { item, original, path, persist, changed, remove, save, back }
}

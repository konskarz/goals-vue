import { ref } from "vue";
import { useRouter } from "vue-router";

export function usePersistent(id, store, model) {
  const item = ref(id ? { ...store.getItem(id) } : model);
  const path = ref(id + "/");
  const persist = ref(false);
  const original = id ? { ...item.value } : null;
  const router = useRouter();
  function back() {
    router.back();
  }
  function create() {
    store.createItem(item.value).then((/* data */) => {
      // store.addItem(data);
      store.mutate();
      back();
    });
  }
  function update() {
    const changed = store.getChanges(original, { ...item.value });
    store.updateItem(path.value, changed).then(() => {
      // store.setItem(id, changed);
      store.mutate();
      back();
    });
  }
  function remove() {
    persist.value = true;
    store.deleteItem(path.value).then(() => {
      // store.removeItem(id);
      store.mutate();
      back();
    });
  }
  function save() {
    persist.value = true;
    if (id) update();
    else create();
  }

  return { item, original, path, persist, remove, save, back };
}

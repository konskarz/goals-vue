import { ref } from "vue";
import { useRouter } from "vue-router";
import apiClient from "./api.client";

export function usePersistent(schema, url, store, id) {
  const item = ref(id ? store.getItem(id) : schema);
  const path = ref(id + "/");
  const persist = ref(false);
  const router = useRouter();
  const original = id ? { ...item.value } : null;
  function remove() {
    if (id) {
      persist.value = true;
      apiClient.delete(url + path.value).then(() => {
        store.deleteItem(id);
        back();
      });
    }
  }
  function update() {
    const current = { ...item.value };
    const changed = Object.keys(current).reduce((changed, key) => {
      if (current[key] !== original[key]) changed[key] = current[key];
      return changed;
    }, {});
    if (Object.keys(changed).length) {
      apiClient.update(url + path.value, changed).then(() => {
        store.setItem(id, changed);
        back();
      });
    } else {
      back();
    }
  }
  function save() {
    persist.value = true;
    if (id) update();
    else
      apiClient.create(url, item.value).then((data) => {
        store.addItem(data);
        back();
      });
  }
  function back() {
    router.back();
  }

  return { item, path, persist, remove, save, back };
}

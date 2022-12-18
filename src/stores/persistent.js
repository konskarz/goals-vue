import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import apiClient from "./api.client";

export function usePersistent(schema, url, id) {
  const item = ref(schema);
  const persist = ref(false);
  const router = useRouter();
  let original = null;

  if (id) {
    const { data } = apiClient.read(url + id + "/");
    const setItem = (newData) => {
      item.value = newData;
      original = { ...newData };
    };
    if (data.value) setItem(data.value);
    watch(data, setItem);
  }

  function remove() {
    if (id) {
      persist.value = true;
      apiClient.delete(url + id + "/").then(() => back());
    }
  }
  function update() {
    const current = { ...item.value };
    const changed = Object.keys(current).reduce((changed, key) => {
      if (current[key] !== original[key]) changed[key] = current[key];
      return changed;
    }, {});
    if (Object.keys(changed).length) {
      apiClient.update(url + id + "/", changed).then(() => back());
    } else {
      back();
    }
  }
  function save() {
    persist.value = true;
    if (id) update();
    else apiClient.create(url, item.value).then(() => back());
  }
  function back() {
    router.back();
  }

  return { item, persist, remove, save, back };
}

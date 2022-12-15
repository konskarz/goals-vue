import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import apiClient from "./api.client";

export function usePersistent(schema, url, id) {
  const item = ref(schema);
  const persist = ref(false);
  const router = useRouter();

  if (id) {
    const { data } = apiClient.read(url + id + "/");
    const setItem = (newData) => (item.value = newData);
    if (data.value) setItem(data.value);
    watch(data, setItem);
  }

  function remove() {
    if (id) {
      persist.value = true;
      apiClient.delete(url + id + "/").then(() => back());
    }
  }
  function save() {
    persist.value = true;
    if (id) {
      apiClient.replace(url + id + "/", item.value).then(() => back());
    } else {
      apiClient.create(url, item.value).then(() => back());
    }
  }
  function back() {
    router.back();
  }

  return { item, persist, remove, save, back };
}

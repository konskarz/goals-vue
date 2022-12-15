import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import apiClient from "./api.client";

export function usePersistent(schema, endpoint, id) {
  const item = ref(schema);
  const persist = ref(false);
  const router = useRouter();

  if (id) {
    const { data } = apiClient.read(endpoint + id + "/");
    const setItem = (newData) => (item.value = newData);
    if (data.value) setItem(data.value);
    watch(data, setItem);
  }

  function remove() {
    if (id) {
      persist.value = true;
      apiClient.delete(endpoint + id + "/").then(() => back());
    }
  }
  function save() {
    persist.value = true;
    if (id) {
      apiClient.replace(endpoint + id + "/", item.value).then(() => back());
    } else {
      apiClient.create(endpoint, item.value).then(() => back());
    }
  }
  function back() {
    router.back();
  }

  return { item, persist, remove, save, back };
}

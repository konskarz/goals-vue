import { ref } from "vue";
import { useApiClient } from "./ApiClient";

export function useCollection(url) {
  const { request, get } = useApiClient();
  const data = ref(JSON.parse(localStorage.getItem(url)));
  function refetch() {
    get(url).then((response) => {
      data.value = response;
      localStorage.setItem(url, JSON.stringify(response));
    });
  }
  function getItem(itemId) {
    return data.value.find((item) => item.id === itemId);
  }
  function createItem(data) {
    return request({ method: "post", url, data });
  }
  function updateItem(path, data) {
    return request({ method: "patch", url: url + path, data });
  }
  function deleteItem(path) {
    return request({ method: "delete", url: url + path });
  }
  function getChanges(src, trg) {
    return Object.fromEntries(
      Object.entries(trg).filter(([key, value]) => src[key] !== value)
    );
  }
  function isChanged(src, trg) {
    return Object.keys(getChanges(src, trg)).length;
  }
  refetch();
  return {
    data,
    refetch,
    getItem,
    createItem,
    updateItem,
    deleteItem,
    getChanges,
    isChanged,
  };
}

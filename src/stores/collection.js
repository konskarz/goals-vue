import { ref } from "vue";
import { useApiClient } from "./ApiClient";

export function useCollection(url) {
  const { request, get } = useApiClient();
  const data = ref(JSON.parse(localStorage.getItem(url)));
  function refetch() {
    get(url).then((response) => {
      data.value = response.results;
      localStorage.setItem(url, JSON.stringify(response.results));
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
  refetch();

  return {
    data,
    refetch,
    getItem,
    createItem,
    updateItem,
    deleteItem,
  };
}

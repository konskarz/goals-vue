import { useApiClient } from "./ApiClient";

export function useCollection(url) {
  const { post, patch, remove, query } = useApiClient();
  const { isLoading, isError, data, error, refetch } = query(url);
  function getItem(itemId) {
    return data.value.find((item) => item.id === itemId);
  }
  function getIndex(item) {
    return data.value.indexOf(item);
  }
  function createItem(data) {
    return post(url, data);
  }
  function updateItem(path, data) {
    return patch(url + path, data);
  }
  function deleteItem(path) {
    return remove(url + path);
  }
  function getChanges(src, trg) {
    return Object.fromEntries(
      Object.entries(trg).filter(([key, value]) => src[key] !== value)
    );
  }
  function isChanged(src, trg) {
    return Object.keys(getChanges(src, trg)).length;
  }
  return {
    isLoading,
    isError,
    data,
    error,
    refetch,
    getItem,
    getIndex,
    createItem,
    updateItem,
    deleteItem,
    getChanges,
    isChanged,
  };
}

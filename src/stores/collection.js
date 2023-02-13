import { useApiClient } from "./ApiClient";

export function useCollection(url) {
  const { query, mutation } = useApiClient();
  const { isLoading, isError, data, error, refetch } = query(url);
  const { mutateAsync } = mutation();
  function getItem(itemId) {
    return data.value.find((item) => item.id === itemId);
  }
  function getIndex(item) {
    return data.value.indexOf(item);
  }
  function createItem(data) {
    return mutateAsync({ method: "post", url, data });
  }
  function updateItem(path, data) {
    return mutateAsync({ method: "patch", url: url + path, data });
  }
  function deleteItem(path) {
    return mutateAsync({ method: "delete", url: url + path });
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

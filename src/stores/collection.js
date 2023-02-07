import apiClient from "./api.client";

export function useCollection(url) {
  const { data, error, isValidating, mutate } = apiClient.read(url);
  function getItem(itemId) {
    return data.value.find((item) => item.id === itemId);
  }
  function setItem(itemId, trgItem) {
    Object.assign(getItem(itemId), trgItem);
  }
  function addItem(item) {
    data.value.push(item);
  }
  function getIndex(item) {
    return data.value.indexOf(item);
  }
  function removeItem(itemId) {
    data.value.splice(getIndex(getItem(itemId)), 1);
  }
  function createItem(item) {
    return apiClient.create(url, item);
  }
  function updateItem(path, item) {
    apiClient.update(url + path, item);
  }
  function deleteItem(path) {
    return apiClient.delete(url + path);
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
    data,
    error,
    isValidating,
    mutate,
    getItem,
    setItem,
    addItem,
    getIndex,
    removeItem,
    createItem,
    updateItem,
    deleteItem,
    getChanges,
    isChanged,
  };
}

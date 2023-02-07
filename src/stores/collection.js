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
  function deleteItem(itemId) {
    data.value.splice(getIndex(getItem(itemId)), 1);
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
    deleteItem,
  };
}

import { computed, ref } from "vue";
import { defineStore } from "pinia";
import apiClient from "./api.client";

const AUTH_TOKEN_KEY = "Access-Token";

export const useUserStore = defineStore("UserStore", () => {
  const authToken = ref(localStorage.getItem(AUTH_TOKEN_KEY));
  const loggedIn = computed(() => Boolean(authToken.value));
  if (loggedIn.value) apiClient.auth(`Token ${authToken.value}`);
  function login(credentials) {
    return apiClient.create("/auth/", credentials);
  }
  function setToken(token) {
    apiClient.auth(`Token ${token}`);
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    authToken.value = token;
  }
  function logout() {
    apiClient.auth("");
    localStorage.removeItem(AUTH_TOKEN_KEY);
    authToken.value = null;
  }

  return {
    loggedIn,
    login,
    setToken,
    logout,
  };
});

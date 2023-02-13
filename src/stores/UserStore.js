import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useApiClient } from "./ApiClient";

const AUTH_TOKEN_KEY = "Access-Token";

export const useUserStore = defineStore("UserStore", () => {
  const { auth, post } = useApiClient();
  const authToken = ref(localStorage.getItem(AUTH_TOKEN_KEY));
  const loggedIn = computed(() => Boolean(authToken.value));
  if (loggedIn.value) auth(`Token ${authToken.value}`);
  function login(credentials) {
    return post("/auth/", credentials);
  }
  function setToken(token) {
    auth(`Token ${token}`);
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    authToken.value = token;
  }
  function logout() {
    auth("");
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

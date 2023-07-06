import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useApiClient } from './ApiClient'

export const useUserStore = defineStore('UserStore', () => {
  const url = '/auth/'
  const { auth, request } = useApiClient()

  const authToken = ref(localStorage.getItem(url))
  const loggedIn = computed(() => Boolean(authToken.value))

  function login(data) {
    return request({ method: 'post', url, data })
  }
  function setToken(token) {
    auth(`Token ${token}`)
    localStorage.setItem(url, token)
    authToken.value = token
  }
  function logout() {
    auth('')
    localStorage.removeItem(url)
    authToken.value = null
  }
  if (loggedIn.value) auth(`Token ${authToken.value}`)

  return {
    loggedIn,
    login,
    setToken,
    logout
  }
})

import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useApiClient } from './ApiClient'

export const useUserStore = defineStore('UserStore', () => {
  const name = 'auth'
  const { auth, request } = useApiClient()

  const authToken = ref(localStorage.getItem(name))
  const loggedIn = computed(() => Boolean(authToken.value))

  function login(data) {
    return request({ method: 'post', url: name + '/', data })
  }
  function setToken(token) {
    auth(`Token ${token}`)
    localStorage.setItem(name, token)
    authToken.value = token
  }
  function logout() {
    auth('')
    localStorage.removeItem(name)
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

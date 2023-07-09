import axios from 'axios'
import { Notify } from 'quasar'

// const baseURL = 'http://localhost:3000'
const baseURL = ((h) =>
  h === 'lifetrackerbuddy.com' || h === '127.0.0.1:8000' || h === 'localhost:8088'
    ? '/api/v2'
    : 'https://lifetrackerbuddy.com/api/v2')(window.location.host)
const API = axios.create({ baseURL, headers: { 'content-type': 'application/json' } })

export function useApiClient() {
  function handleSuccess(response) {
    Notify.create({
      color: 'positive',
      message: response.statusText
    })
    return response.data
  }
  function handleError(error) {
    Notify.create({
      color: 'negative',
      message: error.response
        ? error.response.data.detail || error.response.data.non_field_errors
        : error.message
    })
    return Promise.reject(error)
  }
  function auth(data) {
    API.defaults.headers.common['Authorization'] = data
  }
  function request(config) {
    return API.request(config).then(handleSuccess).catch(handleError)
  }
  function get(url) {
    return API.get(url)
      .then((response) => response.data)
      .catch(handleError)
  }

  return {
    auth,
    request,
    get
  }
}

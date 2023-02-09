import axios from "axios";
import { useSWR } from "swr-vue";
import { Notify } from "quasar";
import { csrftoken } from "../lib/csrftoken.js";

const HOST = window.location.host;
const BASE_URL =
  HOST === "lifetrackerbuddy.com" ||
  HOST === "127.0.0.1:8000" ||
  HOST === "localhost:8088"
    ? "/api/v2"
    : "https://lifetrackerbuddy.com/api/v2";
const AUTH_TOKEN_KEY = "Access-Token";
const AUTH_TOKEN_VALUE = localStorage.getItem(AUTH_TOKEN_KEY);
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
    "X-CSRFTOKEN": csrftoken,
  },
});
if (AUTH_TOKEN_VALUE) {
  api.defaults.headers.common["Authorization"] = `Token ${AUTH_TOKEN_VALUE}`;
}
const handleSuccess = (response) => {
  Notify.create({
    color: "positive",
    message: response.statusText,
  });
  return response.data;
};
const handleError = (error) => {
  Notify.create({
    color: "negative",
    message: error.response.data.detail || error.message,
  });
};
const fetcher = (url) => {
  return api
    .get(url)
    .then((response) => response.data)
    .catch(handleError);
};

export default {
  create(url, data) {
    return api.post(url, data).then(handleSuccess).catch(handleError);
  },
  read(url) {
    return useSWR(url, fetcher);
  },
  replace(url, data) {
    return api.put(url, data).then(handleSuccess).catch(handleError);
  },
  update(url, data) {
    return api.patch(url, data).then(handleSuccess).catch(handleError);
  },
  delete(url) {
    return api.delete(url).then(handleSuccess).catch(handleError);
  },
  setAuthToken(token) {
    api.defaults.headers.common["Authorization"] = `Token ${token}`;
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  },
  clearAuthToken() {
    api.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem(AUTH_TOKEN_KEY);
  },
};

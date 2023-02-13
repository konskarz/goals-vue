import axios from "axios";
import { useQuery, useMutation } from "@tanstack/vue-query";
import { isRef } from "vue";
import { Notify } from "quasar";
import { csrftoken } from "../lib/csrftoken.js";

const HOST = window.location.host;
const BASE_URL =
  HOST === "lifetrackerbuddy.com" ||
  HOST === "127.0.0.1:8000" ||
  HOST === "localhost:8088"
    ? "/api/v2"
    : "https://lifetrackerbuddy.com/api/v2";
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
    "X-CSRFTOKEN": csrftoken,
  },
});

export function useApiClient() {
  function handleSuccess(response) {
    Notify.create({
      color: "positive",
      message: response.statusText,
    });
    return response.data;
  }
  function handleError(error) {
    Notify.create({
      color: "negative",
      message: error.response.data.detail || error.message,
    });
  }
  function auth(data) {
    API.defaults.headers.common["Authorization"] = data;
  }
  function request(config) {
    return API.request(config).then(handleSuccess).catch(handleError);
  }
  function get(url) {
    return API.get(url)
      .then((response) => response.data)
      .catch(handleError);
  }
  function post(url, data) {
    return request({ method: "post", url, data });
  }
  function put(url, data) {
    return request({ method: "put", url, data });
  }
  function patch(url, data) {
    return request({ method: "patch", url, data });
  }
  function remove(url) {
    return request({ method: "delete", url });
  }
  function query(url) {
    return useQuery([url], () => get(isRef(url) ? url.value : url));
  }
  function mutation() {
    return useMutation((config) => request(config));
  }
  return {
    auth,
    get,
    post,
    put,
    patch,
    remove,
    query,
    mutation,
  };
}

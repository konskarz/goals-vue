import axios from "axios";
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

  return {
    auth,
    request,
    get,
  };
}

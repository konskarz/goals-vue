import axios from "axios";
import useSWRV from "swrv";
import LocalStorageCache from "swrv/dist/cache/adapters/localStorage";
import { Notify } from "quasar";

const SWRV_CONFIG = {
  cache: new LocalStorageCache("swrv"),
  shouldRetryOnError: false,
};
const AUTH_TOKEN_KEY = "Access-Token";
const AUTH_TOKEN_VALUE = localStorage.getItem(AUTH_TOKEN_KEY);
const api = axios.create({
  headers: {
    "content-type": "application/json",
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
    return useSWRV(url, fetcher, SWRV_CONFIG);
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

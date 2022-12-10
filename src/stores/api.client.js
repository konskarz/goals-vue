import { csrftoken } from "./csrftoken.js";
import axios from "axios";
import useSWRV from "swrv";
import { Notify } from "quasar";

const api = axios.create({
  headers: {
    "content-type": "application/json",
    "X-CSRFTOKEN": csrftoken,
  },
});
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
    return useSWRV(url, fetcher);
  },
  update(url, data) {
    return api.put(url, data).then(handleSuccess).catch(handleError);
  },
  delete(url) {
    return api.delete(url).then(handleSuccess).catch(handleError);
  },
};

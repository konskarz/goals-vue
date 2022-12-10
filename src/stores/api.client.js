import { csrftoken } from "./csrftoken.js";
import axios from "axios";
import useSWRV from "swrv";

const api = axios.create({
  headers: {
    "content-type": "application/json",
    "X-CSRFTOKEN": csrftoken,
  },
});
const handleSuccess = (response) => {
  // console.log(response.data);
  return response.data;
};
const handleError = (error) => {
  console.log(error.response.data.detail || error.message);
};
const fetcher = (url) => {
  return api.get(url).then(handleSuccess).catch(handleError);
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

// import { config } from "./config.js";
import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create(
  (() => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    return {
      baseURL: import.meta.env.VITE_API_URL,
      headers,
    };
  })()
);

axiosClient.interceptors.request.use(function (config) {
  // console.log(apiKey);
  config.headers["X-API-KEY"] = localStorage.getItem("apiKey");
  return config;
});

function buildUrl(baseUrl, params) {
  const query = queryString.stringify(params);
  return `${baseUrl}?${query}`;
}

export const apiClient = {
  get: async (url, requestParam = null) => {
    if (requestParam) {
      const req = buildUrl(url, requestParam);
      const response = await axiosClient.get(req);
      return response.data;
    }
  },

  post: async (url, body = {}) => {
    const response = await axiosClient.post(url, body);
    // console.log(response);
    return response.data;
  },

  patch: async (url, body = {}) => {
    const response = await axiosClient.patch(url, body);
    return response.data;
  },

  put: async (url, body = {}) => {
    const response = await axiosClient.put(url, body);
    return response.data;
  },

  delete: async (url) => {
    const response = await axiosClient.delete(url);
    return response.data;
  },
};

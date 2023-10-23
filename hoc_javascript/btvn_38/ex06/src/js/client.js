import { config } from "../js/config.js";
const { SERVER_AUTH_API } = config;

export const client = {
  serverApi: SERVER_AUTH_API,

  setUrl(url) {
    this.serverApi = url;
  },

  async send(url, method = "GET", body = null) {
    url = `${this.serverApi}${url}`;
    const token = localStorage.getItem("access_token");
    console.log(token);
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const options = {
      method,
      headers,
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const data = await response.json();

    return { response, data };
  },

  get(url) {
    return this.send(url, "GET", null);
  },

  // post(url, body = {}, token = null) {
  //   return this.send(url, "POST", body, token);
  // },

  post(url, body = {}) {
    return this.send(url, "POST", body);
  },

  put(url, body = {}) {
    return this.send(url, "PUT", body);
  },

  patch(url, body = {}) {
    return this.send(url, "PATCH", body);
  },

  delete(url) {
    return this.send(url, "DELETE", null);
  },
};

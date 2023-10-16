import { config } from "./config.js";
const { SERVER_AUTH_API } = config;

export const client = {
  serverApi: SERVER_AUTH_API,

  setUrl(url) {
    this.serverApi = url;
  },

  async send(url, method = "GET", body = null, token = null) {
    url = `${this.serverApi}${url}`;
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

  get(url, token = null) {
    return this.send(url, "GET", null, token);
  },

  post(url, body = {}, token = null) {
    return this.send(url, "POST", body, token);
  },

  put(url, body = {}, token = null) {
    return this.send(url, "PUT", body, token);
  },

  patch(url, body = {}, token = null) {
    return this.send(url, "PATCH", body, token);
  },

  delete(url, token = null) {
    return this.send(url, "DELETE", null, token);
  },
};

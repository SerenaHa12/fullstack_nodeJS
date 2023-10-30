import axios from "axios";

const TodoApi = {
  getAll: (apiKey) => {
    const url = "/todos";
    const headers = {
      "X-Api-Key": apiKey,
    };
    return axiosClient.get(url, { headers });
  },
  get: (id, apiKey) => {
    const url = `/todos/${id}`;
    const headers = {
      "X-Api-Key": apiKey,
    };
    return axiosClient.get(url, { headers });
  },
  post: (apiKey, todo) => {
    const url = "/todos";
    const headers = {
      "X-Api-Key": apiKey,
    };
    return axiosClient.post(url, todo, { headers });
  },
  patch: (id, apiKey, data) => {
    const url = `/todos/${id}`;
    const headers = {
      "X-Api-Key": apiKey,
    };
    return axiosClient.patch(url, data, { headers });
  },
  delete: (id, apiKey) => {
    const url = `/todos/${id}`;
    const headers = {
      "X-Api-Key": apiKey,
    };
    return axiosClient.delete(url, { headers });
  },
};

export default TodoApi;

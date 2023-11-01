import axiosClient from "./axiosClient";

const getApiKeyLogin = async (email, apiKey) => {
  const res = await axiosClient.get(`/api-key?email=${email}`, {
    headers: {
      "X-Api-Key": apiKey,
    },
  });
  return { data: res, code: res.code };
};

const getListTodo = async (apiKey) => {
  const res = await axiosClient.get(`/todos`, {
    headers: {
      "X-Api-Key": apiKey,
    },
  });
  return { data: res, code: res.code };
};

const postCreateTodo = () => {
  return axiosClient.post("/api/users", {});
};

export { getApiKeyLogin, getListTodo, postCreateTodo };

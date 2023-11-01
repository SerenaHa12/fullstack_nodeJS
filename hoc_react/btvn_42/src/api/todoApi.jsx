import axiosClient from "./axiosClient";

const getApiKeyLogin = async (email) => {
  const res = await axiosClient.get(`/api-key?email=${email}`, {
    headers: {
      "X-Api-Key": "apiKey",
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
// console.log(fetchAllUser);

const postCreateTodo = () => {
  return axiosClient.post("/api/users", {});
};
// console.log(postCreateUser);

export { getApiKeyLogin, getListTodo, postCreateTodo };

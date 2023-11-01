import axiosClient from "./axiosClient";

const getApiKeyLogin = async (email) => {
  const res = await axiosClient.get(`/api-key?email=${email}`, {
    headers: {
      "X-Api-Key": "apiKey",
    },
  });
  return { data: res.data, status: res.status };
};

const getListTodo = () => {
  return axiosClient.get(`/todos`);
};
// console.log(fetchAllUser);

const postCreateTodo = () => {
  return axiosClient.post("/api/users", {});
};
// console.log(postCreateUser);

export { getApiKeyLogin, getListTodo, postCreateTodo };

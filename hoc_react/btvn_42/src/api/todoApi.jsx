// import axios from "axios";
import axiosClient from "./axiosClient";

const getListTodo = () => {
  return axiosClient.get(`/todos`);
};
// console.log(fetchAllUser);

const postCreateTodo= () => {
  return axiosClient.post("/api/users", {});
};
// console.log(postCreateUser);

export { getListTodo, postCreateTodo };

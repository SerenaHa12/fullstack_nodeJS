import { getListTodo } from "./todoApi";
const checkLogin = async () => {
  const apiKey = localStorage.getItem("apiKey");
  let res = await getListTodo(apiKey);
  if (res) {
    return true;
  } else {
    return false;
  }
};

export default checkLogin;

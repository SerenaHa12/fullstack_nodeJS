import axiosClient from "./axiosClient";

const getApiKeyLogin = async (email, apiKey) => {
  const res = await axiosClient.get(`/api-key?email=${email}`, {});
  return { data: res, code: res.code };
};

const getProducts = async (apiKey, limit = 6) => {
  const res = await axiosClient.get(`/products?limit=${limit}`, {});
  return { data: res, code: res.code };
};

const postOrder = async (apiKey, product) => {
  let res = await axiosClient.post("/orders", product);
  return { data: res };
};
export { getApiKeyLogin, getProducts, postOrder };

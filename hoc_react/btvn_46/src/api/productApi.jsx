import axiosClient from "./axiosClient";

const getProducts = async (limit = 8, page = 1) => {
  const res = await axiosClient.get(`/products?limit=${limit}&page={page}`, {});
  return { data: res, code: res.code };
};

export { getProducts };

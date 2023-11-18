import axiosClient from "./axiosClient";

const getApiKeyLogin = async (email, apiKey) => {
  const res = await axiosClient.get(`/api-key?email=${email}`, {});
  return { data: res.data, code: res.code };
};

export { getApiKeyLogin };

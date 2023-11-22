import axios from "axios";
// import queryString from "query-string";
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // headers: {
  //   "X-Api-Key": apiKey,
  // },
  timeout: 5000,
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const apiKey = localStorage.getItem("apiKey");
    config.headers["X-Api-Key"] = apiKey;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data ? response.data : { statusCode: response.status };
  },
  function (error) {
    console.log("check error axios", error.name, error.message);
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.data.message);

      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    // return Promise.reject(error);
  }
);

export default axiosClient;

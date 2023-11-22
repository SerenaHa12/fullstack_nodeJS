// call api
import {config} from "./config.js";
import axios from "axios";
import queryString from 'query-string';

const { SERVER_AUTH_API } = config;


// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

const axiosClient = axios.create(
    (() => {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        return {
            baseURL: SERVER_AUTH_API,
            headers
        }
    })()
);

axiosClient.interceptors.request.use(function (config) {
    // console.log(apiKey);
    config.headers['X-API-KEY'] = localStorage.getItem('apiKey');
    return config;
});

function buildUrl(baseUrl, params) {
    const query = queryString.stringify(params);
    // console.log(url);
    return `${baseUrl}?${query}`;
}

export const apiClient = {
    get: async (url, requestParam = null) => {
        if (requestParam) {
            url = buildUrl(url, requestParam);
        }
        // console.log(url);
        const response = await axiosClient.get(url);
        // console.log(response);
        return response.data;
    },

    post: async (url, body = {}) => {
        const response = await axiosClient.post(url, body);
        // console.log(response);
        return response.data;
    },


    patch: async (url, body = {}) => {
        const response = await axiosClient.patch(url, body);
        return response.data;
    },


    put: async (url, body = {}) => {
        const response = await axiosClient.put(url, body);
        return response.data;
    },

    delete: async (url) => {
        const response = await axiosClient.delete(url);
        return response.data;
    }
};
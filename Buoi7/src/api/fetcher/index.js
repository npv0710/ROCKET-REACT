import axios from "axios";
import { API_BASE_URL } from "../config";

const defaultOptions = {
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'Application/json'
    }
}

const fetcher = axios.create(defaultOptions);

fetcher.interceptors.request.use(function(config) {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb25ncGh1b25nIiwiaWF0IjoxNjY5NDc0MzIwLCJleHAiOjE2Njk0ODE1MjB9.SGsWddyB8i6UGR_zwYpH-FtFOsrTe6qRYBIVIDHZvfo';
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
})

fetcher.interceptors.response.use(
    function(response) {
        return response.data
    },
    function(error) {
        console.log(error)
        //if(error.response) return Promise.resolve({error: {message: error.code, status: error.response.status}});
        error.response.message = error.code;
        return Promise.reject(error.response);
    }
)

export default fetcher;



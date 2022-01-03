import axios from "axios";

const url = "http://localhost:5000/api";

const $api = axios.create({
    baseURL: url,
});

$api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
        };
    }

    return config;
});

export default $api;

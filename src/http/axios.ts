import axios from "axios";
import AuthService from "@services/AuthService";

export const API_URL = "http://localhost:5000/api";

const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
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

$api.interceptors.response.use(
    (config) => config,
    async (error) => {
        console.log(error);
        const originalRequest = error.config;

        if (error.response.status == 401) {
            const accessToken: string = await AuthService.refreshToken();
            localStorage.setItem("token", accessToken);
            return $api.request(originalRequest);
        }
    }
);

export default $api;

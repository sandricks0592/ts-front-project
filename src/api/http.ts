import axios, { AxiosRequestConfig } from "axios";
import { getToken, useAuthStore } from "../store/authStore";

/** 개발(npm start)에서는 빈 값 → 같은 출처(3000)로 요청 후 package.json proxy가 9999로 전달(CORS 회피). */
export function getBaseURL(): string {
    if (process.env.REACT_APP_API_BASE_URL) {
        return process.env.REACT_APP_API_BASE_URL;
    }
    if (process.env.NODE_ENV === "development") {
        return "";
    }
    return "http://localhost:9999";
}

/** axios·MSW 핸들러에서 동일한 origin을 쓰기 위한 값 */
export const BASE_URL = getBaseURL();
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
    const client = axios.create({
        baseURL: BASE_URL,
        timeout: DEFAULT_TIMEOUT,
        headers: {
            "content-type": "application/json",
        },
        withCredentials: true,
        ...config,
    });

    client.interceptors.request.use((req) => {
        const token = getToken();
        if (token) {
            req.headers.Authorization = token;
        }
        return req;
    });

    client.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401) {
                useAuthStore.getState().storeLogout();
                window.location.href = "/login";
            }
            return Promise.reject(error);
        }
    );

    return client;
};

export const httpClient = createClient();

type RequestMethod = "get" | "post" | "delete" | "put";

export const requestHandler = async <T>(
    method: RequestMethod,
    url: string,
    payload?: unknown
) => {
    let response;
    switch (method) {
        case "post":
            response = await httpClient.post(url, payload);
            break;
        case "get":
            response = await httpClient.get(url);
            break;
        case "put":
            response = await httpClient.put(url, payload);
            break;
        case "delete":
            response = await httpClient.delete(url);
            break;
    }
    return response.data as T;
};

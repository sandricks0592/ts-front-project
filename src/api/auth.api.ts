import { SignupProps } from "../pages/signup";
import { httpClient } from "./http";

const useMockApi = process.env.REACT_APP_MOCK_API === "true";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export interface LoginResponse {
    token: string;
}

export const signup = async (userData: SignupProps) => {
    if (useMockApi) {
        await delay(200);
        return { ok: true, ...userData };
    }
    const response = await httpClient.post("/users/join", userData);
    return response.data;
};

export const resetRequest = async (data: SignupProps) => {
    if (useMockApi) {
        await delay(200);
        return { ok: true };
    }
    const response = await httpClient.post("/users/reset", data);
    return response.data;
};

export const resetPassword = async (data: SignupProps) => {
    if (useMockApi) {
        await delay(200);
        return { ok: true };
    }
    const response = await httpClient.put("/users/reset", data);
    return response.data;
};

export const login = async (data: SignupProps) => {
    if (useMockApi) {
        await delay(200);
        return { token: "dev-mock-token" };
    }
    const response = await httpClient.post<LoginResponse>("/users/login", data);
    return response.data;
};

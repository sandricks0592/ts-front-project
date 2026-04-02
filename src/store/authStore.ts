import { create } from "zustand";

const TOKEN_KEY = "token";

const hasStoredToken = () => !!localStorage.getItem(TOKEN_KEY);

interface StoreState {
    isloggedIn: boolean;
    storeLogin: (token: string) => void;
    storeLogout: () => void;
}

export const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
};

export const removeToken = () => {
    localStorage.removeItem("token");
};

export const useAuthStore = create<StoreState>((set) => ({
    isloggedIn: hasStoredToken(),
    storeLogin: (token: string) => {
        localStorage.setItem(TOKEN_KEY, token);
        set({ isloggedIn: true });
    },
    storeLogout: () => {
        localStorage.removeItem(TOKEN_KEY);
        set({ isloggedIn: false });
    },
}));

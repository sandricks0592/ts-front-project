import { createContext, ReactNode, useEffect, useState } from "react";
import { getTheme, ThemeName } from "../../style/theme";
import { GlobalStyle } from "../../style/global";
import { ThemeProvider } from "styled-components";

const DEFAULT_THEME_NAME = "light";
const THEME_LOCALSTORAGE_KEY = "book_store_theme";
const parseThemeName = (value: string | null): ThemeName => {
    if (value?.toLowerCase() === "dark") {
        return "dark";
    }

    return "light";
};

interface State {
    themeName: ThemeName;
    setThemeName: (ThemeName: ThemeName) => void;
    toggleTheme: () => void;
}


export const state = {
    themeName: DEFAULT_THEME_NAME as ThemeName,
    setThemeName: (themeName: ThemeName) => {},
    toggleTheme: () => {}
}

export const ThemeContext = createContext<State>(state);



export const BookStoreThemeProvider = ({ children }: { children: ReactNode }) => {
    const [themeName, setThemeName] = useState<ThemeName>(DEFAULT_THEME_NAME);

    const toggleTheme = () => {
        const nextTheme = themeName === "light" ? "dark" : "light";
        setThemeName(nextTheme);
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, nextTheme);
    };

    useEffect(() => {
        const savedThemeName = localStorage.getItem(THEME_LOCALSTORAGE_KEY);
        setThemeName(parseThemeName(savedThemeName));
    }, []);

    return (
        <ThemeContext.Provider value={{themeName,setThemeName,toggleTheme}}>
            <ThemeProvider theme={getTheme(themeName)}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
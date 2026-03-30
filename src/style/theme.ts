export type ThemeName = "light" | "dark";
type ColorKey = "primary" | "background" | "secondary" | "third";

interface Theme {
    name: ThemeName;
    color: Record<ColorKey, string>;
};

export const light: Theme = {
    name: "light",
    color: {
        primary: "black",
        background: "white",
        secondary: "blue",
        third: "green",
    },
};

export const dark: Theme = {
    name: "dark",
    color: {
        primary: "white",
        background: "black",
        secondary: "darkblue",
        third: "darkgreen"
    },
};

export const getTheme = (themeName: ThemeName): Theme => {
    switch (themeName) {
        case "light":
            return light;
        case "dark":
            return dark;        
        default:
            return light;
    }
}


declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
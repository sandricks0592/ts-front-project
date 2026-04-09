import { DefaultTheme } from "styled-components";

export type ColorKey =
  | "primary"
  | "background"
  | "secondary"
  | "third"
  | "border"
  | "text";

export type ThemeName = "light" | "dark";
export type HeadingSize = "large" | "medium" | "small";
export type ButtonSize = "large" | "medium" | "small";
export type ButtonSchema = "primary" | "normal" | "like";

export type LayoutWidth = "large" | "medium" | "small";

export type MediaQuery = "mobile" | "tablet" | "desktop";

declare module "styled-components" {
  export interface DefaultTheme {
    name: ThemeName;
    color: Record<ColorKey, string>;
    heading: {
      [key in HeadingSize]: { fontSize: string };
    };
    button: {
      [key in ButtonSize]: {
        fontSize: string;
        padding: string;
      };
    };
    buttonSchema: {
      [key in ButtonSchema]: {
        color: string;
        backgroundColor: string;
      };
    };
    borderRadius: {
      default: string;
    };
    layout: {
      width: {
        [key in LayoutWidth]: string;
      };
    };
    mediaQuery: {
      [key in MediaQuery]: string;
    };
  }
}

export const light: DefaultTheme = {
  name: "light",
  color: {
    primary: "hsl(344, 46%, 62%)",
    background: "lightgray",
    secondary: "#31a461",
    third: "green",
    border: "gray",
    text: "black",
  },
  heading: {
    large: {
      fontSize: "2rem",
    },
    medium: {
      fontSize: "1.5rem",
    },
    small: {
      fontSize: "1rem",
    },
  },
  button: {
    large: {
      fontSize: "2rem",
      padding: "1rem 2rem",
    },
    medium: {
      fontSize: "1rem",
      padding: "0.5rem 1rem",
    },
    small: {
      fontSize: "0.75rem",
      padding: "0.25rem 0.5rem",
    },
  },
  buttonSchema: {
    primary: {
      color: "white",
      backgroundColor: "midnightblue",
    },
    normal: {
      color: "black",
      backgroundColor: "lightgray",
    },
    like: {
      color: "white",
      backgroundColor: "coral",
    },
  },
  borderRadius: {
    default: "4px",
  },
  layout: {
    width: {
      large: "1020px",
      medium: "760px",
      small: "320px",
    },
  },
  mediaQuery: {
    mobile: "(max-width: 768px)",
    tablet: "(max-width: 1024px)",
    desktop: "(min-width: 1025px)",
  },
};

export const dark: DefaultTheme = {
  ...light,
  name: "dark",
  color: {
    primary: "coral",
    background: "midnightblue",
    secondary: "darkblue",
    third: "darkgreen",
    border: "gray",
    text: "black",
  },
};

export const getTheme = (themeName: ThemeName): DefaultTheme => {
  switch (themeName) {
    case "light":
      return light;
    case "dark":
      return dark;
    default:
      return light;
  }
};

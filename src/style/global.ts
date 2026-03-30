import "sanitize.css";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: ${({ theme }) => theme.color.background};
    }

    h1 {
        margin: 0;
    }

    *{
        color: ${({ theme }) => theme.color.primary};
    }
`;
import { styled } from "styled-components";
import ThemeSwitcher from "../header/ThemeSwitcher";

export const  Header = () => {
    return(
        <HeaderStyle>
            <ThemeSwitcher />
            <h1> book store</h1>
        </HeaderStyle>
    );
}

const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background-color: ${({theme}) => theme.color.background};

    button {
        cursor: pointer;
    }

    h1 {
        color: ${({theme}) => theme.color.primary};
    }
`;

export default Header;
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";




function ThemeSwitcher() {
    
    const { themeName, toggleTheme} = useContext
    (ThemeContext);


    return (
        <button onClick={toggleTheme}>
            {themeName === "light" ? "dark" : "light"}
        </button>
    );
}

export default ThemeSwitcher;
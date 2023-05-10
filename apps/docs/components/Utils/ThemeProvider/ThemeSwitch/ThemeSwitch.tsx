import * as React from "react";

import { ThemeContext } from "../ThemeProvider";
import { Icon } from "./ThemeSwitchIcon/ThemeSwitchIcons";

import "./themeSwitch.css";

export type ColorScheme = "light" | "dark";

export default function ThemeSwitch() {
    const { colorMode, setColorMode } = React.useContext(ThemeContext);
    const [hasReadLocalStorage, setHasReadLocalStorage] = React.useState(false);

    React.useEffect(() => {
        setHasReadLocalStorage(true);
    }, []);

    const toggleTheme = () => {
        const theme: ColorScheme = colorMode === "dark"
            ? "light"
            : "dark";

        document.documentElement.setAttribute("data-theme", theme);
        setColorMode && setColorMode(theme);
    };

    return (
        <>
            {hasReadLocalStorage && (
                <button className="hd-themeSwitchButton"
                    aria-label="Toggle Dark Mode"
                    onMouseDown={toggleTheme}
                >
                    {colorMode === "dark" ? (
                        <Icon icon="sun"/>
                    ) : (
                        <Icon icon="moon"/>
                    )}
                </button>
            )}
        </>
    );
}

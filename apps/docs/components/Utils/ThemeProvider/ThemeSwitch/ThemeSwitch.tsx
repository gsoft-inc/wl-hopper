import * as React from "react";

import { ThemeContext } from "../ThemeProvider";
import { Icon } from "./ThemeSwitchIcon/ThemeSwitchIcons";

import "./themeSwitch.css";

export type ColorScheme = "light" | "dark";

export default function ThemeSwitch() {
    const { colorMode, setColorMode } = React.useContext(ThemeContext);

    const toggleTheme = () => {
        const theme: ColorScheme = colorMode === "dark"
            ? "light"
            : "dark";

        setColorMode(theme);
    };

    if (colorMode) {
        return (
            <button className="hd-theme-switch__button"
                aria-label="Toggle Dark Mode"
                onMouseDown={toggleTheme}
            >
                <Icon icon={colorMode === "dark" ? "sun" : "moon"} />
            </button>
        );
    }

    return null;
}

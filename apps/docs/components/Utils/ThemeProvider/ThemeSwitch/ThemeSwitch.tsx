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

    return (
        <>
            {colorMode && (
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

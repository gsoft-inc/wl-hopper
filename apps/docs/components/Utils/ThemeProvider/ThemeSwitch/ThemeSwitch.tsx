import * as React from "react";

import { ThemeContext } from "../ThemeProvider";
import { Icon } from "./ThemeSwitchIcon/ThemeSwitchIcons";

import "./themeSwitch.css";

export type ColorScheme = "light" | "dark";

export default function ThemeSwitch() {
    const { colorMode, setColorMode } = React.useContext(ThemeContext);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        colorMode === "dark" && document.documentElement.setAttribute("data-theme", "dark");
        setMounted(true);
    }, [colorMode]);

    const toggleTheme = () => {
        const theme: ColorScheme = document.documentElement.getAttribute("data-theme") === "dark"
            ? "light"
            : "dark";

        document.documentElement.setAttribute("data-theme", theme);
        setColorMode && setColorMode(theme);
    };

    return (
        <>
            {mounted && (
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

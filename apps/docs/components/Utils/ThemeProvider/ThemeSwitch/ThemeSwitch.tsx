import * as React from "react";

import { type ColorScheme, ThemeContext } from "../ThemeProvider";
import { Icon } from "./ThemeSwitchIcon/ThemeSwitchIcons";
import * as Toggle from "@radix-ui/react-toggle";

import "./themeSwitch.css";

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
            <Toggle.Root className="hd-theme-switch__button" aria-label="Toggle Dark Mode" onPressedChange={toggleTheme}>
                <Icon icon={colorMode === "dark" ? "sun" : "moon"} />
            </Toggle.Root>
        );
    }

    return null;
}

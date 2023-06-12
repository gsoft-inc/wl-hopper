import * as React from "react";

import { type ColorScheme, ThemeContext } from "../ThemeProvider";
import { Icon } from "./ThemeSwitchIcon/ThemeSwitchIcons";
import { ToggleButton } from "react-aria-components";

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
            <ToggleButton className="hd-theme-switch__button" onPress={toggleTheme}>
                <Icon icon={colorMode === "dark" ? "sun" : "moon"} />
            </ToggleButton>
        );
    }

    return null;
}

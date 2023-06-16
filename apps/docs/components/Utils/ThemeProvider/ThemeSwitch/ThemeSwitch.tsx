import { useContext } from "react";
import { ToggleButton } from "react-aria-components";

import { type ColorScheme, ThemeContext } from "../ThemeProvider";
import { Icon } from "./ThemeSwitchIcon/ThemeSwitchIcons";

import "./themeSwitch.css";

export default function ThemeSwitch() {
    const { colorMode, setColorMode } = useContext(ThemeContext);

    const toggleTheme = () => {
        const theme: ColorScheme = colorMode === "dark"
            ? "light"
            : "dark";

        setColorMode(theme);
    };

    if (colorMode) {
        return (
            <ToggleButton
                className="hd-icon-button"
                onChange={toggleTheme}
                aria-label="Toggle theme"
            >
                <Icon icon={colorMode === "dark" ? "sun" : "moon"} />
            </ToggleButton>
        );
    }

    return null;
}

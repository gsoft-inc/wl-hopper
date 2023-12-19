import { useContext } from "react";
import { ToggleButton } from "react-aria-components";

import { type ColorScheme, ThemeContext } from "@/context/theme/ThemeProvider";
import Icon from "@/components/themeSwitch/ThemeSwitchIcons";
import clsx from "clsx";

import "./themeSwitch.css";

interface ThemeSwitchProps {
    text?: string;
    className?: string;
}

const ThemeSwitch = ({ text, className }: ThemeSwitchProps) => {
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
                className={clsx("hd-theme-switch__button", className)}
                onChange={toggleTheme}
                aria-label="Toggle theme"
            >
                <Icon icon={colorMode === "dark" ? "sun" : "moon"} />
                <span className="hd-theme-switch__text">{text}</span>
            </ToggleButton>
        );
    }

    return null;
};

export default ThemeSwitch;

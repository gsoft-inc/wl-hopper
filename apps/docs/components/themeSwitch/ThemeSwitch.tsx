import { useContext } from "react";
import { ToggleButton } from "react-aria-components";

import { type ColorScheme, ThemeContext } from "@/context/theme/ThemeProvider";
import Icon from "@/components/themeSwitch/ThemeSwitchIcons";

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
                className={className}
                onChange={toggleTheme}
                aria-label="Toggle theme"
            >
                <Icon icon={colorMode === "dark" ? "sun" : "moon"} />
                {text}
            </ToggleButton>
        );
    }

    return null;
};

export default ThemeSwitch;

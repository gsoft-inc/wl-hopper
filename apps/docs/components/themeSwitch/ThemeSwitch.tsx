import { ToggleButton } from "@/components/ToggleButton/ToggleButton";

import Icon from "@/components/themeSwitch/ThemeSwitchIcons";
import type { ColorScheme } from "@/context/theme/ThemeProvider";
import clsx from "clsx";

import "./themeSwitch.css";

interface ThemeSwitchProps {
    text?: string;
    className?: string;
    onChange: () => void;
    colorMode: ColorScheme;
}

const ThemeSwitch = ({ text, className, colorMode, onChange }: ThemeSwitchProps) => {
    if (colorMode) {
        return (
            <ToggleButton
                className={clsx("hd-theme-switch__button", className)}
                onChange={onChange}
                aria-label="Toggle theme"
            >
                <Icon icon={colorMode === "dark" ? "sun" : "moon"} />
                <span>{text}</span>
            </ToggleButton>
        );
    }

    return null;
};

export default ThemeSwitch;

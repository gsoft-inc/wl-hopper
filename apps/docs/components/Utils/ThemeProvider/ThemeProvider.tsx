"use client";

import React from "react";
import { getInitialColorMode } from "./ThemeHelper";

export type ColorScheme = "light" | "dark";

interface ColorSchemeContextType {
    colorMode: ColorScheme;
    setColorMode?: (newColorScheme: ColorScheme) => void;
}

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = React.createContext<ColorSchemeContextType>({
    colorMode: "light",
    setColorMode: undefined
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [colorMode, rawSetColorMode] = React.useState<ColorScheme>("light");

    const setColorMode = (value: ColorScheme) => {
        window.localStorage.setItem("hdTheme", value);
        rawSetColorMode(value);
    };

    React.useEffect(() => {
        setColorMode(getInitialColorMode());
    }, []);

    return (
        <ThemeContext.Provider value={{ colorMode, setColorMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
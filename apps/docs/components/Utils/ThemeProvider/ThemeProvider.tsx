"use client";

import React from "react";
import { ColorScheme, getInitialColorMode } from "./get-initial-color-mode";

interface ColorSchemeContextType {
    colorMode: ColorScheme;
    setColorMode: (newColorScheme: ColorScheme) => void;
}

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = React.createContext<ColorSchemeContextType>({
    colorMode: "light",
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setColorMode: () => {}
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [colorMode, rawSetColorMode] = React.useState<ColorScheme>("light");

    const setColorMode = (value: ColorScheme) => {
        window.localStorage.setItem("hdTheme", value);
        rawSetColorMode(value);
    };

    React.useEffect(() => {
        setColorMode(getInitialColorMode());
        document.documentElement.setAttribute("data-theme", colorMode);
    }, []);

    return (
        <ThemeContext.Provider value={{ colorMode, setColorMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
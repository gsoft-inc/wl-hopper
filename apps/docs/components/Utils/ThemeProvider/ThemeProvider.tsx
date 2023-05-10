"use client";

import React from "react";
import { ColorScheme, getInitialColorMode } from "./get-initial-color-mode";

interface ColorSchemeContextType {
    colorMode: ColorScheme | undefined;
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
    const [colorMode, setColorMode] = React.useState<ColorScheme | undefined>(
        undefined
    );

    React.useEffect(() => {
        if (colorMode) {
            document.documentElement.setAttribute("data-theme", colorMode);
            window.localStorage.setItem("hdTheme", colorMode);
        }
    }, [colorMode]);

    React.useEffect(() => {
        setColorMode (getInitialColorMode());
    }, [setColorMode ]);

    return (
        <ThemeContext.Provider value={{ colorMode, setColorMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
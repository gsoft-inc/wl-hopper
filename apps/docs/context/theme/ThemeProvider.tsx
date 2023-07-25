"use client";

import React from "react";
import { getInitialColorMode } from "./getInitialColorMode";

interface ColorSchemeContextType {
    colorMode: ColorScheme | undefined;
    setColorMode: (newColorScheme: ColorScheme) => void;
}

interface ThemeProviderProps {
    children: React.ReactNode;
}

export type ColorScheme = "light" | "dark";

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

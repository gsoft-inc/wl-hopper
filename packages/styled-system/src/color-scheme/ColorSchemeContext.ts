import { createContext, useContext } from "react";

export type ColorScheme = "light" | "dark";
export type ColorSchemeOrSystem = ColorScheme | "system";

export interface ColorSchemeContextType {
    colorScheme: ColorScheme;
    setColorScheme: (newColorScheme: ColorScheme) => void;
}

export const ColorSchemeContext = createContext<ColorSchemeContextType>({
    colorScheme: "light",
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setColorScheme: () => {}
});

export function useColorSchemeContext(): ColorSchemeContextType {
    return useContext(ColorSchemeContext);
}

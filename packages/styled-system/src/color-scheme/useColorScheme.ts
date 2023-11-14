import { useMediaQuery } from "../utils/useMediaQuery.ts";
import type { ColorScheme, ColorSchemeOrSystem } from "./ColorSchemeContext.ts";

export function useColorScheme(colorScheme: ColorSchemeOrSystem, defaultColorScheme: ColorScheme): ColorScheme {
    const matchesLight = useMediaQuery("(prefers-color-scheme: light)");
    const matchesDark = useMediaQuery("(prefers-color-scheme: dark)");

    if (colorScheme === "system") {
        if (matchesLight) {
            return "light";
        }

        if (matchesDark) {
            return "dark";
        }

        return defaultColorScheme ?? "light";
    }

    return colorScheme;
}

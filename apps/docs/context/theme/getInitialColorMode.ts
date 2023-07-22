import type { ColorScheme } from "./ThemeProvider";

export function getInitialColorMode(): ColorScheme {
    const persistedColorPreference = window.localStorage.getItem("hdTheme");
    const hasPersistedPreference = typeof persistedColorPreference === "string";
    if (hasPersistedPreference) {
        return persistedColorPreference as ColorScheme;
    }
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof mql.matches === "boolean";
    if (hasMediaQueryPreference) {
        return mql.matches ? "dark" : "light";
    }

    return "light";
}

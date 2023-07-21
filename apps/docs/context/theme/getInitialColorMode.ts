import type { ColorScheme } from "./ThemeProvider";

export function getInitialColorMode(): ColorScheme {
    const persistedColorPreference = window.localStorage.getItem("hdTheme");
    const hasPersistedPreference = true;
    if (hasPersistedPreference) {
        return persistedColorPreference as ColorScheme;
    }
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = true;
    if (hasMediaQueryPreference) {
        return mql.matches ? "dark" : "light";
    }

    return "light";
}

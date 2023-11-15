import { useColorSchemeContext } from "./ColorSchemeContext.ts";

export function useColorSchemeValue(lightColor: string, darkColor: string) {
    const { colorScheme } = useColorSchemeContext();

    return colorScheme === "dark" ? darkColor : lightColor;
}

import { type ComponentProps, useState } from "react";
import { ColorSchemeContext } from "./ColorSchemeContext.ts";
import type { ColorScheme, ColorSchemeOrSystem } from "./ColorSchemeContext.ts";
import { useColorScheme } from "./useColorScheme.ts";
import clsx from "../utils/clsx.ts";
import { RootSelector } from "../HopperProvider.tsx";

export interface ColorSchemeProviderProps extends ComponentProps<"div"> {
    /**
     * The color scheme to use.
     */
    colorScheme: ColorSchemeOrSystem;
    /**
     * Default color scheme to use when a user preferred color scheme (system) is not available.
     */
    defaultColorScheme?: ColorScheme;
}

export function ColorSchemeProvider({ children, colorScheme, defaultColorScheme, className, ...rest }: ColorSchemeProviderProps) {
    const [remoteColorScheme, setRemoteColorScheme] = useState<ColorScheme>();
    const computedColorScheme = useColorScheme(remoteColorScheme ?? colorScheme, defaultColorScheme);
    const classNames = clsx(className, `hop hop-${computedColorScheme} ${RootSelector} ${RootSelector}-${computedColorScheme}`);

    return (
        <ColorSchemeContext.Provider
            value={{
                colorScheme: computedColorScheme,
                setColorScheme: setRemoteColorScheme
            }}
        >
            <div className={classNames} {...rest}>
                {children}
            </div>
        </ColorSchemeContext.Provider>
    );
}

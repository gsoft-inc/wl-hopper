import packageJson from "../package.json";
import { BreakpointProvider } from "./responsive/BreakpointProvider.tsx";
import { ColorSchemeProvider, type ColorSchemeProviderProps } from "./color-scheme/ColorSchemeProvider.tsx";
import { TokensProvider } from "./tokens/TokensProvider.tsx";
import { GlobalStyleProvider } from "./global-styles/GlobalStyleProvider.tsx";

export interface HopperProviderProps extends ColorSchemeProviderProps {
    withGlobalStyles?: boolean;
    withTokens?: boolean;
}

// TODO: use the major version only to determine if we should duplicate tokens or not.
export const RootSelector = `hop-${packageJson.version.replaceAll(".", "-")}`;

export function HopperProvider({ children, withGlobalStyles = false, withTokens = false, colorScheme, defaultColorScheme, ...rest }: HopperProviderProps) {
    return (
        <ColorSchemeProvider colorScheme={colorScheme} defaultColorScheme={defaultColorScheme} {...rest}>
            <BreakpointProvider>
                {withGlobalStyles && <GlobalStyleProvider />}
                {withTokens && <TokensProvider />}

                {children}
            </BreakpointProvider>
        </ColorSchemeProvider>
    );
}

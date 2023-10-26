import packageJson from "../package.json";
import { ColorSchemeProvider, type ColorSchemeProviderProps } from "./color-scheme/ColorSchemeProvider.tsx";
import { GlobalStyleProvider } from "./global-styles/GlobalStyleProvider.tsx";
import { BreakpointProvider } from "./responsive/BreakpointProvider.tsx";
import { TokensProvider } from "./tokens/TokensProvider.tsx";

// TODO, this belongs in the components package

export interface HopperProviderProps extends ColorSchemeProviderProps {
    withGlobalStyles?: boolean;
    withTokens?: boolean;
}

// We read the version from the packageJson and replace all dots with dashes.
// This ensures that multiple versions of Hopper can be used on the same page.
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

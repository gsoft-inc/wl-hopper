import { StyledSystemProvider, type StyledSystemProviderProps } from "@hopper-ui/styled-system";

export type HopperProviderProps = StyledSystemProviderProps;

/**
 * HopperProvider is required to be rendered at the root of your application. It is responsible for:
 * - Adding CSS variables to the document
 * - Managing color scheme (light, dark, auto)
 * - Optionally adding body styles to the document
 *
 * [View Documentation](TODO)
 */
export function HopperProvider({ children, withBodyStyle = false, colorScheme = "light", withCssVariables = true, ...rest }: HopperProviderProps) {
    return (
        <StyledSystemProvider withBodyStyle={withBodyStyle} colorScheme={colorScheme} withCssVariables={withCssVariables} {...rest}>
            {children}
        </StyledSystemProvider>
    );
}

HopperProvider.displayName = "HopperProvider";

import { StyledSystemProvider, type StyledSystemProviderProps } from "@hopper-ui/styled-system";
import { I18nProvider } from "react-aria-components";

export interface HopperProviderProps extends StyledSystemProviderProps {
    /**
     * The The BCP47 language code for the locale.
     * @example "en-US"
    */
    locale?: string;
}

/**
 * HopperProvider is required to be rendered at the root of your application. It is responsible for:
 * - Adding CSS variables to the document
 * - Managing color scheme (light, dark, auto)
 * - Optionally adding body styles to the document
 *
 * [View Documentation](TODO)
 */
export function HopperProvider({ children, locale, withBodyStyle = false, colorScheme = "light", withCssVariables = true, ...rest }: HopperProviderProps) {
    return (
        <StyledSystemProvider withBodyStyle={withBodyStyle} colorScheme={colorScheme} withCssVariables={withCssVariables} {...rest}>
            <I18nProvider locale={locale}>
                {children}
            </I18nProvider>
        </StyledSystemProvider>
    );
}

HopperProvider.displayName = "HopperProvider";

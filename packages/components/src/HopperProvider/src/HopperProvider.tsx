import { StyledSystemProvider, type StyledSystemProviderProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type ForwardedRef } from "react";
import { I18nProvider } from "react-aria-components";

const GlobalHopperProviderCssSelector = "hop-HopperProvider";

export interface HopperProviderProps extends StyledSystemProviderProps {
    /**
     * The The BCP47 language code for the locale.
     * @example "en-US"
    */
    locale?: string;
}

const HopperProvider = (props:HopperProviderProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
        children,
        locale,
        withBodyStyle = false,
        colorScheme = "light",
        withCssVariables = true,
        className,
        ...rest
    } = props;

    const classNames = clsx(
        GlobalHopperProviderCssSelector,
        className
    );

    return (
        <StyledSystemProvider ref={ref} withBodyStyle={withBodyStyle} colorScheme={colorScheme} withCssVariables={withCssVariables} className={classNames} {...rest}>
            <I18nProvider locale={locale}>
                {children}
            </I18nProvider>
        </StyledSystemProvider>
    );
};


/**
 * HopperProvider is required to be rendered at the root of your application. It is responsible for:
 * - Adding CSS variables to the document
 * - Managing color scheme (light, dark, auto)
 * - Optionally adding body styles to the document
 *
 * [View Documentation](TODO)
 */
const _HopperProvider = forwardRef<HTMLDivElement, HopperProviderProps>(HopperProvider);
_HopperProvider.displayName = "HopperProvider";

export { _HopperProvider as HopperProvider };



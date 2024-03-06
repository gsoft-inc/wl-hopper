import clsx from "clsx";
import { useCallback, useState, type ReactNode, forwardRef, type ForwardedRef } from "react";
import { ColorSchemeContext, type ColorScheme, type ColorSchemeContextType, type ColorSchemeOrSystem } from "./color-scheme/ColorSchemeContext.ts";
import { useColorScheme } from "./color-scheme/useColorScheme.ts";
import { BodyStyleProvider } from "./global-styles/BodyStyleProvider.tsx";
import { Div, type DivProps } from "./html-wrappers/html.ts";
import { BreakpointProvider, DefaultUnsupportedMatchMediaBreakpoint, type BreakpointProviderProps } from "./responsive/BreakpointProvider.tsx";
import { HopperRootCssClass, StyledSystemRootCssClass } from "./styled-system-root-css-class.ts";
import { TokenProvider } from "./tokens/TokenProvider.tsx";

export const GlobalStyledSystemProviderCssSelector = "hop-StyledSystemProvider";

export interface StyledSystemProviderProps extends BreakpointProviderProps, DivProps {
    /** The children of the component */
    children: ReactNode;

    /**
     * Determines whether the styles should be added to the document's body
     * By default, it is set to `false`. If set to `true`, it will apply additional styling to the document's body.
    */
    withBodyStyle?: boolean;

    /**
     * The color scheme to use.
     */
    colorScheme: ColorSchemeOrSystem;

    /**
     * Default color scheme to use when a user preferred color scheme (system) is not available.
     */
    defaultColorScheme?: ColorScheme;

    /**
     * Determines whether token CSS variables should be added to the document's head
     * By default, it is set to `true`, you should not change it unless you want to manage CSS variables via `.css` files
    */
    withCssVariables?: boolean;
}

const StyledSystemProvider = (props:StyledSystemProviderProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
        children,
        withBodyStyle = false,
        withCssVariables = true,
        colorScheme = "light",
        defaultColorScheme = "light",
        unsupportedMatchMediaBreakpoint = DefaultUnsupportedMatchMediaBreakpoint,
        className,
        ...rest
    } = props;

    const [remoteColorScheme, setRemoteColorScheme] = useState<ColorScheme>();
    const computedColorScheme = useColorScheme(remoteColorScheme ?? colorScheme, defaultColorScheme);

    const setColorScheme: ColorSchemeContextType["setColorScheme"] = useCallback(newColorScheme => {
        setRemoteColorScheme(newColorScheme);
    }, [setRemoteColorScheme]);

    const classNames = clsx(
        className,
        GlobalStyledSystemProviderCssSelector,
        HopperRootCssClass,
        `${HopperRootCssClass}-${computedColorScheme}`,
        StyledSystemRootCssClass,
        `${StyledSystemRootCssClass}-${computedColorScheme}`
    );

    return (
        <ColorSchemeContext.Provider
            value={{
                colorScheme: computedColorScheme,
                setColorScheme
            }}
        >
            <BreakpointProvider unsupportedMatchMediaBreakpoint={unsupportedMatchMediaBreakpoint}>
                <Div ref={ref} className={classNames} {...rest}>
                    {withBodyStyle && <BodyStyleProvider />}
                    {withCssVariables && <TokenProvider />}
                    {children}
                </Div>
            </BreakpointProvider>
        </ColorSchemeContext.Provider>
    );
};

/**
 * StyledSystemProvider is required to be rendered at the root of your application. It is responsible for:
 * - Adding CSS variables to the document
 * - Managing color scheme (light, dark, auto)
 * - Optionally adding body styles to the document
 */
const _StyledSystemProvider = forwardRef<HTMLDivElement, StyledSystemProviderProps>(StyledSystemProvider);
_StyledSystemProvider.displayName = "StyledSystemProvider";

export { _StyledSystemProvider as StyledSystemProvider };

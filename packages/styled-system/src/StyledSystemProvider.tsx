import type { ComponentProps, ReactNode } from "react";
import { BodyStyleProvider } from "./global-styles/BodyStyleProvider.tsx";
import { HopperRootCssClass, StyledSystemRootCssClass } from "./styled-system-root-css-class.ts";
import { TokenProvider } from "./tokens/TokenProvider.tsx";
import clsx from "./utils/clsx.ts";

export interface StyledSystemProviderProps extends ComponentProps<"div">{
    /** The children of the component */
    children: ReactNode;

    /**
     * Determines whether the styles should be added to the document's body
     * By default, it is set to `false`. If set to `true`, it will apply additional styling to the document's body.
    */
    withBodyStyle?: boolean;

    /* The color scheme to use. */
    colorScheme?: "light" | "dark";

    /**
     * Determines whether token CSS variables should be added to the document's head
     * By default, it is set to `true`, you should not change it unless you want to manage CSS variables via `.css` files
    */
    withCssVariables?: boolean;
}

/**
 * StyledSystemProvider is required to be rendered at the root of your application. It is responsible for:
 * - Adding CSS variables to the document
 * - Managing color scheme (light, dark, auto)
 * - Optionally adding body styles to the document
 */
export function StyledSystemProvider({ children, withBodyStyle = false, withCssVariables = true, colorScheme = "light", className, ...rest }: StyledSystemProviderProps) {
    const classNames = clsx(
        `${HopperRootCssClass} ${HopperRootCssClass}-${colorScheme} ${StyledSystemRootCssClass} ${StyledSystemRootCssClass}-${colorScheme}`,
        className
    );

    return (
        <div className={classNames} {...rest}>
            {withBodyStyle && <BodyStyleProvider />}
            {withCssVariables && <TokenProvider />}
            {children}
        </div>
    );
}

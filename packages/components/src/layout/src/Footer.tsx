import { useStyledSystem, type StyledComponentProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, forwardRef, type ForwardedRef } from "react";
import { useContextProps } from "react-aria-components";

import type { BaseComponentProps } from "../../utils/index.ts";

import { FooterContext } from "./FooterContext.ts";

export const GlobalFooterCssSelector = "hop-Footer";

export interface FooterProps extends StyledComponentProps<BaseComponentProps> {}

function Footer(props: FooterProps, ref: ForwardedRef<HTMLElement>) {
    [props, ref] = useContextProps(props, ref, FooterContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        style,
        slot,
        ...otherProps
    } = ownProps;

    const classNames = clsx(
        GlobalFooterCssSelector,
        stylingProps.className,
        className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    return (
        <footer
            {...otherProps}
            ref={ref}
            className={classNames}
            style={mergedStyles}
            slot={slot || undefined}
        >
            {children}
        </footer>
    );
}

/**
 * The Footer component represents a Footer within a Hopper container such as a Modal or Popover.
 *
 * [View Documentation](TODO)
 */
const _Footer = forwardRef<HTMLElement, FooterProps>(Footer);
_Footer.displayName = "Footer";

export { _Footer as Footer };

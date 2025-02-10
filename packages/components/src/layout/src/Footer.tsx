import { slot as slotFn, useStyledSystem, type StyledComponentProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type CSSProperties, type ForwardedRef } from "react";
import { useContextProps } from "react-aria-components";

import type { BaseComponentDOMProps } from "../../utils/index.ts";

import { FooterContext, type FooterContextValue } from "./FooterContext.ts";

export const GlobalFooterCssSelector = "hop-Footer";

export interface FooterProps extends StyledComponentProps<BaseComponentDOMProps> {}

function Footer(props: FooterProps, ref: ForwardedRef<HTMLElement>) {
    [props, ref] = useContextProps(props, ref, FooterContext);
    const { isHidden } = props as FooterContextValue;
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

    if (isHidden) {
        return null;
    }

    return (
        <footer
            ref={ref}
            className={classNames}
            style={mergedStyles}
            slot={slot || undefined}
            {...otherProps}
        >
            {children}
        </footer>
    );
}

/**
 * The Footer component represents a Footer within a Hopper container such as a Modal or Popover.
 *
 * [View Documentation](https://hopper.workleap.design/components/Footer)
 */
const _Footer = slotFn("footer", forwardRef<HTMLElement, FooterProps>(Footer));
_Footer.displayName = "Footer";

export { _Footer as Footer };

import { useStyledSystem, type StyledComponentProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, forwardRef, type ForwardedRef } from "react";
import { useContextProps } from "react-aria-components";

import type { BaseComponentProps } from "../../utils/index.ts";

import { ContentContext } from "./ContentContext.ts";

export const GlobalFooterCssSelector = "hop-Content";

export interface ContentProps extends StyledComponentProps<BaseComponentProps> {
}

function Content(props: ContentProps, ref: ForwardedRef<HTMLElement>) {
    [props, ref] = useContextProps(props, ref, ContentContext);
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
        <span
            {...otherProps}
            ref={ref}
            className={classNames}
            style={mergedStyles}
            slot={slot || undefined}
        >
            {children}
        </span>
    );
}

/**
 * The Content component represents a Footer within a Hopper container such as a Modal or Popover.
 *
 * [View Documentation](TODO)
 */
const _Content = forwardRef<HTMLElement, ContentProps>(Content);
_Content.displayName = "Content";

export { _Content as Content };

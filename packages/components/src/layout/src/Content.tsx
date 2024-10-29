import { slot as slotFn, useStyledSystem, type StyledComponentProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type CSSProperties, type ForwardedRef } from "react";
import { useContextProps } from "react-aria-components";

import type { BaseComponentDOMProps } from "../../utils/index.ts";

import { ContentContext } from "./ContentContext.ts";

export const GlobalContentCssSelector = "hop-Content";

export interface ContentProps extends StyledComponentProps<BaseComponentDOMProps> {
}

function Content(props: ContentProps, ref: ForwardedRef<HTMLDivElement>) {
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
        GlobalContentCssSelector,
        stylingProps.className,
        className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    return (
        <div
            ref={ref}
            className={classNames}
            style={mergedStyles}
            slot={slot || undefined}
            {...otherProps}
        >
            {children}
        </div>
    );
}

/**
 * The Content component represents a Content within a Hopper container such as a Modal or Popover.
 *
 * [View Documentation](TODO)
 */
const _Content = slotFn("content", forwardRef<HTMLDivElement, ContentProps>(Content));
_Content.displayName = "Content";

export { _Content as Content };

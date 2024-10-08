import { useStyledSystem, type StyledSystemProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type CSSProperties, type ForwardedRef } from "react";
import { useContextProps } from "react-aria-components";

import type { BaseComponentDOMProps } from "../../utils/index.ts";

import { CheckboxListContext } from "./CheckboxListContext.ts";

export const GlobalCheckboxListCssSelector = "hop-CheckboxList";

export interface CheckboxListProps extends StyledSystemProps, BaseComponentDOMProps {}

function CheckboxList(props:CheckboxListProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, CheckboxListContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        style,
        slot,
        ...otherProps
    } = ownProps;

    const classNames = clsx(
        className,
        GlobalCheckboxListCssSelector,
        stylingProps.className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    return (
        <div
            {...otherProps}
            ref={ref}
            className={classNames}
            style={mergedStyles}
            slot={slot ?? undefined}
        >
            {children}
        </div>
    );
}

/**
 * The Checkbox List component is a container for a group of checkboxes.
 *
 * [View Documentation](TODO)
 */
const _CheckboxList = forwardRef<HTMLDivElement, CheckboxListProps>(CheckboxList);
_CheckboxList.displayName = "CheckboxList";

export { _CheckboxList as CheckboxList };

import { forwardRef, type ForwardedRef, type CSSProperties } from "react";
import clsx from "clsx";
import { type StyledSystemProps, useStyledSystem } from "@hopper-ui/styled-system";
import { CheckboxListContext } from "./CheckboxListContext.ts";
import { useContextProps } from "react-aria-components";
import type { BaseComponentProps } from "../../utils/src/types.ts";

export const GlobalCheckboxListCssSelector = "hop-CheckboxList";

export interface CheckboxListProps extends StyledSystemProps, BaseComponentProps {}

function CheckboxList(props:CheckboxListProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, CheckboxListContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        style,
        slot = "checkboxList",
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

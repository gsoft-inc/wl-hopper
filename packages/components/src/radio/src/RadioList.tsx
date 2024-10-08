import { useStyledSystem, type StyledSystemProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type CSSProperties, type ForwardedRef } from "react";
import { useContextProps } from "react-aria-components";

import type { BaseComponentDOMProps } from "../../utils/index.ts";

import { RadioListContext } from "./RadioListContext.ts";

export const GlobalRadioListCssSelector = "hop-RadioList";

export interface RadioListProps extends StyledSystemProps, BaseComponentDOMProps {}

function RadioList(props:RadioListProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, RadioListContext);
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
        GlobalRadioListCssSelector,
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
 * The Radio List component is a container for a group of radioes.
 *
 * [View Documentation](TODO)
 */
const _RadioList = forwardRef<HTMLDivElement, RadioListProps>(RadioList);
_RadioList.displayName = "RadioList";

export { _RadioList as RadioList };

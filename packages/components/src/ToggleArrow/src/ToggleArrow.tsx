import { AngleDownIcon } from "@hopper-ui/icons";
import { useStyledSystem, type StyledComponentProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type ForwardedRef } from "react";
import { useContextProps } from "react-aria-components";

import { cssModule, type BaseComponentDOMProps } from "../../utils/index.ts";

import { ToggleArrowContext } from "./ToggleArrowContext.ts";

import styles from "./ToggleArrow.module.css";

export const GlobalToggleArrowCssSelector = "hop-ToggleArrow";

export interface ToggleArrowProps extends Omit<StyledComponentProps<BaseComponentDOMProps>, "children"> {
    /**
     * Whether the arrow is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether the arrow is in an expanded state.
     */
    isExpanded?: boolean;
    /**
     * Whether the arrow should have a focused effect.
     */
    isFocused?: boolean;
    /**
     * Whether the arrow should have a hover effect.
     */
    isHovered?: boolean;
    /**
     * Whether the arrow should have a pressed effect.
     */
    isPressed?: boolean;

}

function ToggleArrow(props:ToggleArrowProps, ref: ForwardedRef<SVGSVGElement>) {
    [props, ref] = useContextProps(props, ref, ToggleArrowContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        isDisabled,
        isExpanded,
        isFocused,
        isHovered,
        isPressed,
        style: styleProp,
        ...otherProps
    } = ownProps;

    const classNames = clsx(
        GlobalToggleArrowCssSelector,
        cssModule(
            styles,
            "hop-ToggleArrow"
        ),
        stylingProps.className,
        className
    );

    const style = {
        ...stylingProps.style,
        ...styleProp
    };

    return (
        <AngleDownIcon
            ref={ref}
            className={classNames}
            style={style}
            size="sm"
            data-disabled={isDisabled || undefined}
            data-expanded={isExpanded || undefined}
            data-focused={isFocused || undefined}
            data-hovered={isHovered || undefined}
            data-pressed={isPressed || undefined}
            {...otherProps}
        />
    );
}

/**
 * A simple arrow icon for expanding and collapsing content.
 *
 * [View Documentation](TODO)
 */
const _ToggleArrow = forwardRef<SVGSVGElement, ToggleArrowProps>(ToggleArrow);
_ToggleArrow.displayName = "ToggleArrow";

export { _ToggleArrow as ToggleArrow };

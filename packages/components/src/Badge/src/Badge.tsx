import { useStyledSystem, type StyledSystemProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, forwardRef, type ForwardedRef } from "react";
import { useContextProps } from "react-aria-components";

import { OverlineText } from "../../typography/OverlineText/index.ts";
import { ClearContainerSlots, cssModule, type BaseComponentProps } from "../../utils/index.ts";

import { BadgeContext, type BadgeContextValue } from "./BadgeContext.ts";

import styles from "./Badge.module.css";

export const GlobalBadgeCssSelector = "hop-Badge";

export interface BadgeProps extends StyledSystemProps, BaseComponentProps {
    /**
     * The visual style of the badge.
     * @default "primary"
     */
    variant?: "primary" | "secondary" | "subdued";
    /**
     * Whether or not the badge is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether or not the badge is indeterminate and should just be a dot. This will ignore any children.
    */
    isIndeterminate?: boolean;
}

function Badge(props: BadgeProps, ref: ForwardedRef<HTMLSpanElement>) {
    [props, ref] = useContextProps(props, ref, BadgeContext);
    const { isHovered, isPressed, isSelected } = props as BadgeContextValue;

    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        children,
        className,
        isDisabled,
        isIndeterminate,
        style,
        slot,
        variant = "primary",
        ...otherProps
    } = ownProps;

    const isDot = isIndeterminate || !children;

    const classNames = clsx(
        className,
        GlobalBadgeCssSelector,
        cssModule(
            styles,
            "hop-Badge"
        ),
        stylingProps.className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    return (
        
        <ClearContainerSlots>
            <OverlineText
                {...otherProps}
                ref={ref}
                className={classNames}
                style={mergedStyles}
                slot={slot ?? undefined}
                data-disabled={isDisabled || undefined}
                aria-disabled={isDisabled || undefined}
                data-indeterminate={isDot || undefined}
                data-hovered={isHovered || undefined}
                data-pressed={isPressed || undefined}
                data-selected={isSelected || undefined}
                data-variant={variant}
            >
                {!isDot && children}
            </OverlineText>
        </ClearContainerSlots>
    );
}

/**
 * A badge displays either a number, text or a dot to indicate the status of an element.
 *
 * [View Documentation](TODO)
 */
const _Badge = forwardRef<HTMLSpanElement, BadgeProps>(Badge);
_Badge.displayName = "Badge";

export { _Badge as Badge };

import { useStyledSystem, type StyledSystemProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, forwardRef, type ForwardedRef } from "react";
import { useContextProps } from "react-aria-components";

import { OverlineText } from "../../typography/OverlineText/index.ts";
import { ClearContainerSlots, cssModule, type BaseComponentProps } from "../../utils/index.ts";

import { BadgeContext } from "./BadgeContext.ts";

import styles from "./Badge.module.css";

export const GlobalBadgeCssSelector = "hop-Badge";

export interface BadgeProps extends StyledSystemProps, BaseComponentProps {
    /**
     * The visual style of the badge.
     * @default "primary"
     */
    variant?: "primary" | "secondary";
    /**
     * Whether or not the badge is disabled.
     */
    isDisabled?: boolean;
}

function Badge(props: BadgeProps, ref: ForwardedRef<HTMLSpanElement>) {
    [props, ref] = useContextProps(props, ref, BadgeContext);

    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        children,
        className,
        isDisabled,
        style,
        slot,
        variant = "primary",
        ...otherProps
    } = ownProps;

    const classNames = clsx(
        className,
        GlobalBadgeCssSelector,
        cssModule(
            styles,
            "hop-Badge",
            variant
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
                data-variant={variant}
            >
                {children}
            </OverlineText>
        </ClearContainerSlots>
    );
}

/**
 * A badge, displaying either text or a count, serves to present notices or notifications associated with a parent component.
 *
 * [View Documentation](TODO)
 */
const _Badge = forwardRef<HTMLSpanElement, BadgeProps>(Badge);
_Badge.displayName = "Badge";

export { _Badge as Badge };

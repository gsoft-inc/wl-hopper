import { IconContext } from "@hopper-ui/icons";
import { type StyledSystemProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type ForwardedRef, type CSSProperties } from "react";
import { DEFAULT_SLOT, useContextProps } from "react-aria-components";

import { IconListContext } from "../../IconList/index.ts";
import { Text, TextContext, type TextProps } from "../../Text/index.ts";
import { SlotProvider, type SizeAdapter, cssModule, type BaseComponentProps, isTextOnlyChildren } from "../../utils/index.ts";

import { ChipContext } from "./ChipContext.ts";

import styles from "./Chip.module.css";

export const GlobalChipCssSelector = "hop-Chip";

const ChipToTextSizeAdapter: SizeAdapter<ChipProps["size"], TextProps["size"]> = {
    xs: "xs",
    sm: "xs",
    md: "xs",
    lg: "sm"
};

export interface ChipProps extends StyledSystemProps, BaseComponentProps {
    /**
     * A Chip can vary in size.
     * @default "md"
     */
    size?: ResponsiveProp<"xs" | "sm" | "md" | "lg">;
    /**
     * The visual style of the Chip.
     * @default "neutral"
     */
    variant?: "neutral" | "progress" | "positive" | "caution" | "negative" | "option1" | "option2" | "option3" | "option4" | "option5" | "option6" | "inactive" | "disabled";
}

function Chip(props:ChipProps, ref: ForwardedRef<HTMLSpanElement>) {
    [props, ref] = useContextProps(props, ref, ChipContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        size: sizeProp,
        style,
        slot,
        variant = "neutral",
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = clsx(
        className,
        GlobalChipCssSelector,
        cssModule(
            styles,
            "hop-Chip",
            size,
            variant
        ),
        stylingProps.className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    const content = children && isTextOnlyChildren(children) ? <Text>{children}</Text> : children;

    return (
        <SlotProvider
            values={[
                [TextContext, {
                    className: styles["hop-Chip__text"],
                    size: ChipToTextSizeAdapter[size]
                }],
                [IconListContext, {
                    slots: {
                        [DEFAULT_SLOT]: {
                            size: "sm",
                            className: styles["hop-Chip__icon-list"]
                        },
                        "end-icon": {
                            size: "sm",
                            className: styles["hop-Chip__end-icon-list"]
                        }
                    }
                }],
                [IconContext, {
                    slots: {
                        [DEFAULT_SLOT]: {
                            size: "sm",
                            className: styles["hop-Chip__icon"]
                        },
                        "end-icon": {
                            size: "sm",
                            className: styles["hop-Chip__end-icon"]
                        }
                    }
                }]
            ]}
        >
            <span
                {...otherProps}
                ref={ref}
                className={classNames}
                style={mergedStyles}
                slot={slot ?? undefined}
                role="presentation"
            >
                {content}
            </span>
        </SlotProvider>
    );
}

/**
 * Use Chip to label, categorize, or organize items using keywords that describe them.
 *
 * [View Documentation](TODO)
 */
const _Chip = forwardRef<HTMLSpanElement, ChipProps>(Chip);
_Chip.displayName = "Chip";

export { _Chip as Chip };

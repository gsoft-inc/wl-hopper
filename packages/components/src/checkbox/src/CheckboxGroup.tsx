import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import { useContextProps, CheckboxGroup as RACCheckboxGroup, type CheckboxGroupProps as RACCheckboxGroupProps, composeRenderProps } from "react-aria-components";

import { CheckboxContext, CheckboxFieldContext, CheckboxListContext } from "../../checkbox/index.ts";
import { ErrorMessageContext } from "../../errorMessage/index.ts";
import { HelperMessageContext } from "../../helperMessage/index.ts";
import { LabelContext } from "../../Label/index.ts";
import { composeClassnameRenderProps, SlotProvider, cssModule } from "../../utils/index.ts";

import { CheckboxGroupContext } from "./CheckboxGroupContext.ts";

import styles from "./CheckboxGroup.module.css";

export const GlobalCheckboxGroupCssSelector = "hop-CheckboxGroup";

// Won't be needed in next react-aria-components release: https://github.com/adobe/react-spectrum/pull/5850
const DefaultCheckboxGroupSlot = "checkboxGroup";

export interface CheckboxGroupProps extends StyledComponentProps<RACCheckboxGroupProps> {
    /**
     * A checkbox can be displayed horizontally or vertically.
     */
    orientation?: ResponsiveProp<"horizontal" | "vertical">;
    /**
     * A checkbox can vary in size.
     */
    size?: ResponsiveProp<"sm" | "md">;
    /**
     * A CheckboxGroup has two variants: borderless and bordered.
     */
    variant?: "borderless" | "bordered";
}

function CheckboxGroup(props: CheckboxGroupProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultCheckboxGroupSlot }, ref, CheckboxGroupContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        isDisabled,
        isInvalid,
        orientation: orientationProp = "vertical",
        size: sizeProp = "md",
        style: styleProp,
        variant,
        ...otherProps
    } = ownProps;

    const orientation = useResponsiveValue(orientationProp) ?? "vertical";
    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalCheckboxGroupCssSelector,
        cssModule(
            styles,
            "hop-CheckboxGroup",
            size,
            variant
        ),
        stylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    return (
        <SlotProvider
            values={[
                [LabelContext, {
                    className: styles["hop-CheckboxGroup__label"],
                    size: size
                }],
                [CheckboxContext, {
                    className: styles["hop-CheckboxGroup__checkbox"],
                    size: size
                }],
                [CheckboxFieldContext, {
                    className: styles["hop-CheckboxGroup__checkbox"],
                    size: size,
                    isDisabled: isDisabled
                }],
                [CheckboxListContext, {
                    className: styles["hop-CheckboxGroup__list"]
                }],
                [ErrorMessageContext, {
                    className: styles["hop-CheckboxGroup__error-message"],
                    hideIcon: true
                }],
                [HelperMessageContext, {
                    className: styles["hop-CheckboxGroup__helper-message"],
                    hideIcon: true
                }]
            ]}
        >
            <RACCheckboxGroup
                ref={ref}
                className={classNames}
                style={style}
                isInvalid={isInvalid}
                isDisabled={isDisabled}
                data-orientation={orientation}
                {...otherProps}
            >
                {children}
            </RACCheckboxGroup>
        </SlotProvider>
    );
}

/**
 * The CheckboxGroup component is used to group multiple Checkbox or CheckboxField components together.
 *
 * [View Documentation](TODO)
 */
const _CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(CheckboxGroup);
_CheckboxGroup.displayName = "CheckboxGroup";

export { _CheckboxGroup as CheckboxGroup };

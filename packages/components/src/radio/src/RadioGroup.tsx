import {
    type ResponsiveProp,
    type StyledComponentProps,
    useResponsiveValue,
    useStyledSystem
} from "@hopper-ui/styled-system";
import { type ForwardedRef, forwardRef } from "react";
import type { Orientation } from "react-aria";
import {
    RadioGroup as RACRadioGroup,
    type RadioGroupProps as RACRadioGroupProps,
    composeRenderProps,
    useContextProps
} from "react-aria-components";

import { ErrorMessageContext } from "../../ErrorMessage/index.ts";
import { HelperMessageContext } from "../../HelperMessage/index.ts";
import { RadioContext, RadioFieldContext, RadioListContext } from "../../radio/index.ts";
import { LabelContext } from "../../typography/Label/index.ts";
import { type InputGroupVariant, type InputSize, type NecessityIndicator, SlotProvider, composeClassnameRenderProps, cssModule } from "../../utils/index.ts";

import { RadioGroupContext } from "./RadioGroupContext.ts";

import styles from "./RadioGroup.module.css";

export const GlobalRadioGroupCssSelector = "hop-RadioGroup";

export interface RadioGroupProps extends StyledComponentProps<Omit<RACRadioGroupProps, "orientation">> {
    /**
     * Whether the required state should be shown as an asterisk or a label, which would display (Optional) on all non required field labels.
     */
    necessityIndicator?: NecessityIndicator;
    /**
     * A RadioGroup can be displayed horizontally or vertically.
     * @default "vertical"
     */
    orientation?: ResponsiveProp<Orientation>;
    /**
     * A RadioGroup can vary in size.
     * @default "md"
     */
    size?: ResponsiveProp<InputSize>;
    /**
     * A RadioGroup has two variants: borderless and bordered.
     * @default "borderless"
     */
    variant?: InputGroupVariant;
}

function RadioGroup(props: RadioGroupProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, RadioGroupContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        isDisabled,
        isInvalid,
        isRequired,
        orientation: orientationProp = "vertical",
        size: sizeProp = "md",
        style: styleProp,
        variant = "borderless",
        necessityIndicator,
        ...otherProps
    } = ownProps;

    const orientation = useResponsiveValue(orientationProp) ?? "vertical";
    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalRadioGroupCssSelector,
        cssModule(
            styles,
            "hop-RadioGroup",
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
                    className: styles["hop-RadioGroup__label"],
                    isRequired,
                    necessityIndicator
                }],
                [RadioContext, {
                    className: styles["hop-RadioGroup__radio"],
                    size: size
                }],
                [RadioFieldContext, {
                    className: styles["hop-RadioGroup__radio"],
                    size: size,
                    isDisabled: isDisabled
                }],
                [RadioListContext, {
                    className: styles["hop-RadioGroup__list"]
                }],
                [ErrorMessageContext, {
                    className: styles["hop-RadioGroup__error-message"],
                    hideIcon: true
                }],
                [HelperMessageContext, {
                    className: styles["hop-RadioGroup__helper-message"],
                    hideIcon: true
                }]
            ]}
        >
            <RACRadioGroup
                ref={ref}
                className={classNames}
                style={style}
                isInvalid={isInvalid}
                isDisabled={isDisabled}
                isRequired={isRequired}
                orientation={orientation}
                {...otherProps}
            >
                {children}
            </RACRadioGroup>
        </SlotProvider>
    );
}

/**
 * The RadioGroup component is used to group multiple Radio or RadioField components together.
 *
 * [View Documentation](TODO)
 */
const _RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(RadioGroup);
_RadioGroup.displayName = "RadioGroup";

export { _RadioGroup as RadioGroup };

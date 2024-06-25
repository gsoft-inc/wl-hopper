import {
    type StyledComponentProps,
    useStyledSystem,
    type ResponsiveProp,
    useResponsiveValue
} from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import {
    useContextProps,
    RadioGroup as RACRadioGroup,
    type RadioGroupProps as RACRadioGroupProps,
    composeRenderProps
} from "react-aria-components";

import { ErrorMessageContext } from "../../ErrorMessage/index.ts";
import { HelperMessageContext } from "../../HelperMessage/index.ts";
import { RadioContext, RadioFieldContext, RadioListContext } from "../../radio/index.ts";
import { LabelContext } from "../../typography/Label/index.ts";
import { composeClassnameRenderProps, SlotProvider, cssModule } from "../../utils/index.ts";

import { RadioGroupContext } from "./RadioGroupContext.ts";

import styles from "./RadioGroup.module.css";

export const GlobalRadioGroupCssSelector = "hop-RadioGroup";

export interface RadioGroupProps extends StyledComponentProps<Omit<RACRadioGroupProps, "orientation">> {
    /**
     * A RadioGroup can be displayed horizontally or vertically.
     * @default "vertical"
     */
    orientation?: ResponsiveProp<"horizontal" | "vertical">;
    /**
     * A RadioGroup can vary in size.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;
    /**
     * A RadioGroup has two variants: borderless and bordered.
     * @default "borderless"
     */
    variant?: "borderless" | "bordered";
}

function RadioGroup(props: RadioGroupProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, RadioGroupContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        isDisabled,
        isInvalid,
        orientation: orientationProp = "vertical",
        size: sizeProp = "md",
        style: styleProp,
        variant = "borderless",
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
                    size: size
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

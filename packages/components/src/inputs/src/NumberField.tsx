import { IconContext, AngleDownIcon, AngleUpIcon } from "@hopper-ui/icons";
import { useResponsiveValue, useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { mergeRefs } from "@react-aria/utils";
import { useControlledState } from "@react-stately/utils";
import { forwardRef, useCallback, type ForwardedRef, type MutableRefObject, type ReactNode } from "react";
import { useObjectRef } from "react-aria";
import { composeRenderProps, Input, useContextProps, type NumberFieldProps as RACNumberFieldProps, NumberField as RACNumberField, Button as RACButton } from "react-aria-components";

import { ErrorMessageContext } from "../../ErrorMessage/index.ts";
import { HelperMessageContext } from "../../HelperMessage/index.ts";
import { Text, TextContext, LabelContext } from "../../typography/index.ts";
import { ClearContainerSlots, composeClassnameRenderProps, cssModule, isTextOnlyChildren, SlotProvider, useScale } from "../../utils/index.ts";

import { InputGroup } from "./InputGroup.tsx";
import { NumberFieldContext } from "./NumberFieldContext.ts";

import styles from "./NumberField.module.css";

export const GlobalNumberFieldCssSelector = "hop-NumberField";

export interface NumberFieldProps extends StyledComponentProps<RACNumberFieldProps> {
    /**
     * An icon or text to display at the start of the input.
     */
    prefix?: ReactNode;

    /**
     * The placeholder text when the NumberField is empty.
     */
    placeholder?: string;

    /**
     * The size of the NumberField.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;

    /**
     * If `true`, the NumberField will take all available width.
     */
    isFluid?: ResponsiveProp<boolean>;

    /**
     * A ref for the HTML input element.
     */
    inputRef?: MutableRefObject<HTMLInputElement>;
}

interface StepperButtonProps {
    direction: "decrement" | "increment";
}

const StepperButton = ({ direction }: StepperButtonProps) => {
    const scale = useScale();
    const isMobile = scale === "large";
    const StepperIcon = direction === "increment" ? AngleUpIcon : AngleDownIcon;
    const stepperClasses = cssModule(
        styles,
        "hop-NumberField__stepper-button",
        direction,
        isMobile && "mobile"
    );

    return (
        <RACButton
            className={stepperClasses}
            slot={direction}
        >
            <StepperIcon 
                className={styles["hop-NumberField__stepper-button__icon"]}
                size={{
                    base: "md",
                    xs: "sm"
                }}
            />
        </RACButton>
    );
};

function NumberField(props: NumberFieldProps, ref: ForwardedRef<HTMLDivElement>) {
    // we extract the inputRef props, since we want to manually merge it with the context props.
    const {
        inputRef: userProvidedInputRef = null,
        ...propsWithoutRef
    } = props;
    [props, ref] = useContextProps(propsWithoutRef, ref, NumberFieldContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);

    const {
        className,
        style: styleProp,
        size,
        prefix,
        placeholder,
        onChange: onChangeProp,
        children,
        defaultValue,
        value: valueProp,
        isFluid: isFluidProp,
        isDisabled,
        isInvalid,
        ...otherProps
    } = ownProps;

    const inputRef = useObjectRef(mergeRefs(userProvidedInputRef, props.inputRef !== undefined ? props.inputRef : null));
    const isFluid = useResponsiveValue(isFluidProp) ?? false;
    const scale = useScale();
    const isMobile = scale === "large";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalNumberFieldCssSelector,
        cssModule(
            styles,
            "hop-NumberField",
            isFluid && "fluid",
            isMobile && "mobile"
        ),
        stylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    const handleTextChanged = useCallback((value: number) => {
        onChangeProp?.(value);
    }, [onChangeProp]);

    const [value, onChange] = useControlledState<number>(valueProp, defaultValue || 0, handleTextChanged);

    const prefixMarkup = prefix ? (
        <SlotProvider values={[
            [TextContext, { size, className: styles["hop-NumberField__prefix"] }],
            [IconContext, { size, className: styles["hop-NumberField__prefix"] }]
        ]}
        >
            {isTextOnlyChildren(prefix) ? <Text>{prefix}</Text> : prefix}
        </SlotProvider>
    ) : null;

    const inputMarkup = (
        <ClearContainerSlots>
            <InputGroup
                isFluid={isFluid}
                size={size}
                className={styles["hop-NumberField__InputGroup"]}
                isDisabled={isDisabled}
                isInvalid={isInvalid}
                inputClassName={styles["hop-NumberField__input"]}
            >
                {prefixMarkup}
                <Input 
                    ref={inputRef} 
                    placeholder={placeholder}
                />
                <StepperButton direction="increment" />
                <StepperButton direction="decrement" />
            </InputGroup>
        </ClearContainerSlots>
    );

    const childrenMarkup = composeRenderProps(children, prev => {
        return (
            <>
                <SlotProvider values={[
                    [LabelContext, { className: styles["hop-NumberField__Label"] }],
                    [HelperMessageContext, { className: styles["hop-NumberField__HelperMessage"] }],
                    [ErrorMessageContext, { className: styles["hop-NumberField__ErrorMessage"] }]
                ]}
                >
                    {prev}
                </SlotProvider>
                {inputMarkup}
            </>
        );
    });

    return (
        <RACNumberField
            ref={ref}
            value={value}
            style={style}
            className={classNames}
            onChange={onChange}
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            {...otherProps}
        >
            {childrenMarkup}
        </RACNumberField>
    );
}

/**
 * A text field allows a user to enter a plain text value with a keyboard.
 *
 * [View Documentation](TODO)
 */
const _NumberField = forwardRef<HTMLDivElement, NumberFieldProps>(NumberField);
_NumberField.displayName = "NumberField";

export { _NumberField as NumberField };

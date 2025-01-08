import { AngleDownIcon, AngleUpIcon, IconContext } from "@hopper-ui/icons";
import {
    useResponsiveValue,
    useStyledSystem,
    type ResponsiveProp,
    type StyledComponentProps
} from "@hopper-ui/styled-system";
import { mergeRefs } from "@react-aria/utils";
import { useControlledState } from "@react-stately/utils";
import clsx from "clsx";
import { forwardRef, useCallback, type ForwardedRef, type MutableRefObject, type ReactNode } from "react";
import { useObjectRef } from "react-aria";
import {
    composeRenderProps,
    Input,
    Button as RACButton,
    NumberField as RACNumberField,
    useContextProps,
    type NumberFieldProps as RACNumberFieldProps
} from "react-aria-components";

import { ErrorMessage } from "../../ErrorMessage/index.ts";
import { useFormProps } from "../../Form/index.ts";
import { HelperMessage } from "../../HelperMessage/index.ts";
import { Label, TextContext } from "../../typography/index.ts";
import {
    ClearContainerSlots,
    composeClassnameRenderProps,
    cssModule,
    ensureTextWrapper,
    SlotProvider,
    useScale,
    type FieldProps
} from "../../utils/index.ts";

import { InputGroup, type InputGroupProps } from "./InputGroup.tsx";
import { NumberFieldContext } from "./NumberFieldContext.ts";

import styles from "./NumberField.module.css";

export const GlobalNumberFieldCssSelector = "hop-NumberField";

export interface NumberFieldProps extends Omit<StyledComponentProps<RACNumberFieldProps>, "children">, FieldProps {
    /**
     * An icon or text to display at the start of the input.
     */
    prefix?: ReactNode;

    /**
     * If `true`, the NumberField will take all available width.
     * @default false
     */
    isFluid?: ResponsiveProp<boolean>;

    /**
     * A ref for the HTML input element.
     */
    inputRef?: MutableRefObject<HTMLInputElement | null>;

    /**
     * The props for the InputGroup.
     */
    inputGroupProps?: InputGroupProps;
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
    props = useFormProps(props);
    const { stylingProps, ...ownProps } = useStyledSystem(props);

    const {
        className,
        style: styleProp,
        size,
        prefix,
        onChange: onChangeProp,
        defaultValue,
        value: valueProp,
        isFluid: isFluidProp,
        isDisabled,
        isInvalid,
        isRequired,
        necessityIndicator,
        inputGroupProps,
        label,
        description,
        errorMessage,
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
            {ensureTextWrapper(prefix)}
        </SlotProvider>
    ) : null;

    const { className: inputGroupClassName, inputClassName: inputGroupInputClassName, ...otherInputGroupProps } = inputGroupProps || {};
    const inputGroupClassNames = clsx(styles["hop-NumberField__InputGroup"], inputGroupClassName);
    const inputGroupInputClassNames = clsx(styles["hop-NumberField__input"], inputGroupInputClassName);

    const inputMarkup = (
        <ClearContainerSlots>
            <InputGroup
                isFluid
                size={size}
                className={inputGroupClassNames}
                isDisabled={isDisabled}
                isInvalid={isInvalid}
                inputClassName={inputGroupInputClassNames}
                inputType="number"
                {...otherInputGroupProps}
            >
                {prefixMarkup}
                <Input ref={inputRef} />
                <StepperButton direction="increment" />
                <StepperButton direction="decrement" />
            </InputGroup>
        </ClearContainerSlots>
    );

    const childrenMarkup = (
        <>
            {label && <Label className={styles["hop-NumberField__Label"]} isRequired={isRequired} necessityIndicator={necessityIndicator}>{label}</Label>}
            {inputMarkup}
            {description && <HelperMessage className={styles["hop-NumberField__HelperMessage"]}>{description}</HelperMessage>}
            <ErrorMessage className={styles["hop-NumberField__ErrorMessage"]}>{errorMessage}</ErrorMessage>
        </>
    );

    return (
        <RACNumberField
            ref={ref}
            value={value}
            style={style}
            className={classNames}
            onChange={onChange}
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            isRequired={isRequired}
            {...otherProps}
        >
            {childrenMarkup}
        </RACNumberField>
    );
}

/**
 * A number field allows a user to enter a number value with a keyboard or increment and decrement buttons.
 *
 * [View Documentation](TODO)
 */
const _NumberField = forwardRef<HTMLDivElement, NumberFieldProps>(NumberField);
_NumberField.displayName = "NumberField";

export { _NumberField as NumberField };

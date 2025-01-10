import { EyeHiddenIcon, EyeVisibleIcon } from "@hopper-ui/icons";
import {
    useResponsiveValue,
    useStyledSystem,
    type ResponsiveProp,
    type StyledComponentProps
} from "@hopper-ui/styled-system";
import { mergeRefs } from "@react-aria/utils";
import clsx from "clsx";
import { forwardRef, useState, type ForwardedRef, type MutableRefObject } from "react";
import { useObjectRef } from "react-aria";
import {
    composeRenderProps,
    Input,
    TextField as RACTextField,
    useContextProps,
    type InputProps,
    type TextFieldProps as RACTextFieldProps
} from "react-aria-components";

import { EmbeddedButton, type EmbeddedButtonProps } from "../../buttons/index.ts";
import { ErrorMessage } from "../../ErrorMessage/index.ts";
import { useFormProps } from "../../Form/index.ts";
import { HelperMessage } from "../../HelperMessage/index.ts";
import { useLocalizedString } from "../../i18n/index.ts";
import { Label } from "../../typography/index.ts";
import { ClearContainerSlots, composeClassnameRenderProps, cssModule, type FieldProps, type FieldSize } from "../../utils/index.ts";

import { InputGroup, type InputGroupProps } from "./InputGroup.tsx";
import { PasswordFieldContext } from "./PasswordFieldContext.ts";

import styles from "./PasswordField.module.css";

export const GlobalPasswordFieldCssSelector = "hop-PasswordField";

export interface PasswordFieldProps extends Omit<StyledComponentProps<Omit<RACTextFieldProps, "type">>, "children">, FieldProps {
    /**
     * The placeholder text when the PasswordField is empty.
     */
    placeholder?: string;

    /**
     * The size of the PasswordField.
     * @default "md"
     */
    size?: ResponsiveProp<FieldSize>;

    /**
     * If `true`, the PasswordField will take all available width.
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

    /**
     * The props for the Input.
     */
    inputProps?: InputProps;

    /**
     * The props for the EmbeddedButton.
     */
    embeddedButtonProps?: EmbeddedButtonProps;
}

function PasswordField(props: PasswordFieldProps, ref: ForwardedRef<HTMLDivElement>) {
    // we extract the inputRef props, since we want to manually merge it with the context props.
    const {
        inputRef: userProvidedInputRef = null,
        ...propsWithoutRef
    } = props;
    [props, ref] = useContextProps(propsWithoutRef, ref, PasswordFieldContext);
    props = useFormProps(props);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const [showPassword, setShowPassword] = useState(false);
    const stringFormatter = useLocalizedString();

    const {
        className,
        style: styleProp,
        size,
        placeholder,
        isFluid: isFluidProp,
        isDisabled,
        isInvalid,
        isRequired,
        necessityIndicator,
        inputGroupProps,
        inputProps,
        embeddedButtonProps,
        label,
        description,
        errorMessage,
        ...otherProps
    } = ownProps;

    const inputRef = useObjectRef(mergeRefs(userProvidedInputRef, props.inputRef !== undefined ? props.inputRef : null));
    const isFluid = useResponsiveValue(isFluidProp) ?? false;

    const classNames = composeClassnameRenderProps(
        className,
        GlobalPasswordFieldCssSelector,
        cssModule(
            styles,
            "hop-PasswordField",
            isFluid && "fluid"
        ),
        stylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    const { className: inputGroupClassName, ...otherInputGroupProps } = inputGroupProps ?? {};
    const inputGroupClassNames = clsx(styles["hop-PasswordField__InputGroup"], inputGroupClassName);

    const inputMarkup = (
        <ClearContainerSlots>
            <InputGroup
                isDisabled={isDisabled}
                isInvalid={isInvalid}
                isFluid
                size={size}
                className={inputGroupClassNames}
                {...otherInputGroupProps}
            >
                <Input ref={inputRef} placeholder={placeholder} type={showPassword ? "text" : "password"} {...inputProps} />
                <EmbeddedButton
                    isDisabled={isDisabled}
                    aria-label={stringFormatter.format("PasswordField.toggleVisibility")}
                    onPress={() => {
                        setShowPassword(x => !x);
                    }}
                    size="lg"
                    {...embeddedButtonProps}
                >
                    {showPassword ? <EyeVisibleIcon /> : <EyeHiddenIcon />}
                </EmbeddedButton>
            </InputGroup>
        </ClearContainerSlots>
    );

    const childrenMarkup = (
        <>
            {label && <Label className={styles["hop-PasswordField__Label"]} isRequired={isRequired} necessityIndicator={necessityIndicator}>{label}</Label>}
            {inputMarkup}
            {description && <HelperMessage className={styles["hop-PasswordField__HelperMessage"]}>{description}</HelperMessage>}
            <ErrorMessage className={styles["hop-PasswordField__ErrorMessage"]}>{errorMessage}</ErrorMessage>
        </>
    );

    return (
        <RACTextField
            ref={ref}
            style={style}
            className={classNames}
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            isRequired={isRequired}
            {...otherProps}
        >
            {childrenMarkup}
        </RACTextField>
    );
}

/**
 * A specialized text field which show / hide a password.
 *
 * [View Documentation](https://hopper.workleap.design/components/PasswordField)
 */
const _PasswordField = forwardRef<HTMLDivElement, PasswordFieldProps>(PasswordField);
_PasswordField.displayName = "PasswordField";

export { _PasswordField as PasswordField };

import { EyeHiddenIcon, EyeVisibleIcon } from "@hopper-ui/icons";
import {
    useResponsiveValue,
    useStyledSystem,
    type ResponsiveProp,
    type StyledComponentProps
} from "@hopper-ui/styled-system";
import { mergeRefs } from "@react-aria/utils";
import { forwardRef, useState, type ForwardedRef, type MutableRefObject } from "react";
import { useObjectRef } from "react-aria";
import {
    composeRenderProps,
    Input,
    useContextProps,
    type TextFieldProps as RACTextFieldProps,
    TextField as RACTextField
} from "react-aria-components";

import { EmbeddedButton } from "../../buttons/index.ts";
import { ErrorMessageContext } from "../../ErrorMessage/index.ts";
import { HelperMessageContext } from "../../HelperMessage/index.ts";
import { useLocalizedString } from "../../i18n/index.ts";
import { LabelContext } from "../../typography/index.ts";
import { ClearContainerSlots, composeClassnameRenderProps, cssModule, SlotProvider } from "../../utils/index.ts";

import { InputGroup } from "./InputGroup.tsx";
import { PasswordFieldContext } from "./PasswordFieldContext.ts";

import styles from "./PasswordField.module.css";

export const GlobalPasswordFieldCssSelector = "hop-PasswordField";

export interface PasswordFieldProps extends StyledComponentProps<Omit<RACTextFieldProps, "type">> {
    /**
     * The placeholder text when the PasswordField is empty.
     */
    placeholder?: string;

    /**
     * The size of the PasswordField.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;

    /**
     * If `true`, the PasswordField will take all available width.
     * @default false
     */
    isFluid?: ResponsiveProp<boolean>;

    /**
     * A ref for the HTML input element.
     */
    inputRef?: MutableRefObject<HTMLInputElement>;
}

function PasswordField(props: PasswordFieldProps, ref: ForwardedRef<HTMLDivElement>) {
    // we extract the inputRef props, since we want to manually merge it with the context props.
    const {
        inputRef: userProvidedInputRef = null,
        ...propsWithoutRef
    } = props;
    [props, ref] = useContextProps(propsWithoutRef, ref, PasswordFieldContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const [showPassword, setShowPassword] = useState(false);
    const stringFormatter = useLocalizedString();

    const {
        className,
        style: styleProp,
        size,
        placeholder,
        children,
        isFluid: isFluidProp,
        isDisabled,
        isInvalid,
        isRequired,
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

    const inputMarkup = (
        <ClearContainerSlots>
            <InputGroup
                isDisabled={isDisabled}
                isInvalid={isInvalid}
                isFluid
                size={size}
                className={styles["hop-PasswordField__InputGroup"]}
            >
                <Input ref={inputRef} placeholder={placeholder} type={showPassword ? "text" : "password"} />
                <EmbeddedButton
                    isDisabled={isDisabled}
                    aria-label={stringFormatter.format("PasswordField.toggleVisibility")}
                    onPress={() => {
                        setShowPassword(x => !x);
                    }}
                    size="lg"
                >
                    {showPassword ? <EyeVisibleIcon /> : <EyeHiddenIcon />}
                </EmbeddedButton>
            </InputGroup>
        </ClearContainerSlots>
    );

    const childrenMarkup = composeRenderProps(children, prev => {
        return (
            <>
                <SlotProvider values={[
                    [LabelContext, { className: styles["hop-PasswordField__Label"], isRequired }],
                    [HelperMessageContext, { className: styles["hop-PasswordField__HelperMessage"] }],
                    [ErrorMessageContext, { className: styles["hop-PasswordField__ErrorMessage"] }]
                ]}
                >
                    {prev}
                </SlotProvider>
                {inputMarkup}
            </>
        );
    });

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
 * [View Documentation](TODO)
 */
const _PasswordField = forwardRef<HTMLDivElement, PasswordFieldProps>(PasswordField);
_PasswordField.displayName = "PasswordField";

export { _PasswordField as PasswordField };

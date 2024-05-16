import { EyeHiddenIcon, EyeVisibleIcon } from "@hopper-ui/icons";
import { useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { forwardRef, useState, type ForwardedRef } from "react";
import { composeRenderProps, Input, useContextProps, type TextFieldProps as RACTextFieldProps, TextField as RACTextField } from "react-aria-components";

import { EmbeddedButton } from "../../buttons/index.ts";
import { ErrorMessageContext } from "../../errorMessage/index.ts";
import { HelperMessageContext } from "../../helperMessage/index.ts";
import { LabelContext } from "../../Label/index.ts";
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
}

function PasswordField(props:PasswordFieldProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, PasswordFieldContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const [showPassword, setShowPassword] = useState(false);

    const {
        className,
        style: styleProp,
        size,
        placeholder,
        children,
        ...otherProps
    } = ownProps;

    const classNames = composeClassnameRenderProps(
        className,
        GlobalPasswordFieldCssSelector,
        cssModule(
            styles,
            "hop-PasswordField"
        ),
        stylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    const showPasswordMarkup = showPassword ?
        <EmbeddedButton onPress={() => { setShowPassword(false);}}>
            <EyeVisibleIcon />
        </EmbeddedButton> :
        <EmbeddedButton onPress={() => { setShowPassword(true);}}>
            <EyeHiddenIcon />
        </EmbeddedButton>;

    const inputMarkup = (
        <ClearContainerSlots>
            <InputGroup size={size} className={styles["hop-PasswordField__InputGroup"]}>
                <Input placeholder={placeholder} type={showPassword ? "text" : "password"} />
                {showPasswordMarkup}
            </InputGroup>
        </ClearContainerSlots>
    );

    const childrenMarkup = composeRenderProps(children, prev => {
        return (
            <>
                <SlotProvider values={[
                    [LabelContext, { className: styles["hop-PasswordField__Label"] }],
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
        <RACTextField style={style} className={classNames}{...otherProps}>
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

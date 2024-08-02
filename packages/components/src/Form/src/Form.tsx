import {
    ButtonContext,
    PasswordFieldContext,
    SearchFieldContext,
    TextFieldContext,
    TextAreaContext,
    NumberFieldContext,
    RadioGroupContext,
    CheckboxContext,
    CheckboxFieldContext,
    CheckboxGroupContext
} from "@hopper-ui/components";
import {
    useResponsiveValue,
    useStyledSystem,
    type StyledComponentProps,
    type ResponsiveProp
} from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type ForwardedRef, type CSSProperties } from "react";
import {
    useContextProps,
    Form as RACForm,
    type FormProps as RACFormProps

} from "react-aria-components";

import { cssModule, SlotProvider } from "../../utils/index.ts";

import { FormContext } from "./FormContext.ts";

import styles from "./Form.module.css";

export const GlobalFormCssSelector = "hop-Form";

export interface FormProps extends StyledComponentProps<RACFormProps> {
    /**
     * Whether the form elements are disabled.
     */
    isDisabled?: boolean;

    /**
     * If `true`, the Form will take all available width.
     */
    isFluid?: ResponsiveProp<boolean>;

    /**
     * The size of the fields and buttons within the form.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;
}

function Form(props: FormProps, ref: ForwardedRef<HTMLFormElement>) {
    [props, ref] = useContextProps(props, ref, FormContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        style,
        isFluid,
        isDisabled,
        size: sizeProp,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = clsx(
        GlobalFormCssSelector,
        cssModule(
            styles,
            "hop-Form"
        ),
        stylingProps.className,
        className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    return (
        <SlotProvider values={[
            [TextFieldContext, {
                isDisabled,
                isFluid,
                size
            }],
            [PasswordFieldContext, {
                isDisabled,
                isFluid,
                size
            }],
            [SearchFieldContext, {
                isDisabled,
                isFluid,
                size
            }],
            [NumberFieldContext, {
                isDisabled,
                size,
                isFluid
            }],
            [TextAreaContext, {
                isDisabled,
                size,
                isFluid
            }],
            [RadioGroupContext, {
                isDisabled,
                size
            }],
            [CheckboxContext, {
                isDisabled,
                size
            }],
            [CheckboxFieldContext, {
                isDisabled,
                size
            }],
            [CheckboxGroupContext, {
                isDisabled,
                size
            }],
            [ButtonContext, { isDisabled, size }]
        ]}
        >
            <RACForm
                {...otherProps}
                ref={ref}
                className={classNames}
                style={mergedStyles}
            >
                {children}
            </RACForm>
        </SlotProvider>
    );
}

/**
 * Forms are commonly used to provide user interaction in web applications.
 *
 * [View Documentation](TODO)
 */
const _Form = forwardRef<HTMLFormElement, FormProps>(Form);
_Form.displayName = "Form";

export { _Form as Form };

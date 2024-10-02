import {
    ButtonContext,
    CheckboxContext,
    CheckboxFieldContext,
    CheckboxGroupContext,
    ComboBoxContext,
    LabelContext,
    NumberFieldContext,
    PasswordFieldContext,
    RadioGroupContext,
    SearchFieldContext,
    SelectFieldContext,
    TagGroupContext,
    TextAreaContext,
    TextFieldContext
} from "@hopper-ui/components";
import {
    useResponsiveValue,
    useStyledSystem,
    type ResponsiveProp,
    type StyledComponentProps
} from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type CSSProperties, type ForwardedRef } from "react";
import {
    Form as RACForm,
    useContextProps,
    type FormProps as RACFormProps
} from "react-aria-components";

import { cssModule, SlotProvider, type FieldSize, type NecessityIndicator } from "../../utils/index.ts";

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
     * Whether the required state should be shown as an asterisk or a label, which would display (Optional) on all non required field labels.
     */
    necessityIndicator?: NecessityIndicator;

    /**
     * The size of the fields and buttons within the form.
     * @default "md"
     */
    size?: ResponsiveProp<FieldSize>;
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
        necessityIndicator,
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
            [LabelContext, {
                necessityIndicator
            }],
            [TextFieldContext, {
                isDisabled,
                isFluid,
                necessityIndicator,
                size
            }],
            [PasswordFieldContext, {
                isDisabled,
                isFluid,
                necessityIndicator,
                size
            }],
            [SearchFieldContext, {
                isDisabled,
                isFluid,
                necessityIndicator,
                size
            }],
            [NumberFieldContext, {
                isDisabled,
                necessityIndicator,
                size,
                isFluid
            }],
            [TextAreaContext, {
                isDisabled,
                necessityIndicator,
                size,
                isFluid
            }],
            [RadioGroupContext, {
                isDisabled,
                necessityIndicator,
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
                necessityIndicator,
                size
            }],
            [ButtonContext, { isDisabled, size }]
        ]}
        >
            {/* Put these in a separate SlotProvider due to a typing error */}
            <SlotProvider values={[
                [SelectFieldContext, {
                    isDisabled,
                    isFluid,
                    necessityIndicator,
                    size
                }],
                [ComboBoxContext, {
                    isDisabled,
                    isFluid,
                    necessityIndicator,
                    size
                }],
                [TagGroupContext, {
                    necessityIndicator,
                    size
                }]
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

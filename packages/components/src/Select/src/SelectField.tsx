import { AngleDownIcon, AngleUpIcon, IconContext } from "@hopper-ui/icons";
import { useResponsiveValue, useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef, type NamedExoticComponent, type ReactNode } from "react";
import {
    Button,
    composeRenderProps,
    Select as RACSelect,
    useContextProps,
    type ButtonProps as RACButtonProps,
    type SelectProps as RACSelectProps,
    type SelectValueRenderProps
} from "react-aria-components";

import { ErrorMessageContext } from "../../ErrorMessage/index.ts";
import { HelperMessageContext } from "../../HelperMessage/index.ts";
import { ListBoxContext } from "../../ListBox/index.ts";
import { LabelContext, TextContext } from "../../typography/index.ts";
import { ClearContainerSlots, composeClassnameRenderProps, cssModule, EnsureTextWrapper, SlotProvider, type FieldSize, type NecessityIndicator } from "../../utils/index.ts";

import { SelectFieldContext } from "./SelectFieldContext.ts";
import { SelectValue } from "./SelectValue.tsx";

import styles from "./SelectField.module.css";

export const GlobalSelectFieldCssSelector = "hop-SelectField";

export type ValueRenderProps = SelectValueRenderProps<object> & { defaultChildren: ReactNode };
export type SelectFieldTriggerProps = StyledComponentProps<RACButtonProps>;

export interface SelectFieldProps<T extends object> extends StyledComponentProps<RACSelectProps<T>> {
    /**
     * If `true`, the select will take all available width.
     * @default false
     */
    isFluid?: ResponsiveProp<boolean>;
    /**
     * Whether the required state should be shown as an asterisk or a label, which would display (Optional) on all non required field labels.
     */
    necessityIndicator?: NecessityIndicator;
    /**
     * The placeholder text when the select is empty.
     */
    placeholder?: string;
    /**
     * An icon or text to display at the start of the select trigger.
     */
    prefix?: ReactNode;
    /**
     * A function to render the value of the select. It will render the selected item's text by default.
     */
    renderValue?: (valueRenderProps: ValueRenderProps) => ReactNode;
    /**
     * The size of the select.
     * @default "sm"
     */
    size?: ResponsiveProp<FieldSize>;
    /**
     * The props for the select's trigger.
     */
    triggerProps?: SelectFieldTriggerProps;
}

function SelectField<T extends object>(props: SelectFieldProps<T>, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, SelectFieldContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children: childrenProp,
        isFluid: isFluidProp,
        isInvalid,
        isRequired,
        necessityIndicator,
        prefix,
        renderValue,
        size: sizeProp,
        style: styleProp,
        triggerProps,
        ...otherProps
    } = ownProps;
    const { stylingProps: triggerStylingProps, ...triggerOwnProps } = useStyledSystem(triggerProps ?? {});
    const {
        className: triggerClassName,
        style: triggerStyleProp,
        ...otherTriggerProps
    } = triggerOwnProps;

    const size = useResponsiveValue(sizeProp) ?? "sm";
    const isFluid = useResponsiveValue(isFluidProp) ?? false;

    const classNames = composeClassnameRenderProps(
        className,
        GlobalSelectFieldCssSelector,
        cssModule(
            styles,
            "hop-SelectField",
            isFluid && "fluid",
            size
        ),
        stylingProps.className
    );

    const buttonClassNames = composeClassnameRenderProps(
        triggerClassName,
        cssModule(
            styles,
            "hop-SelectField__button",
            size
        ),
        triggerStylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    const triggerStyle = composeRenderProps(triggerStyleProp, prev => {
        return {
            ...triggerStylingProps.style,
            ...prev
        };
    });

    const children = composeRenderProps(childrenProp, prev => {
        return prev;
    });

    const prefixMarkup = prefix ? (
        <SlotProvider values={[
            [TextContext, { size, className: styles["hop-SelectField__prefix"] }],
            [IconContext, { size, className: styles["hop-SelectField__prefix"] }]
        ]}
        >
            <ClearContainerSlots>
                <EnsureTextWrapper>{prefix}</EnsureTextWrapper>
            </ClearContainerSlots>
        </SlotProvider>
    ) : null;

    return (
        <RACSelect
            {...otherProps}
            ref={ref}
            className={classNames}
            style={style}
            isInvalid={isInvalid}
            isRequired={isRequired}
        >
            {selectRenderProps => {
                const { isOpen } = selectRenderProps;
                const ButtonIcon = isOpen ? AngleUpIcon : AngleDownIcon;

                return (
                    <>
                        <SlotProvider values={[
                            [LabelContext, {
                                className: styles["hop-SelectField__label"],
                                isRequired,
                                necessityIndicator
                            }],
                            [HelperMessageContext, {
                                className: styles["hop-SelectField__helper-message"]
                            }],
                            [ErrorMessageContext, {
                                className: styles["hop-SelectField__error-message"]
                            }],
                            [TextContext, {
                                size
                            }],
                            [ListBoxContext, {
                                size,
                                isInvalid
                            }]
                            
                        ]}
                        >
                            {children(selectRenderProps)}
                        </SlotProvider>
                        <Button className={buttonClassNames} style={triggerStyle} data-invalid={isInvalid || undefined} {...otherTriggerProps}>
                            {prefixMarkup}
                            <SelectValue size={size}>
                                {valueRenderProps => {
                                    return renderValue?.(valueRenderProps);
                                }}
                            </SelectValue>
                            <ButtonIcon size="sm" className={styles["hop-SelectField__button-icon"]} />
                        </Button>
                    </>
                );
            }}
        </RACSelect>
    );
}

/**
 * Select field components enable users to choose a single option from a collapsible list, optimizing space efficiency.
 *
 * [View Documentation](TODO)
 */
const _SelectField = forwardRef(SelectField) as <T extends object>(
    props: SelectFieldProps<T> & { ref?: ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SelectField>;
(_SelectField as NamedExoticComponent).displayName = "SelectField";

export { _SelectField as SelectField };

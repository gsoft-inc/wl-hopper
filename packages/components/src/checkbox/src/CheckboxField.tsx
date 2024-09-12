import { CheckmarkIcon, IconContext, MinusIcon } from "@hopper-ui/icons";
import {
    useResponsiveValue,
    useStyledSystem,
    type ColorValue,
    type ResponsiveProp,
    type StyledComponentProps
} from "@hopper-ui/styled-system";
import { filterDOMProps, mergeProps, mergeRefs, useObjectRef } from "@react-aria/utils";
import { forwardRef, useContext, type ForwardedRef } from "react";
import { useCheckbox, useCheckboxGroupItem, useField, useFocusRing, useHover, VisuallyHidden } from "react-aria";
import {
    CheckboxGroupStateContext,
    composeRenderProps,
    FormContext,
    useContextProps,
    useSlottedContext,
    type CheckboxProps as RACCheckboxProps
} from "react-aria-components";
import { useToggleState } from "react-stately";

import { IconListContext } from "../../IconList/index.ts";
import { LabelContext } from "../../typography/index.ts";
import { Text, TextContext, type TextProps } from "../../typography/Text/index.ts";
import { composeClassnameRenderProps, cssModule, isTextOnlyChildren, SlotProvider, useRenderProps, useSlot, type SizeAdapter } from "../../utils/index.ts";

import { CheckboxFieldContext } from "./CheckboxFieldContext.ts";

import styles from "./CheckboxField.module.css";

export const GlobalCheckboxFieldCssSelector = "hop-CheckboxField";

const CheckboxToDescriptionSizeAdapter: SizeAdapter<CheckboxFieldProps["size"], TextProps["size"]> = {
    sm: "xs",
    md: "sm"
};

export interface CheckboxFieldProps extends StyledComponentProps<RACCheckboxProps> {
    /**
     * A checkbox field can vary in size.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;
}

function CheckboxField(props: CheckboxFieldProps, ref: ForwardedRef<HTMLDivElement>) {
    const {
        inputRef: userProvidedInputRef = null,
        ...propsWithoutRef
    } = props;
    [props, ref] = useContextProps(propsWithoutRef, ref, CheckboxFieldContext);
    
    const { validationBehavior: formValidationBehavior } = useSlottedContext(FormContext) || {};
    const validationBehavior = props.validationBehavior ?? formValidationBehavior ?? "native";
    const groupState = useContext(CheckboxGroupStateContext);
    const inputRef = useObjectRef(mergeRefs(userProvidedInputRef, props.inputRef !== undefined ? props.inputRef : null));
    const [labelRef, label] = useSlot();

    const checkboxGroupItemProps = {
        ...props,
        value: props.value ?? "",
        children: typeof props.children === "function" ? true : props.children
    };

    const checkboxProps = {
        ...props,
        children: typeof props.children === "function" ? true : props.children,
        validationBehavior
    };
    const { labelProps, inputProps, isSelected, isDisabled, isReadOnly, isPressed, isInvalid } = groupState
    // eslint-disable-next-line react-hooks/rules-of-hooks
        ? useCheckboxGroupItem(checkboxGroupItemProps, groupState, inputRef)
    // eslint-disable-next-line react-hooks/rules-of-hooks
        : useCheckbox(checkboxProps, useToggleState(props), inputRef);

    const { labelProps: fieldLabelProps, fieldProps: fieldInputProps, descriptionProps } = useField({
        ...props,
        label
    });
          
    const { isFocused, isFocusVisible, focusProps } = useFocusRing();
    const isInteractionDisabled = isDisabled || isReadOnly;
        
    const { hoverProps, isHovered } = useHover({
        ...props,
        isDisabled: isInteractionDisabled
    });
    
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children: childrenProp,
        size: sizeProp = "md",
        style: styleProp,
        slot,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalCheckboxFieldCssSelector,
        cssModule(
            styles,
            "hop-CheckboxField",
            size
        ),
        stylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    const children = composeRenderProps(childrenProp, prev => {
        if (prev && isTextOnlyChildren(prev)) {
            return <Text>{prev}</Text>;
        }

        return prev;
    });

    const renderProps = useRenderProps({
        ...props,
        className: classNames,
        style,
        children,
        values: {
            isSelected,
            isIndeterminate: props.isIndeterminate || false,
            isPressed,
            isHovered,
            isFocused,
            isFocusVisible,
            isDisabled,
            isReadOnly,
            isInvalid,
            isRequired: props.isRequired || false
        }
    });

    const DOMProps = filterDOMProps(otherProps);
    delete DOMProps.id;

    const checkboxIconClassName = styles["hop-CheckboxField__check"];
    const icon = otherProps.isIndeterminate ?
        <MinusIcon size="sm" className={checkboxIconClassName} /> :
        <CheckmarkIcon size="sm" className={checkboxIconClassName} />;

    return (
        <div
            {...mergeProps(DOMProps, hoverProps, renderProps)}
            ref={ref}
            slot={slot ?? undefined}
            data-selected={isSelected || undefined}
            data-indeterminate={props.isIndeterminate || undefined}
            data-pressed={isPressed || undefined}
            data-hovered={isHovered || undefined}
            data-focused={isFocused || undefined}
            data-focus-visible={isFocusVisible || undefined}
            data-disabled={isDisabled || undefined}
            data-readonly={isReadOnly || undefined}
            data-invalid={isInvalid || undefined}
            data-required={props.isRequired || undefined}
        >
            <VisuallyHidden elementType="span">
                <input {...mergeProps(inputProps, fieldInputProps, focusProps)} ref={inputRef} />
            </VisuallyHidden>
            <div className={styles["hop-CheckboxField__box"]}>{icon}</div>
                
            <SlotProvider
                values={[
                    [TextContext, {
                        slots: {
                            description: {
                                ...descriptionProps,
                                className: styles["hop-CheckboxField__description"],
                                size: CheckboxToDescriptionSizeAdapter[size]
                            }
                        }
                    }],
                    [LabelContext, {
                        ...labelProps,
                        ...fieldLabelProps,
                        className: styles["hop-CheckboxField__label"],
                        color: labelProps.color as ResponsiveProp<ColorValue> | undefined,
                        ref: labelRef
                    }],
                    [IconListContext, {
                        className: styles["hop-CheckboxField__icon-list"],
                        size: size
                    }],
                    [IconContext, {
                        className: styles["hop-CheckboxField__icon"],
                        size: size
                    }]
                ]}
            >
                {renderProps.children}
            </SlotProvider>
        </div>
    );
}

/**
 * The checkbox field component indicates the selection state of an option. It displays either one of three states: checked, unchecked, or indeterminate.
 *
 * [View Documentation](TODO)
 */
const _CheckboxField = forwardRef<HTMLDivElement, CheckboxFieldProps>(CheckboxField);
_CheckboxField.displayName = "CheckboxField";

export { _CheckboxField as CheckboxField };

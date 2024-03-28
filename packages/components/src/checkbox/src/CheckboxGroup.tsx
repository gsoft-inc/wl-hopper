import { forwardRef, type ForwardedRef } from "react";
import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { CheckboxGroupContext } from "./CheckboxGroupContext.ts";
import { useContextProps, CheckboxGroup as RACCheckboxGroup, type CheckboxGroupProps as RACCheckboxGroupProps, composeRenderProps } from "react-aria-components";
import { cssModule } from "../../utils/src/cssModule.ts";
import { composeClassnameRenderProps, SlotProvider } from "../../utils/index.ts";
import { LabelContext } from "../../Label/index.ts";
import { CheckboxContext, CheckboxFieldContext } from "../../checkbox/index.ts";
import { HelperMessageContext } from "../../helperMessage/index.ts";
import { ErrorMessageContext } from "../../errorMessage/index.ts";

import styles from "./CheckboxGroup.module.css";

export const GlobalCheckboxGroupCssSelector = "hop-CheckboxGroup";

// Won't be needed in next react-aria-components release: https://github.com/adobe/react-spectrum/pull/5850
const DefaultCheckboxSlot = "checkboxGroup";

export interface CheckboxGroupProps extends StyledComponentProps<RACCheckboxGroupProps> {
    /**
     * A checkbox can be displayed horizontally or vertically.
     */
    orientation?: ResponsiveProp<"horizontal" | "vertical">;
    /**
     * A checkbox can vary in size.
     */
    size?: ResponsiveProp<"sm" | "md">;
}

function CheckboxGroup(props: CheckboxGroupProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultCheckboxSlot }, ref, CheckboxGroupContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        isInvalid,
        orientation: orientationProp = "vertical",
        size: sizeProp = "md",
        style: styleProp,
        ...otherProps
    } = ownProps;

    
    const orientation = useResponsiveValue(orientationProp) ?? "vertical";
    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalCheckboxGroupCssSelector,
        cssModule(
            styles,
            "hop-CheckboxGroup",
            size,
            orientation
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
                    className: styles["hop-CheckboxGroup__label"],
                    size: size
                }],
                [CheckboxContext, {
                    className: styles["hop-CheckboxGroup__checkbox"],
                    size: size
                }],
                [CheckboxFieldContext, {
                    className: styles["hop-CheckboxGroup__checkbox-field"],
                    size: size
                }],
                [ErrorMessageContext, {
                    className: styles["hop-CheckboxGroup__error-message"]
                }],
                [HelperMessageContext, {
                    className: styles["hop-CheckboxGroup__helper-message"]
                }]
            ]}
        >
            <RACCheckboxGroup
                ref={ref}
                className={classNames}
                style={style}
                isInvalid={isInvalid}
                {...otherProps}
            >
                {children}
            </RACCheckboxGroup>
        </SlotProvider>
    );
}

/**
 * The Checkbox component indicates the selection state of an option. It displays either one of three states: checked, unchecked, or indeterminate.
 *
 * [View Documentation](TODO)
 */
const _CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(CheckboxGroup);
_CheckboxGroup.displayName = "CheckboxGroup";

export { _CheckboxGroup as CheckboxGroup };

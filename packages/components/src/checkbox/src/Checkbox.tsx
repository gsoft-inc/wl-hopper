import { forwardRef, type ForwardedRef } from "react";
import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { CheckboxContext } from "./CheckboxContext.ts";
import { useContextProps, Checkbox as RACCheckbox, type CheckboxProps as RACCheckboxProps, composeRenderProps, TextContext as RACTextContext } from "react-aria-components";
import { cssModule } from "../../utils/src/cssModule.ts";
import { composeClassnameRenderProps, SlotProvider } from "../../utils/index.ts";
import { Text, TextContext } from "../../Text/index.ts";
import { isTextOnlyChildren } from "../../utils/src/isTextOnlyChildren.ts";
import { IconContext, CheckmarkIcon, MinusIcon } from "@hopper-ui/icons";
import { IconListContext } from "../../IconList/index.ts";

import styles from "./Checkbox.module.css";

export const GlobalCheckboxCssSelector = "hop-Checkbox";

// Won't be needed in next react-aria-components release: https://github.com/adobe/react-spectrum/pull/5850
const DefaultCheckboxSlot = "checkbox";

export interface CheckboxProps extends StyledComponentProps<RACCheckboxProps> {
    /**
     * A checkbox can vary in size.
     */
    size?: ResponsiveProp<"sm" | "md">;
}

function Checkbox(props:CheckboxProps, ref: ForwardedRef<HTMLLabelElement>) {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultCheckboxSlot }, ref, CheckboxContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children: childrenProp,
        size: sizeProp = "md",
        style: styleProp,
        ...otherProps
    } = ownProps;

    
    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalCheckboxCssSelector,
        cssModule(
            styles,
            "hop-Checkbox",
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
        if (isTextOnlyChildren(prev)) {
            return <Text>{prev}</Text>;
        }

        return prev;
    });

    return (
        
        <RACCheckbox
            ref={ref}
            className={classNames}
            style={style}
            {...otherProps}
        >
            {checkboxProps => {
                const checkboxIconClassName = styles["hop-Checkbox__check"];
                const icon = checkboxProps.isIndeterminate ? 
                    <MinusIcon size="sm" className={checkboxIconClassName} /> : 
                    <CheckmarkIcon size="sm" className={checkboxIconClassName} />;

                return (
                    <>
                        <div className={styles["hop-Checkbox__box"]}>{icon}</div>
                        <SlotProvider
                            values={[
                                [TextContext, {
                                    className: styles["hop-Checkbox__text"],
                                    size: size
                                }],
                                [RACTextContext, {
                                    slots: undefined
                                }],
                                [IconListContext, {
                                    className: styles["hop-Checkbox__icon-list"],
                                    size: size
                                }],
                                [IconContext, {
                                    className: styles["hop-Checkbox__icon"],
                                    size: size
                                }]
                            ]}
                        >
                            {children(checkboxProps)}
                        </SlotProvider>
                    </>
                );
            }}
        </RACCheckbox>
    );
}

/**
 * The Checkbox component indicates the selection state of an option. It displays either one of three states: checked, unchecked, or indeterminate.
 *
 * [View Documentation](TODO)
 */
const _Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(Checkbox);
_Checkbox.displayName = "Checkbox";

export { _Checkbox as Checkbox };

import { IconContext, CheckmarkIcon, MinusIcon } from "@hopper-ui/icons";
import {
    type StyledComponentProps,
    useStyledSystem,
    type ResponsiveProp,
    useResponsiveValue
} from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import {
    useContextProps,
    Checkbox as RACCheckbox,
    type CheckboxProps as RACCheckboxProps,
    composeRenderProps
} from "react-aria-components";

import { IconListContext } from "../../IconList/index.ts";
import { Text, TextContext } from "../../typography/Text/index.ts";
import {
    composeClassnameRenderProps,
    SlotProvider,
    cssModule,
    isTextOnlyChildren,
    ClearContainerSlots,
    type InteractionProps
} from "../../utils/index.ts";

import { CheckboxContext } from "./CheckboxContext.ts";

import styles from "./Checkbox.module.css";

export const GlobalCheckboxCssSelector = "hop-Checkbox";

export interface CheckboxProps extends StyledComponentProps<RACCheckboxProps>, InteractionProps {
    /**
     * A checkbox can vary in size.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;
}

function Checkbox(props: CheckboxProps, ref: ForwardedRef<HTMLLabelElement>) {
    [props, ref] = useContextProps(props, ref, CheckboxContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children: childrenProp,
        size: sizeProp = "md",
        style: styleProp,
        isPressed,
        isHovered,
        isFocused,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalCheckboxCssSelector,
        cssModule(
            styles,
            "hop-Checkbox",
            size,
            isPressed && "pressed",
            isHovered && "hovered",
            isFocused && "focused"
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
                        <ClearContainerSlots>
                            <SlotProvider
                                values={[
                                    [TextContext, {
                                        className: styles["hop-Checkbox__text"],
                                        size: size
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
                        </ClearContainerSlots>
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

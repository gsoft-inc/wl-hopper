import { IconContext } from "@hopper-ui/icons";
import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import { useContextProps, Switch as RACSwitch, type SwitchProps as RACSwitchProps, composeRenderProps } from "react-aria-components";

import { IconListContext } from "../../IconList/index.ts";
import { Text, TextContext } from "../../Text/index.ts";
import { composeClassnameRenderProps, SlotProvider, cssModule, isTextOnlyChildren, ClearContainerSlots } from "../../utils/index.ts";

import { SwitchContext } from "./SwitchContext.ts";

import styles from "./Switch.module.css";

export const GlobalSwitchCssSelector = "hop-Switch";

// Won't be needed in next react-aria-components release: https://github.com/adobe/react-spectrum/pull/5850
const DefaultSwitchSlot = "switch";

export interface SwitchProps extends StyledComponentProps<RACSwitchProps> {
    /**
     * A Switch can vary in size.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;
}

function Switch(props:SwitchProps, ref: ForwardedRef<HTMLLabelElement>) {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultSwitchSlot }, ref, SwitchContext);
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
        GlobalSwitchCssSelector,
        cssModule(
            styles,
            "hop-Switch",
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

    return (
        <RACSwitch
            ref={ref}
            className={classNames}
            style={style}
            {...otherProps}
        >
            {switchProps => {
                return (
                    <>
                        <div className={styles["hop-Switch__indicator"]} />
                        <ClearContainerSlots>
                            <SlotProvider
                                values={[
                                    [TextContext, {
                                        className: styles["hop-Switch__text"],
                                        size: size
                                    }],
                                    [IconListContext, {
                                        className: styles["hop-Switch__icon-list"],
                                        size: size
                                    }],
                                    [IconContext, {
                                        className: styles["hop-Switch__icon"],
                                        size: size
                                    }]
                                ]}
                            >
                                {children(switchProps)}
                            </SlotProvider>
                        </ClearContainerSlots>
                    </>
                );
            }}
        </RACSwitch>
    );
}

/**
 * A switch is used to quickly switch between two possible states. They are commonly used for “on/off” switches.
 *
 * [View Documentation](TODO)
 */
const _Switch = forwardRef<HTMLLabelElement, SwitchProps>(Switch);
_Switch.displayName = "Switch";

export { _Switch as Switch };

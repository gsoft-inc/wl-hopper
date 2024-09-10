import { IconContext, BulletIcon } from "@hopper-ui/icons";
import {
    useStyledSystem,
    useResponsiveValue
} from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import { mergeProps } from "react-aria";
import {
    composeRenderProps,
    useContextProps
} from "react-aria-components";

import { IconListContext } from "../../IconList/index.ts";
import { Text, TextContext } from "../../typography/Text/index.ts";
import {
    SlotProvider,
    cssModule,
    isTextOnlyChildren,
    ClearContainerSlots,
    type InteractionProps,
    useRenderProps,
    composeClassnameRenderProps
} from "../../utils/index.ts";

import type { RadioProps } from "./Radio.tsx";
import { RadioContext } from "./RadioContext.ts";

import styles from "./DecorativeRadio.module.css";

export const GlobalDecorativeRadioCssSelector = "hop-DecorativeRadio";

export interface DecorativeRadioProps extends RadioProps, InteractionProps {}

function DecorativeRadio(props: DecorativeRadioProps, ref: ForwardedRef<HTMLElement>) {
    [props, ref] = useContextProps(props, ref as ForwardedRef<HTMLLabelElement>, RadioContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children: childrenProp,
        size: sizeProp = "md",
        slot,
        style: styleProp,
        isSelected,
        isPressed,
        isHovered,
        isFocused,
        isFocusVisible,
        isDisabled,
        isReadOnly,
        isInvalid,
        isRequired,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const children = composeRenderProps(childrenProp, prev => {
        if (prev && isTextOnlyChildren(prev)) {
            return <Text>{prev}</Text>;
        }

        return prev;
    });
    
    const classNames = composeClassnameRenderProps(
        className,
        GlobalDecorativeRadioCssSelector,
        cssModule(
            styles,
            "hop-DecorativeRadio",
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

    const renderProps = useRenderProps({
        ...props,
        className: classNames,
        style,
        children: children,
        values: {
            isSelected: isSelected || false,
            isPressed: isPressed || false,
            isHovered: isHovered || false,
            isFocused: isFocused || false,
            isFocusVisible: isFocusVisible || false,
            isDisabled: isDisabled || false,
            isReadOnly: isReadOnly || false,
            isInvalid: isInvalid || false,
            isRequired: isRequired || false
        }
    });
    
    const radioIconClassName = styles["hop-DecorativeRadio__bullet"];

    return (
        <div
            {...mergeProps(otherProps, renderProps)}
            ref={ref as ForwardedRef<HTMLDivElement>}
            slot={slot || undefined}
            data-selected={isSelected || undefined}
            data-pressed={isPressed || undefined}
            data-hovered={isHovered || undefined}
            data-focused={isFocused || undefined}
            data-focus-visible={isFocusVisible || undefined}
            data-disabled={isDisabled || undefined}
            data-readonly={isReadOnly || undefined}
            data-invalid={isInvalid || undefined}
            data-required={isRequired || undefined}
        >
            <div className={styles["hop-DecorativeRadio__box"]}>
                <BulletIcon size={size} className={radioIconClassName} />
            </div>
            <ClearContainerSlots>
                <SlotProvider
                    values={[
                        [TextContext, {
                            className: styles["hop-DecorativeRadio__text"],
                            size: size
                        }],
                        [IconListContext, {
                            className: styles["hop-DecorativeRadio__icon-list"],
                            size: size
                        }],
                        [IconContext, {
                            className: styles["hop-DecorativeRadio__icon"],
                            size: size
                        }]
                    ]}
                >
                    {renderProps.children}
                </SlotProvider>
            </ClearContainerSlots>
        </div>
    );
}

/**
 * The DecorativeRadio component indicates the selection state of an option without using a native radio input. To be used for visual purposes only.
 *
 * [View Documentation](TODO)
 */
const _DecorativeRadio = forwardRef<HTMLElement, DecorativeRadioProps>(DecorativeRadio);
_DecorativeRadio.displayName = "DecorativeRadio";

export { _DecorativeRadio as DecorativeRadio };

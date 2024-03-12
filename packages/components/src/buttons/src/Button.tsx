import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { type ForwardedRef, forwardRef } from "react";
import { Button as RACButton, useContextProps, type ButtonProps as RACButtonProps, type PressEvent, composeRenderProps } from "react-aria-components";
import styles from "./Button.module.css";
import { useId } from "react-aria";
import { cssModule } from "../../utils/src/css-module.ts";
import { Text } from "../../Text/src/Text.tsx";
import { composeClassnameRenderProps, SlotProvider } from "../../utils/index.ts";
import { IconContext } from "@hopper-ui/icons";
import { ButtonContext } from "./ButtonContext.ts";
import { TextContext } from "../../Text/index.ts";
import { IconListContext } from "../../IconList/index.ts";
import { useLocalizedString } from "../../intl/index.ts";
import { Spinner } from "../../Spinner/index.ts";
import { isTextOnlyChildren } from "../../utils/src/is-text-only-children.ts";

export const GlobalButtonCssSelector = "hop-Button";

// Won't be needed in next react-aria-components release: https://github.com/adobe/react-spectrum/pull/5850
const DefaultButtonSlot = "button";

export interface ButtonProps extends StyledComponentProps<RACButtonProps> {
    /**
     * The visual style of the button.
     */
    variant?: "primary" | "secondary" | "tertiary" | "negative" | "upsell";

    /**
     * A button can vary in size.
     */
    size?: ResponsiveProp<"sm" | "md">;

    /**
     * Whether or not the button take up the width of its container.
     */
    fluid?: ResponsiveProp<boolean>;

    // A button can show a loading indicator.
    isLoading?:boolean;

    /**
     * This prop will be called when the button is clicked.
     *
     * The onClick prop is an alias for onPress and should not be used in conjunction with it. Use one or the other.
     * onPress is the recommended prop to use for handling button clicks.
     */
    onClick?: ((e: PressEvent) => void);
}

const Button = (props:ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultButtonSlot }, ref, ButtonContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);

    const stringFormatter = useLocalizedString();

    const {
        className,
        children: childrenProp,
        size: sizeProp = "md",
        fluid: fluidProp,
        variant = "primary",
        onClick,
        onPress: onPressProp,
        isDisabled,
        isLoading,
        style: styleProp,
        ...otherProps
    } = ownProps;

    if (onPressProp && onClick) {
        console.warn("[Hopper] The onClick prop is an alias for onPress and should not be used in conjunction with it. Use one or the other.");
    }

    const onPress = onPressProp ?? onClick;
    const isInteractionDisabled = isDisabled || isLoading;

    const size = useResponsiveValue(sizeProp);
    const fluid = useResponsiveValue(fluidProp);

    const classNames = composeClassnameRenderProps(
        className,
        GlobalButtonCssSelector,
        cssModule(
            styles,
            "hop-button",
            variant,
            size,
            fluid && "fluid",
            isLoading && "loading"
        ),
        stylingProps.className
    );

    const children = composeRenderProps(childrenProp, prev => {
        if (isTextOnlyChildren(prev)) {
            return <Text>{prev}</Text>;
        }

        return prev;
    });

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    const spinnerId = useId();

    const hasAriaLabel = !!props["aria-label"] || !!props["aria-labelledby"];
    const isLoadingAriaLiveLabel = `${hasAriaLabel ? props["aria-label"] : ""} ${stringFormatter.format("button.pending")}`.trim();

    return (
        <SlotProvider
            values={[
                [IconListContext, {
                    slots: {
                        icon: {
                            className: styles["hop-button__icon-list"]
                        },
                        "end-icon": {
                            className: styles["hop-button__end-icon-list"]
                        }
                    }
                }],
                [IconContext, {
                    slots: {
                        icon: {
                            className: styles["hop-button__icon"],
                            size: "md"
                        },
                        "end-icon": {
                            className: styles["hop-button__end-icon"],
                            size: "md"
                        }
                    }
                }],
                [TextContext, {
                    slots: {
                        text: {
                            className: styles["hop-button__text"],
                            size: size
                        }
                    }
                }]
            ]}
        >
            <RACButton
                ref={ref}
                className={classNames}
                style={style}
                data-loading={isLoading}
                onPress={onPress}
                isDisabled={isInteractionDisabled}
                {...otherProps}
            >
                {buttonProps => {
                    return (
                        <>
                            {children(buttonProps)}
                            {isLoading && (
                                <Spinner
                                    id={spinnerId}
                                    size="lg"
                                    aria-label={isLoadingAriaLiveLabel}
                                    className={styles["hop-button__Spinner"]}
                                />
                            )}
                        </>
                    );
                }}
            </RACButton>
        </SlotProvider>
    );
};

/**
 * Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it.
 *
 * [View Documentation](TODO)
 */
const _Button = forwardRef<HTMLButtonElement, ButtonProps>(Button);
_Button.displayName = "Button";

export { _Button as Button };

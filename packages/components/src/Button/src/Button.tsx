import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { type ForwardedRef, forwardRef } from "react";
import { Button as RACButton, useContextProps, type ButtonProps as RACButtonProps, type PressEvent } from "react-aria-components";
import styles from "./Button.module.css";
import { mergeProps } from "@react-aria/utils";
import { cssModule } from "../../utils/src/css-module.ts";
import { Text } from "../../Text/src/Text.tsx";
import { SlotProvider, composeClassnameRenderProps } from "../../utils/src/index.ts";
import { IconContext } from "@hopper-ui/icons";
import { ButtonContext } from "./ButtonContext.ts";
import { TextContext } from "../../Text/src/index.ts";

// TODO: create some kind of meta object with global css selectors, default slot and context?
const GlobalButtonCssSelector = "hop-Button-component";
const DefaultSlot = "button";

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

    // TODO: implement this
    isLoading?:boolean;

    /**
     * TODO: sugar synthax for the onPress event
     */
    onClick?: ((e: PressEvent) => void);
}

const Button = (props:ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    // eslint-disable-next-line no-param-reassign, react/destructuring-assignment
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultSlot }, ref, ButtonContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        size: sizeProp = "md",
        fluid: fluidProp,
        variant = "primary",
        onClick,
        onPress: onPressProp,
        isDisabled,
        isLoading,
        ...otherProps
    } = ownProps;

    if (onPressProp && onClick) {
        console.warn("[Hopper] The onClick prop is an alias for onPress and should not be used in conjunction with it. Use one or the other.");
    }

    const onPress = onPressProp ?? onClick;
    const isInteractionDisabled = isDisabled || isLoading;

    // TODO: utilities for resolving multiple responsive values?
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

    const content = typeof children === "string" ? <Text>{children}</Text> : children;
    // TODO: add loader component
    const loader = <Text>LOADING...</Text>;

    return (
        <SlotProvider
            values={[
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
                {...mergeProps(
                    {
                        ...stylingProps, // TODO: mergeProps doesn't merge style for some reasons
                        onPress,
                        isDisabled: isInteractionDisabled
                    },
                    otherProps
                )}
                ref={ref}
                className={classNames}
                data-loading={isLoading}
            >
                {isLoading ? loader : content}
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



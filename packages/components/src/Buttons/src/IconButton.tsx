import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { type ForwardedRef, forwardRef } from "react";
import { Button as RACButton, useContextProps, type ButtonProps as RACButtonProps, type PressEvent, composeRenderProps } from "react-aria-components";
import styles from "./IconButton.module.css";
import { useId } from "@react-aria/utils";
import { cssModule } from "../../utils/src/css-module.ts";
import { SlotProvider, composeClassnameRenderProps } from "../../utils/index.ts";
import { IconContext } from "@hopper-ui/icons";
import { IconButtonContext } from "./IconButtonContext.ts";
import { useLocalizedString } from "../../intl/index.ts";
import { Spinner } from "../../Spinner/index.ts";

// TODO: create some kind of meta object with global css selectors, default slot and context?
const GlobalIconButtonCssSelector = "hop-IconButton";
const DefaultButtonSlot = "button";

export interface IconButtonProps extends StyledComponentProps<RACButtonProps> {
    /**
     * The visual style of the button.
     */
    variant?: "primary" | "secondary" | "tertiary";

    /**
     * A button can vary in size.
     */
    size?: ResponsiveProp<"sm" | "md">;

    /**
     * A button can show a loading indicator.
     */
    isLoading?:boolean;

    /**
     * This prop will be called when the button is clicked.
     *
     * The onClick prop is an alias for onPress and should not be used in conjunction with it. Use one or the other.
     * onPress is the recommended prop to use for handling button clicks.
     */
    onClick?: ((e: PressEvent) => void);
}

const IconButton = (props:IconButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultButtonSlot }, ref, IconButtonContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const stringFormatter = useLocalizedString();

    const {
        className,
        children: childrenProp,
        size: sizeProp = "md",
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

    const classNames = composeClassnameRenderProps(
        className,
        GlobalIconButtonCssSelector,
        cssModule(
            styles,
            "hop-icon-button",
            variant,
            size,
            isLoading && "loading"
        ),
        stylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    const spinnerId = useId();

    const hasAriaLabel = !!props["aria-label"] || !!props["aria-labelledby"];
    const isLoadingAriaLiveLabel = `${hasAriaLabel ? props["aria-label"] : ""} ${stringFormatter.format("button.pending")}`.trim();

    const children = composeRenderProps(childrenProp, prev => {
        return prev;
    });

    return (
        <SlotProvider
            values={[
                [IconContext, {
                    slots: {
                        icon: {
                            className: styles["hop-icon-button__icon"],
                            size: "md"
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
                                    className={styles["hop-icon-button__Spinner"]}
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
const _IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(IconButton);
_IconButton.displayName = "IconButton";

export { _IconButton as IconButton };

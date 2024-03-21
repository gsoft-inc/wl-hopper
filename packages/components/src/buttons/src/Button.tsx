import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { type ForwardedRef, forwardRef, type ElementType, type ReactElement, type ForwardRefExoticComponent, type Ref } from "react";
import { useContextProps, composeRenderProps, type SlotProps, type ButtonRenderProps, ButtonContext as RACButtonContext } from "react-aria-components";
import styles from "./Button.module.css";
import { useId, type AriaButtonProps, type HoverEvents, useButton, useHover, useFocusRing, mergeProps } from "react-aria";
import { cssModule } from "../../utils/src/cssModule.ts";
import { Text } from "../../Text/src/Text.tsx";
import { composeClassnameRenderProps, SlotProvider, type RenderProps } from "../../utils/index.ts";
import { IconContext } from "@hopper-ui/icons";
import { ButtonContext, type ButtonContextValue } from "./ButtonContext.ts";
import { TextContext } from "../../Text/index.ts";
import { IconListContext } from "../../IconList/index.ts";
import { useLocalizedString } from "../../intl/index.ts";
import { Spinner } from "../../Spinner/index.ts";
import { isTextOnlyChildren } from "../../utils/src/isTextOnlyChildren.ts";
import { filterDOMProps } from "@react-aria/utils";
import { useRenderProps } from "../../utils/src/useRenderProps.ts";
import { useSlot } from "../../utils/src/index.ts";

export const GlobalButtonCssSelector = "hop-Button";

// Won't be needed in next react-aria-components release: https://github.com/adobe/react-spectrum/pull/5850
const DefaultButtonSlot = "button";

export interface ButtonProps<T extends ElementType = "button"> extends StyledComponentProps<Omit<AriaButtonProps<T>, "children" | "className" | "style">>, HoverEvents, SlotProps, RenderProps<ButtonRenderProps> {
    /**
     * The visual style of the button.
     */
    variant?: "primary" | "secondary" | "tertiary" | "negative" | "upsell";

    /**
     * A button can vary in size.
     */
    size?: ResponsiveProp<"sm" | "md">;

    /**
     * Whether or not the button takes up the width of its container.
     */
    fluid?: ResponsiveProp<boolean>;

    // A button can show a loading indicator.
    isLoading?:boolean;


    /**
   * The <form> element to associate the button with.
   * The value of this attribute must be the id of a <form> in the same document.
   */
    form?: string;
    /**
   * The URL that processes the information submitted by the button.
   * Overrides the action attribute of the button's form owner.
   */
    formAction?: string;
    /** Indicates how to encode the form data that is submitted. */
    formEncType?: string;
    /** Indicates the HTTP method used to submit the form. */
    formMethod?: string;
    /** Indicates that the form is not to be validated when it is submitted. */
    formNoValidate?: boolean;
    /** Overrides the target attribute of the button's form owner. */
    formTarget?: string;
    /** Submitted as a pair with the button's value as part of the form data. */
    name?: string;
    /** The value associated with the button's name when it's submitted with the form data. */
    value?: string;
}

const additionalButtonHTMLAttributes = new Set(["form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "name", "value"]);

function Button<T extends ElementType = "button">(props: ButtonProps<T>, ref: ForwardedRef<HTMLElement>) {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultButtonSlot }, ref, ButtonContext);
    // since we can't use the Button from react-aria-components, we need to make sure we still get the context value
    // from react-aria-components.  However, since our  Button might be something else than a button, we need to cast the ref
    [props, ref] = useContextProps(props, ref as ForwardedRef<HTMLButtonElement>, RACButtonContext);
    const ctx = props as ButtonContextValue;
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const stringFormatter = useLocalizedString();

    const {
        className,
        children: childrenProp,
        size: sizeProp = "md",
        fluid: fluidProp,
        variant = "primary",
        isDisabled,
        isLoading,
        style: styleProp,
        elementType: As = "button",
        ...otherProps
    } = ownProps;

    const isInteractionDisabled = isDisabled || isLoading;

    const { buttonProps, isPressed } = useButton({
        ...ownProps,
        isDisabled: isInteractionDisabled
    }, ref);
    const { focusProps, isFocused, isFocusVisible } = useFocusRing(props);
    const { hoverProps, isHovered } = useHover(props);

    const [textRef, hasText] = useSlot();

    const size = useResponsiveValue(sizeProp);
    const fluid = useResponsiveValue(fluidProp);

    const classNames = composeClassnameRenderProps(
        className,
        GlobalButtonCssSelector,
        cssModule(
            styles,
            "hop-Button",
            variant,
            size,
            fluid && "fluid",
            isLoading && "loading",
            !hasText && "icon-only"
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

    const renderProps = useRenderProps({
        className: classNames,
        style,
        children,
        values: { isHovered, isPressed, isFocused, isFocusVisible, isDisabled: isInteractionDisabled || false }
    });

    const spinnerId = useId();

    const hasAriaLabel = !!props["aria-label"] || !!props["aria-labelledby"];
    const isLoadingAriaLiveLabel = `${hasAriaLabel ? props["aria-label"] : ""} ${stringFormatter.format("button.pending")}`.trim();

    if (!hasText && !hasAriaLabel) {
        console.warn("[hopper-ui] If you do not provide a text children, you must specify an aria-label for accessibility");
    }

    return (
        <SlotProvider
            values={[
                [IconListContext, {
                    slots: {
                        icon: {
                            className: styles["hop-Button__icon-list"]
                        },
                        "end-icon": {
                            className: styles["hop-Button__end-icon-list"]
                        }
                    }
                }],
                [IconContext, {
                    slots: {
                        icon: {
                            className: styles["hop-Button__icon"],
                            size: "md"
                        },
                        "end-icon": {
                            className: styles["hop-Button__end-icon"],
                            size: "md"
                        }
                    }
                }],
                [TextContext, {
                    slots: {
                        text: {
                            className: styles["hop-Button__text"],
                            size: size,
                            ref: textRef
                        }
                    }
                }]
            ]}
        >
            <As
                {...filterDOMProps(otherProps, { propNames: additionalButtonHTMLAttributes })}
                {...mergeProps(buttonProps, focusProps, hoverProps)}
                {...renderProps}
                ref={ref as Ref<never>}
                slot={props.slot || undefined}
                data-disabled={isInteractionDisabled || undefined}
                data-pressed={ctx.isPressed || isPressed || undefined}
                data-hovered={isHovered || undefined}
                data-focused={isFocused || undefined}
                data-focus-visible={isFocusVisible || undefined}
                data-loading={isLoading}
            >
                {children({ isHovered, isPressed, isFocused, isFocusVisible, isDisabled: isInteractionDisabled || false })}
                {isLoading && (
                    <Spinner
                        id={spinnerId}
                        size="lg"
                        aria-label={isLoadingAriaLiveLabel}
                        className={styles["hop-Button__Spinner"]}
                    />
                )}
            </As>
        </SlotProvider>
    );
}

/**
 * Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it.
 *
 * [View Documentation](TODO)
 */
const _Button = forwardRef(Button) as <T extends ElementType = "button">(props: ButtonProps<T> & { ref?: ForwardedRef<HTMLElement> }) => ReactElement;

(_Button as ForwardRefExoticComponent<unknown>).displayName = "Button";

export { _Button as Button };

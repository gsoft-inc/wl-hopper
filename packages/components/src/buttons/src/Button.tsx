import { IconContext } from "@hopper-ui/icons";
import {
    type StyledComponentProps,
    useStyledSystem,
    type ResponsiveProp,
    useResponsiveValue
} from "@hopper-ui/styled-system";
import { useRouter, shouldClientNavigate, filterDOMProps, chain } from "@react-aria/utils";
import { type ForwardedRef, forwardRef, type MouseEvent, type MutableRefObject } from "react";
import { useButton, useHover, useFocusRing, mergeProps } from "react-aria";
import {
    useContextProps,
    composeRenderProps,
    type ButtonProps as RACButtonProps,
    type ButtonRenderProps,
    ButtonContext as RACButtonContext
} from "react-aria-components";

import { IconListContext } from "../../IconList/index.ts";
import { useLocalizedString } from "../../intl/index.ts";
import { Spinner } from "../../Spinner/index.ts";
import { TextContext, Text } from "../../Text/index.ts";
import {
    composeClassnameRenderProps,
    SlotProvider,
    cssModule,
    useSlot,
    isTextOnlyChildren,
    useRenderProps
} from "../../utils/index.ts";

import { ButtonContext, type ButtonContextValue } from "./ButtonContext.ts";

import styles from "./Button.module.css";

export const GlobalButtonCssSelector = "hop-Button";

// Won't be needed in next react-aria-components release: https://github.com/adobe/react-spectrum/pull/5850
const DefaultButtonSlot = "button";

export interface ButtonProps extends StyledComponentProps<RACButtonProps> {
    /**
     * The visual style of the button.
     */
    variant?: "primary" | "secondary" | "danger" | "upsell" | "ghost-primary" | "ghost-secondary" | "ghost-danger";

    /**
     * A button can vary in size.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;

    /**
     * Whether or not the button takes up the width of its container.
     */
    fluid?: ResponsiveProp<boolean>;

    // A button can show a loading indicator.
    isLoading?: boolean;

    /** A URL to link to. Setting this makes the component render an `a` tag instead of a `button` */
    href?: string;

    /** The target window for the link. */
    target?: string;

    /** The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel). */
    rel?: string;
}

/**
 * Taken from RAC Buttons
 */
const additionalButtonHTMLAttributes = new Set(["form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "name", "value"]);

/**
 * If we were to use Button from "react-aria-components", all this would be done automatically inside the component.
 * But since we can't use Button from "react-aria-components", we need to do this manually.
 */
function useSimulatedRACButton(props: ButtonProps, ref: MutableRefObject<HTMLElement | null>) {
    const { focusProps, isFocused, isFocusVisible } = useFocusRing(props);
    const { hoverProps, isHovered } = useHover(props);
    const ctx = props as ButtonContextValue;

    const elementType = props.href ? "a" : "button";
    const { buttonProps, isPressed } = useButton({
        ...props,
        elementType,
        isDisabled: props.isDisabled || props.isLoading
    }, ref);

    const state: ButtonRenderProps = {
        isFocused,
        isFocusVisible,
        isHovered,
        isPressed,
        isDisabled: props.isDisabled || false
    };

    const mergedProps = {
        ...mergeProps(buttonProps, focusProps, hoverProps),
        "data-disabled": props.isDisabled || undefined,
        "data-pressed": ctx.isPressed || isPressed || undefined,
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined
    };

    return [mergedProps, state] as const;
}

// This logic is usually located in the useLink hook.
function useCreateRouterLinkClickEventHandler() {
    const router = useRouter();

    return (e: MouseEvent<HTMLElement>) => {
        // If a custom router is provided, prevent default and forward if this link should client navigate.
        if (
            !router.isNative &&
            e.currentTarget instanceof HTMLAnchorElement &&
            e.currentTarget.href &&
            // If props are applied to a router Link component, it may have already prevented default.
            !e.isDefaultPrevented() &&
            shouldClientNavigate(e.currentTarget, e)
        ) {
            e.preventDefault();
            router.open(e.currentTarget, e);
        }
    };
}

function Button(props: ButtonProps, ref: ForwardedRef<HTMLElement>) {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultButtonSlot }, ref, ButtonContext);
    // since we can't use the Button from react-aria-components, we need to make sure we still get the context value
    // from react-aria-components.  However, since our  Button might be something else than a button, we need to cast the ref
    [props, ref] = useContextProps(props, ref as ForwardedRef<HTMLButtonElement>, RACButtonContext);

    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const [{ onClick, ...buttonProps }, state] = useSimulatedRACButton(ownProps, ref);
    const stringFormatter = useLocalizedString();

    const {
        className,
        children: childrenProp,
        size: sizeProp,
        fluid: fluidProp,
        variant = "primary",
        isLoading,
        style: styleProp,
        ...otherProps
    } = ownProps;

    const [textRef, hasText] = useSlot();

    const size = useResponsiveValue(sizeProp) ?? "md";
    const fluid = useResponsiveValue(fluidProp) ?? false;

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
        values: state
    });

    const hasAriaLabel = !!buttonProps["aria-label"] || !!buttonProps["aria-labelledby"];

    if (!hasText && !hasAriaLabel) {
        console.warn("[hopper-ui] If you do not provide a text children, you must specify an aria-label for accessibility");
    }

    const handleClick = chain(
        onClick,
        useCreateRouterLinkClickEventHandler()
    );

    const As = props.href ? "a" : "button";

    return (
        <SlotProvider
            values={[
                [IconListContext, {
                    slots: {
                        icon: {
                            size: size,
                            className: styles["hop-Button__icon-list"]
                        },
                        "end-icon": {
                            size: size,
                            className: styles["hop-Button__end-icon-list"]
                        }
                    }
                }],
                [IconContext, {
                    slots: {
                        icon: {
                            size: size,
                            className: styles["hop-Button__icon"]
                        },
                        "end-icon": {
                            size: size,
                            className: styles["hop-Button__end-icon"]
                        }
                    }
                }],
                [TextContext, {
                    className: styles["hop-Button__text"],
                    size: size,
                    ref: textRef
                }]
            ]}
        >
            <As
                {...filterDOMProps(otherProps, { propNames: additionalButtonHTMLAttributes })}
                {...buttonProps}
                {...renderProps}
                onClick={handleClick}
                // We know the ref type match, ignore the error
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ref={ref}
                slot={props.slot || undefined}
                data-loading={isLoading}
            >
                {renderProps.children}
                {isLoading && (
                    <Spinner
                        aria-label={stringFormatter.format("Button.spinnerAriaLabel")}
                        size={size}
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
const _Button = forwardRef(Button);

_Button.displayName = "Button";

export { _Button as Button };

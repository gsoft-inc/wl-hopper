import {
    composeClassnameRenderProps,
    SlotProvider,
    cssModule,
    ButtonContext,
    ButtonGroupContext,
    ContentContext,
    FooterContext,
    TextContext,
    HeadingContext,
    LinkContext,
    useColorSchemeContext, HopperProvider, isNil, isFunction
} from "@hopper-ui/components";
import { type StyledComponentProps, useStyledSystem } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type ForwardedRef } from "react";
import {
    useContextProps,
    type PopoverProps as RACPopoverProps,
    type DialogTriggerProps,
    DialogTrigger,
    Popover as RACPopover,
    Dialog
} from "react-aria-components";

import { PopoverContext } from "./PopoverContext.ts";

import styles from "./Popover.module.css";

export const GlobalPopoverCssSelector = "hop-Popover";

export interface PopoverProps extends StyledComponentProps<RACPopoverProps> {
}

export interface PopoverTriggerProps extends DialogTriggerProps {
}

export const PopoverTrigger = (props: PopoverTriggerProps) =>
    <DialogTrigger {...props}>{props.children}</DialogTrigger>;

function Popover(props: PopoverProps, ref: ForwardedRef<HTMLElement>) {
    [props, ref] = useContextProps(props, ref, PopoverContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        children,
        className,
        offset = 4,
        ...otherProps
    } = ownProps;

    const { colorScheme } = useColorSchemeContext();

    const popoverClassNames = composeClassnameRenderProps(
        className,
        GlobalPopoverCssSelector,
        cssModule(
            styles,
            "hop-Popover"
        )
    );

    return (
        <RACPopover
            {...otherProps}
            offset={offset}
            ref={ref}
            className={popoverClassNames}
        >
            {state => (
                <HopperProvider colorScheme={colorScheme}>
                    <Dialog className={clsx(stylingProps.className, styles["hop-Popover__dialog"])}
                        style={stylingProps.style}
                    >
                        <SlotProvider values={[
                            [TextContext, {
                                className: styles["hop-Popover__title"],
                                size: "md"
                            }],
                            [HeadingContext, {
                                className: styles["hop-Popover__title"],
                                size: "inherit"
                            }],
                            [ButtonContext, {
                                size: "sm",
                                className: styles["hop-Popover__action"]
                            }],
                            [ButtonGroupContext, {
                                size: "sm",
                                align: "end",
                                className: styles["hop-Popover__actions"]
                            }],
                            [ContentContext, {
                                className: styles["hop-Popover__content"]
                            }],
                            [FooterContext, {
                                className: styles["hop-Popover__footer"]
                            }],
                            [LinkContext, {
                                size: "sm",
                                variant: "primary",
                                isQuiet: true
                            }]
                        ]}
                        >
                            {(isFunction(children) && !isNil(children)) ? children(state) : children}
                        </SlotProvider>
                    </Dialog>
                </HopperProvider>
            )}
        </RACPopover>
    );
}

/**
 * Popovers are small overlays that open on demand. They let users access additional content and actions without cluttering the page.
 *
 * [View Documentation](TODO)
 */
const _Popover = forwardRef<HTMLElement, PopoverProps>(Popover);
_Popover.displayName = "Popover";

export { _Popover as Popover };

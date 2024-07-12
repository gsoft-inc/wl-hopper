import {
    composeClassnameRenderProps,
    SlotProvider,
    cssModule,
    ButtonContext,
    ButtonGroupContext,
    ContentContext,
    FooterContext,
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
    /**
     * The minimum distance the trigger edge should be from the edge of the overlay element.
     */
    boundaryOffset?: number;
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
        boundaryOffset,
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
            arrowBoundaryOffset={boundaryOffset}
        >
            {state => (
                <HopperProvider colorScheme={colorScheme}>
                    <Dialog className={clsx(stylingProps.className, styles["hop-Popover__dialog"])}
                        style={stylingProps.style}
                    >
                        <SlotProvider values={[
                            [HeadingContext, {
                                className: styles["hop-Popover__title"],
                                size: "xs"
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

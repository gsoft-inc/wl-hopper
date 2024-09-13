"use client";

import { isFunction, isNil } from "@hopper-ui/components";
import clsx from "clsx";
import { createContext, forwardRef, type CSSProperties, type ForwardedRef } from "react";

import {
    Dialog,
    DialogTrigger,
    Popover as RACPopover,
    useContextProps,
    type ContextValue,
    type DialogTriggerProps,
    type PopoverProps as RACPopoverProps
} from "react-aria-components";

import "./popover.css";

export const PopoverContext = createContext<ContextValue<PopoverProps, HTMLElement>>({});
PopoverContext.displayName = "PopoverContext";

export interface PopoverProps extends RACPopoverProps {
    boundaryOffset?: number;
}

export interface PopoverCSSProperties extends CSSProperties {
    "--container-padding": number | string;
}

export interface PopoverTriggerProps extends DialogTriggerProps {}

export const PopoverTrigger = (props: PopoverTriggerProps) =>
    <DialogTrigger {...props}>{props.children}</DialogTrigger>;

function Popover(props: PopoverProps, ref: ForwardedRef<HTMLElement>) {
    [props, ref] = useContextProps(props, ref, PopoverContext);

    const {
        children,
        className,
        offset = 4,
        boundaryOffset,
        style,
        containerPadding = 16,
        ...otherProps
    } = props;

    const mergedStyles: PopoverCSSProperties = {
        ...style,
        "--container-padding": `${containerPadding}px`
    };

    return (
        <RACPopover
            {...otherProps}
            offset={offset}
            ref={ref}
            containerPadding={containerPadding}
            className={clsx("hd-popover", className)}
            arrowBoundaryOffset={boundaryOffset}
            style={mergedStyles}
        >
            {state => (
                <Dialog className={clsx("hd-popover__dialog")}>
                    {(isFunction(children) && !isNil(children)) ? children(state) : children}
                </Dialog>
            )}
        </RACPopover>
    );
}

const _Popover = forwardRef<HTMLElement, PopoverProps>(Popover);
_Popover.displayName = "Popover";

export { _Popover as Popover };

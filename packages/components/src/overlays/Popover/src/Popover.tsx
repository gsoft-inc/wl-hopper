import { composeClassnameRenderProps, cssModule } from "@hopper-ui/components";
import { type StyledComponentProps, useStyledSystem } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import {
    useContextProps,
    type PopoverProps as RACPopoverProps,
    type DialogTriggerProps,
    DialogTrigger,
    Popover as RACPopover,
    composeRenderProps, Dialog
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
        className,
        style: styleProp,
        ...otherProps
    } = ownProps;

    const classNames = composeClassnameRenderProps(
        className,
        GlobalPopoverCssSelector,
        cssModule(
            styles,
            "hop-Popover"
        ),
        stylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    return (
        <RACPopover {...otherProps} ref={ref} className={classNames} style={style} {...otherProps}>
            <Dialog>
                Popover render here
            </Dialog>
        </RACPopover>
    );
}

/**
 * TODO: tagline
 *
 * [View Documentation](TODO)
 */
const _Popover = forwardRef<HTMLElement, PopoverProps>(Popover);
_Popover.displayName = "Popover";

export { _Popover as Popover };

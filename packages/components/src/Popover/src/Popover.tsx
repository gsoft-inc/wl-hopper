import { forwardRef, type ForwardedRef } from "react";
import { useContextProps } from "react-aria-components";

import { PopoverContext } from "./PopoverContext.ts";

import styles from "./Popover.module.css";

export const GlobalPopoverCssSelector = "hop-Popover";

export interface PopoverProps {
}

function Popover(props:PopoverProps, ref: ForwardedRef<any>) {
    [props, ref] = useContextProps(props, ref, PopoverContext);

    return (
        <div></div>
    );
}

/**
 * TODO: tagline
 *
 * [View Documentation](TODO)
 */
const _Popover = forwardRef<any, PopoverProps>(Popover);
_Popover.displayName = "Popover";

export { _Popover as Popover };

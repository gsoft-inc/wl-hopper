import { useStyledSystem, type StyledSystemProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, useRef, type ForwardedRef, type ReactNode } from "react";
import { useFocusable } from "react-aria";
import { useContextProps } from "react-aria-components";

import { cssModule, type BaseComponentDOMProps } from "../../utils/index.ts";

import { PassiveTriggerContext } from "./PassiveTriggerContext.ts";

import styles from "./PassiveTrigger.module.css";

export const GlobalPassiveTriggerCssSelector = "hop-PassiveTrigger";

export interface PassiveTriggerProps extends StyledSystemProps, BaseComponentDOMProps {
    /**
     * The children of the PassiveTrigger.
     */
    children?: ReactNode;
}
/**
 * A PassiveTrigger wraps a trigger element and Tooltip, handling visibility and positioning.
 *
 * [View Documentation](TODO)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PassiveTrigger(props: PassiveTriggerProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, PassiveTriggerContext);

    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const backupRef = useRef<HTMLDivElement>(null);
    const determinedRef = (ref ?? backupRef);
    const { focusableProps } = useFocusable(ownProps, determinedRef);
    const {
        children,
        className,
        slot,
        style: styleProp,
        ...otherProps
    } = ownProps;

    const classNames = clsx(
        className,
        GlobalPassiveTriggerCssSelector,
        cssModule(
            styles,
            "hop-PassiveTrigger"
        ),
        stylingProps.className
    );

    const style = {
        ...stylingProps.style,
        ...styleProp
    };

    return (
        <div
            ref={determinedRef}
            slot={slot ?? undefined}
            className={classNames}
            style={style}
            {...focusableProps}
            {...otherProps}
        >
            {children}
        </div>
    );
}

/**
 * Wraps a tooltip trigger that is not normally focusable.
 *
 * [View Documentation](TODO)
 */
const _PassiveTrigger = forwardRef<HTMLDivElement, PassiveTriggerProps>(PassiveTrigger);
_PassiveTrigger.displayName = "PassiveTrigger";

export { _PassiveTrigger as PassiveTrigger };


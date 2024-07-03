import { createContext, type ForwardedRef, forwardRef, type ReactNode } from "react";
import { type ContextValue, useContextProps } from "react-aria-components";
import clsx from "clsx";

import "./callout.css";

export interface CalloutProps {
    children: ReactNode;
    className?: string;
    variant?: "information" | "success" | "warning";
}

function Callout(props: CalloutProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, CalloutContext);
    const { children, className, variant = "information", ...other } = props;

    return (
        <div {...other}
            className={clsx("hd-callout", className, {
                [`hd-callout--${variant}`]: variant
            })}
            ref={ref}
            role="alert"
        >
            {children}
        </div>
    );
}

export const CalloutContext = createContext<ContextValue<Partial<CalloutProps>, HTMLDivElement>>({});

const _Callout = forwardRef<HTMLDivElement, CalloutProps>(Callout);
_Callout.displayName = "Callout";

export { _Callout as Callout };

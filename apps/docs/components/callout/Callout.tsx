"use client";

import { createContext, type ForwardedRef, forwardRef, type ReactNode } from "react";
import { type ContextValue, useContextProps } from "react-aria-components";
import clsx from "clsx";

import { Icon, WarningIcon, CheckIcon, ErrorIcon, InfoIcon, MessageIcon } from "@/components/icon";

import "./callout.css";

export interface CalloutProps {
    children: ReactNode;
    className?: string;
    variant?: "information" | "success" | "warning" | "error" | "message";
}

function Callout(props: CalloutProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, CalloutContext);
    const { children, className, variant = "information", ...other } = props;

    const iconMap = {
        information: InfoIcon,
        success: CheckIcon,
        warning: WarningIcon,
        error: ErrorIcon,
        message: MessageIcon
    };

    const IconSrc = iconMap[variant] || InfoIcon;

    return (
        <div {...other}
            className={clsx("hd-callout", className, {
                [`hd-callout--${variant}`]: variant
            })}
            ref={ref}
            role="alert"
        >
            <Icon className="hd-callout__icon" src={IconSrc} />
            {children}
        </div>
    );
}

export const CalloutContext = createContext<ContextValue<Partial<CalloutProps>, HTMLDivElement>>({});

const _Callout = forwardRef<HTMLDivElement, CalloutProps>(Callout);
_Callout.displayName = "Callout";

export { _Callout as Callout };

import React, { type HTMLAttributes } from "react";
import clsx from "clsx";

import "./code.css";

export type InlineCodeProps = React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
    children?: React.ReactNode;
    variant?: "default" | "ghost";
};

const InlineCode = ({ children, variant = "default", ...props }: InlineCodeProps) => {
    return (
        <code {...props} className={clsx("hd-code", { "hd-code--ghost": variant === "ghost" })}>{children}</code>
    );
};

export default InlineCode;

import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

import "./code.css";

export type InlineCodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
    children?: ReactNode;
    variant?: "default" | "ghost";
};

const InlineCode = ({ children, variant = "default", ...props }: InlineCodeProps) => {
    return (
        <code {...props} className={clsx("hd-code", { "hd-code--ghost": variant === "ghost" })} tabIndex={-1}>{children}</code>
    );
};

export default InlineCode;

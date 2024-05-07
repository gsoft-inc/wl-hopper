import type { ReactNode } from "react";
import clsx from "clsx";

import "./callout.css";

export interface CalloutProps {
    children: ReactNode;
    className?: string;
}

const Callout = ({ children, className }: CalloutProps) => {
    return (
        <div className="hd-callout">
            {children}
        </div>
    );
};

export default Callout;

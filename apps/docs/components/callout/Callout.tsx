import type { ReactNode } from "react";

import "./callout.css";

export interface CalloutProps {
    children: ReactNode;
}

const Callout = ({ children }: CalloutProps) => {
    return (
        <div className="hd-callout">
            {children}
        </div>
    );
};

export default Callout;

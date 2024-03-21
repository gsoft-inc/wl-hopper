import type { ReactNode } from "react";

import "./tag.css";

const Tag = ({ children }: { children: ReactNode }) => {
    return (
        <span className="hd-tag">
            {children}
        </span>
    );
};

export default Tag;

import React, { type HTMLAttributes } from "react";

import "./code.css";

export type InlineCodeProps = React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
    children?: React.ReactNode;
};

const InlineCode = ({ children, ...props }: InlineCodeProps) => {
    return (
        <code {...props} className="hd-code">{children}</code>
    );
};

export default InlineCode;

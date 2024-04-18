import React from "react";

import "./code.css";

interface CodeProps {
    children: React.ReactNode;
}

const InlineCode: React.FC<CodeProps> = ({ children }) => {
    return (
        <code className="hd-code">{children}</code>
    );
};

export default InlineCode;

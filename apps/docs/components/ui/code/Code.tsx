import React from "react";
import CopyButton from "@/components/copyButton/CopyButton";

import "./code.css";

interface CodeProps {
    children: React.ReactNode;
    value: string;
}

const Code: React.FC<CodeProps> = ({ children, value }) => {
    return (
        <div className="hd-code__wrapper">
            <code className="hd-code">{children}</code>
            <CopyButton text={value} variant="inline" className="hd-code__copy" />
        </div>
    );
};

export default Code;

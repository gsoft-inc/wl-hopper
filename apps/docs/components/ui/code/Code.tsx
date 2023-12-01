import React from "react";
import InlineCopyButton from "@/components/copyButton/inlineCopyButton/InlineCopyButton";
import "./code.css";

interface CodeProps {
    children: React.ReactNode;
    value: string;
}

const Code: React.FC<CodeProps> = ({ children, value }) => {
    return (
        <div className="hd-code__wrapper">
            <code className="hd-code">{children}</code>
            <InlineCopyButton text={value} className="hd-code__copy" />
        </div>
    );
};

export default Code;

import React from "react";
import clsx from "clsx";

import CopyButton from "@/components/copyButton/CopyButton";

import "./code.css";

interface CodeProps {
    children: React.ReactNode;
    value?: string;
}

const Code: React.FC<CodeProps> = ({ children, value }) => {
    return (
        <div className={clsx("hd-code__wrapper", value && "hd-code__wrapper--interactive")}>
            <code className="hd-code">{children}</code>
            {value &&
                <CopyButton text={value} variant="inline" className="hd-code__copy" />
            }
        </div>
    );
};

export default Code;

import React from "react";
import { CopyButton } from "../Utils/CopyButton/CopyButton";
import { LangIcon } from "./LangIcon/LangIcon";
import "./pre.css";

export interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
    children: React.ReactNode;
    raw: string;
    title: string;
    "data-language": string;
}

export const Pre = ({ children, raw, title, ...props }: PreProps) => {
    const lang = props["data-language"];

    return (
        <pre {...props} className={"p-0"}>
            <div
                className={"hd-pre-header"}>
                <div className="hd-pre-header-info">
                    <span className="hd-pre-header-lang">
                        <LangIcon lang={lang} className="hd-pre-header-lang__icon"/>
                    </span>
                    <span className="hd-code-header-title">{title}</span>
                </div>
                <CopyButton text={raw} />
            </div>
            {children}
        </pre>
    );
};

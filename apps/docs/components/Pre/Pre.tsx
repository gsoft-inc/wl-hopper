import React, { HTMLAttributes } from "react";
import { CopyButton } from "../Utils/CopyButton/CopyButton";
import { LangIcon } from "./LangIcon/LangIcon";
import "./pre.css";

export type PreProps = React.DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> & {
    "data-language"?: string;
    raw?: string;
};

export const Pre = ({ children, title, "data-language": dataLanguage, raw, ...props }: PreProps) => {
    return (
        <pre {...props} className={"p-0"}>
            <div
                className={"hd-pre-header"}>
                <div className="hd-pre-header-info">
                    {dataLanguage && (
                        <span className="hd-pre-header-lang">
                            <LangIcon lang={dataLanguage} className="hd-pre-header-lang__icon"/>
                        </span>)
                    }
                    <span className="hd-code-header-title">{title}</span>
                </div>
                {raw && <CopyButton text={raw} />}
            </div>
            {children}
        </pre>
    );
};

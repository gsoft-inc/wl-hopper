import React, { HTMLAttributes } from "react";
import { CopyButton } from "../Utils/CopyButton/CopyButton";
import { AvailableLanguages, LangIcon } from "./LangIcon/LangIcon";
import "./pre.css";

export type PreProps = React.DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> & {
    "data-language"?: AvailableLanguages;
};

export const Pre = ({ children, title, "data-language": dataLanguage, ...props }: PreProps) => {
    const raw = typeof children === "string" ? children : children?.toString();

    return (
        <pre {...props} className={"p-0"}>
            <div
                className={"hd-pre-header"}>
                <div className="hd-pre-header-info">
                    <span className="hd-pre-header-lang">
                        {dataLanguage && <LangIcon lang={dataLanguage} className="hd-pre-header-lang__icon"/>}
                    </span>
                    <span className="hd-code-header-title">{title}</span>
                </div>
                {raw && <CopyButton text={raw} />}
            </div>
            {children}
        </pre>
    );
};

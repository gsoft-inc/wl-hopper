"use client";

import React from "react";
import type { HTMLAttributes } from "react";
import cx from "classnames";

import CopyButton from "@/components/copyButton/CopyButton.tsx";
import LangIcon from "@/components/ui/pre/langIcon/LangIcon";

import "./pre.css";

export type PreProps = React.DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> & {
    "data-language"?: string;
    raw?: string;
};

const Pre = ({ children, title, "data-language": dataLanguage, raw, ...props }: PreProps) => {
    let preClasses = "";

    if (!title) {
        preClasses = "hd-pre--no-title";
    }

    const classes = cx("hd-pre", preClasses);

    const langContent = dataLanguage && (
        <span className="hd-pre-header__lang">
            <LangIcon lang={dataLanguage} className="hd-pre-header__lang-icon" />
        </span>
    );

    const titleContent = <span className="hd-pre-header__title">{title}</span>;
    const copyButton = raw && <CopyButton onDark text={raw} />;

    return (
        <pre {...props} className={classes}>
            {title &&
                <div className="hd-pre-header">
                    <div className="hd-pre-header__info">
                        {langContent}
                        {titleContent}
                    </div>
                    {copyButton}
                </div>
            }
            <div className="hd-pre__code">
                {children}
            </div>
            {!title && <div className="hd-pre__action">{copyButton}</div>}
        </pre>
    );
};

export default Pre;

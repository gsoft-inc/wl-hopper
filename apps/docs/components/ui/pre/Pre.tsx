"use client";

import React from "react";
import type { HTMLAttributes } from "react";
import cx from "classnames";

import CodeBlockCopyButton from "@/components/copyButton/codeblockCopyButton/CodeBlockCopyButton";
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

    return (
        <pre {...props} className={classes}>
            {raw && <CodeBlockCopyButton className="hd-pre-copy-button hd-copy-button--on-dark" text={raw} />}
            {title &&
            <div className="hd-pre-header">
                <div className="hd-pre-header__info">
                    {dataLanguage && (
                        <span className="hd-pre-header__lang">
                            <LangIcon lang={dataLanguage} className="hd-pre-header__lang-icon" />
                        </span>)
                    }
                    <span className="hd-pre-header__title">{title}</span>
                </div>
            </div>}
            {children}
        </pre>
    );
};

export default Pre;

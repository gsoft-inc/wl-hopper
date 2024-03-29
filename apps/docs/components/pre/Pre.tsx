"use client";

import React, { type HTMLAttributes } from "react";
import clsx from "clsx";

import CopyButton from "@/components/copyButton/CopyButton.tsx";
import LangIcon from "@/components/pre/langIcon/LangIcon";

import "./pre.css";

export type PreProps = React.DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> & {
    "data-language"?: string;
    raw?: string;
    className?: string;
};

const Pre = ({ children, className, title, "data-language": dataLanguage, raw, ...props }: PreProps) => {
    const classes = clsx("hd-pre", {
        "hd-pre--title": title
    }, className);

    const langContent = dataLanguage && (
        <span className="hd-pre-header__lang">
            <LangIcon lang={dataLanguage} className="hd-pre-header__lang-icon" />
        </span>
    );

    const titleContent = <span className="hd-pre-header__title">{title}</span>;
    const isOnDark = !title;

    const copyButton = raw && <CopyButton onDark={isOnDark} text={raw} />;

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

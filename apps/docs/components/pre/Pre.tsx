"use client";

import clsx from "clsx";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

import CopyButton from "@/components/copyButton/CopyButton.tsx";
import LangIcon from "@/components/pre/langIcon/LangIcon";
import Tooltip from "@/components/tooltip/Tooltip.tsx";
import TooltipTrigger from "@/components/tooltip/TooltipTrigger.tsx";

import "./pre.css";

export type PreProps = DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> & {
    "data-language"?: string;
    raw?: string;
    className?: string;
    theme?: "light" | "dark";
};

const Pre = ({ children, className, title, "data-language": dataLanguage, raw, theme = "dark", ...props }: PreProps) => {
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
        <pre data-theme={theme} className={classes} tabIndex={-1} {...props}>
            {title &&
                <div className="hd-pre-header">
                    <div className="hd-pre-header__info">
                        {langContent}
                        {titleContent}
                    </div>
                    <TooltipTrigger>
                        <Tooltip>
                        Copy code
                            {copyButton}
                        </Tooltip>
                    </TooltipTrigger>
                </div>
            }
            <div className="hd-pre__code">
                {children}
            </div>
            {!title && <div className="hd-pre__action">
                <TooltipTrigger>
                    <Tooltip>
                        Copy code
                        {copyButton}
                    </Tooltip>
                </TooltipTrigger>
            </div>}
        </pre>
    );
};

export default Pre;

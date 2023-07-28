import type { HTMLAttributes } from "react";

import CopyButton from "@/components/copyButton/CopyButton";
import LangIcon from "@/components/ui/pre/langIcon/LangIcon";

import "./pre.css";

export type PreProps = React.DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement> & {
    "data-language"?: string;
    raw?: string;
};

const Pre = ({ children, title, "data-language": dataLanguage, raw, ...props }: PreProps) => {
    return (
        <pre {...props}>
            <div className="hd-pre-header">
                <div className="hd-pre-header__info">
                    {dataLanguage && (
                        <span className="hd-pre-header__lang">
                            <LangIcon lang={dataLanguage} className="hd-pre-header__lang-icon" />
                        </span>)
                    }
                    <span className="hd-pre-header__title">{title}</span>
                </div>
                {raw && <CopyButton text={raw} />}
            </div>
            {children}
        </pre>
    );
};

export default Pre;

"use client";

import React from "react";
import CopyButton from "@/components/copyButton/CopyButton.tsx";

import "./iconItem.css";

interface IconItemProps {
    name: string;
    size: string;
    type: string;
}

const IconItem: React.FC<IconItemProps> = ({ name, type, size }) => {
    const [isCopied, setIsCopied] = React.useState(false);
    const toLower = (str: string) => str.toLowerCase();

    const copyString = type === "react" ? `<${name}Icon size="${size}" />` : `${toLower(name)}-${size}.svg` ;

    return (
        <>
            <div className="hd-icon-item">
                <div className="hd-icon-item-content">
                    <CopyButton className="hd-icon-item-copy" text={copyString} isCopied={isCopied} setIsCopied={setIsCopied}>
                        {isCopied ? <span className="hd-icon-item__copy-status">Copied!</span> :
                            <span className="hd-icon-item__icon">
                                {/* eslint-disable-next-line max-len */}
                                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.75 12a7.25 7.25 0 1 0 14.5 0 .75.75 0 0 1 1.5 0A8.75 8.75 0 1 1 12 3.25a.75.75 0 0 1 0 1.5A7.25 7.25 0 0 0 4.75 12Z" fill="currentColor"></path><path d="M9.5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16.5 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM15 5.25a.75.75 0 0 0 0 1.5h2.25V9a.75.75 0 0 0 1.5 0V6.75H21a.75.75 0 0 0 0-1.5h-2.25V3a.75.75 0 0 0-1.5 0v2.25H15Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.87 12.261a.75.75 0 0 1 .869.608c.334 1.89 2.09 3.38 4.261 3.38 2.172 0 3.927-1.49 4.262-3.38a.75.75 0 0 1 1.477.262c-.47 2.65-2.886 4.619-5.739 4.619-2.852 0-5.269-1.968-5.738-4.62a.75.75 0 0 1 .607-.869Z" fill="currentColor"></path></svg>
                            </span>
                        }
                    </CopyButton>
                    <div className="hd-icon-item__title">
                        {name}
                    </div>
                </div>
            </div>
        </>
    );
};

export default IconItem;

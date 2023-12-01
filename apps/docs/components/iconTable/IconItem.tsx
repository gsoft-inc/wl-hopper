"use client";

import React from "react";
import CopyButton from "@/components/copyButton/CopyButton.tsx";
import * as IconLibrary from "@hopper-ui/icons";

import "./iconItem.css";

export interface IconItemProps {
    name: typeof IconLibrary.iconNames[number];
    size: "sm" | "md" | "lg";
    type: "react" | "svg";
}

function toKebabCase(str: string) {
    return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

const IconItem: React.FC<IconItemProps> = ({ name, type, size }) => {
    const [isCopied, setIsCopied] = React.useState(false);

    const getIconNumericSize = (iconSize: IconItemProps["size"]) => {
        switch (iconSize) {
            case "sm":
                return "16";
            case "md":
                return "24";
            case "lg":
                return "32";
            default:
                return "24";
        }
    };

    const formattedName = name.replace("Icon", "");
    const copyString = type === "react" ? `<${name} size="${size}" />` : `${toKebabCase(formattedName).toLowerCase()}-${getIconNumericSize(size)}.svg` ;
    const Component = IconLibrary[name];

    return (
        <>
            <div className="hd-icon-item">
                <div className="hd-icon-item-content">
                    <CopyButton className="hd-icon-item-copy" text={copyString} isCopied={isCopied} setIsCopied={setIsCopied}>
                        {isCopied ? <span className="hd-icon-item__copy-status">Copied!</span> :
                            <span className="hd-icon-item__icon">
                                <Component size={size} />
                            </span>
                        }
                    </CopyButton>
                    <div className="hd-icon-item__title">
                        {formattedName}
                    </div>
                </div>
            </div>
        </>
    );
};

export default IconItem;

"use client";

import IconItem from "./IconItem";
import * as IconLibrary from "@hopper-ui/icons";
import { HopperProvider } from "@hopper-ui/components";

import "./iconTable.css";

interface IconTableProps {
    size: "sm" | "md" | "lg" | "xl";
    type: "svg" | "react";
    items: typeof IconLibrary.iconNames | typeof IconLibrary.richIconNames;
}

function toKebabCase(str: string) {
    return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function getIconNumericSize(iconSize : "sm" | "md" | "lg" | "xl") {
    switch (iconSize) {
        case "sm":
            return "16";
        case "md":
            return "24";
        case "lg":
            return "32";
        case "xl":
            return "40";
    }
}

export const IconTable = ({ size, type, items }: IconTableProps) => {
    const listItems = items.map(name => {
        const formattedName = name.replace("RichIcon", "").replace("Icon", "");
        const copyString = type === "react"
            ? `${name}`
            : `${toKebabCase(formattedName).toLowerCase()}-${getIconNumericSize(size)}.svg`;

        const Component = IconLibrary[name];

        return (
            <IconItem copyString={copyString} name={formattedName} key={name} >
                {/* @ts-expect-error generic stuff */}
                <Component size={size} />
            </IconItem>
        );
    });

    return (
        <HopperProvider colorScheme="light">
            <div className="hd-icon-table">
                {listItems}
            </div>
        </HopperProvider>
    );
};


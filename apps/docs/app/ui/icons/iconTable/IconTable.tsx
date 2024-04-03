"use client";

import IconItem, { type IconItemProps } from "./IconItem";
import * as IconLibrary from "@hopper-ui/icons";
import { HopperProvider } from "@hopper-ui/components";

import "./iconTable.css";

interface IconTableProps {
    size: IconItemProps["size"];
    type: IconItemProps["type"];
}

export const IconTable = ({ size, type }: IconTableProps) => {
    const listItems = IconLibrary.iconNames.map(name => {
        return (
            <IconItem type={type} size={size} name={name} key={name} />
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

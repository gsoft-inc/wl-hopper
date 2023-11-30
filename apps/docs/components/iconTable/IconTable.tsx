"use client";

import "./iconTable.css";
import IconItem from "./IconItem";
import * as IconLibrary from "@hopper-ui/icons";
import { HopperProvider } from "@hopper-ui/components";

interface IconTableProps {
    size: string;
    type: string;
}

interface ListProps {
    iconSize: string;
}

export const IconTable = ({ size, type }: IconTableProps) => {
    const List = ({ iconSize }: ListProps) => {
        const listItems = IconLibrary.iconNames.map(name => {
            return (
                <IconItem type={type} size={iconSize} name={name} />
            );
        });

        return (
            <>
                {listItems}
            </>
        );
    };

    return (
        <HopperProvider colorScheme="light">
            <div className="hd-icon-table">
                <List iconSize={size} />
            </div>
        </HopperProvider>
    );
};

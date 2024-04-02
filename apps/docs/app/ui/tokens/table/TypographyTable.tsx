"use client";

import React from "react";
import clsx from "clsx";
import { groupItemsByProperties, groupItemsByPropertiesAndSizes, type Size, type TokenData } from "./getTypographyTokens";
import { TypographyTableRow } from "./TypographyTableRow";

import "./table.css";

// maps the raw token list of a list filtered by property
function transformDataToTokenData(inputData: Record<string, { name: string; value: string }[]>): TokenData {
    const tokenData: TokenData = {};

    for (const propertyKey in inputData) {
        const items = inputData[propertyKey];

        if (Array.isArray(items)) {
            tokenData[propertyKey] = items;
        }
    }

    return tokenData;
}

interface TypographyTableProps {
    type: string;
    data: Record<string, { name: string; value: string }[]>;
}

const TypographyTable = ({ type, data }: TypographyTableProps) => {
    const hasNoSizes = type === "overline";

    const tokenData = transformDataToTokenData(data);
    const listItems = hasNoSizes ? generateSizelessRows(tokenData, type) : generateSizeRows(tokenData, type);

    return (
        <table className={clsx("hd-table hd-typo-table", hasNoSizes && "hd-typo-table--has-no-sizes")} aria-label="Tokens">
            <thead>
                <tr>
                    {!hasNoSizes && <th className="hd-table__column hd-table__column--size">Size</th>}
                    <th className="hd-table__column">Values</th>
                    <th className="hd-table__column">Preview</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </table>
    );
};

function generateSizeRows(tokenData: TokenData, type: string) {
    const filteredData = groupItemsByPropertiesAndSizes(tokenData, type);

    return Object.keys(filteredData).map(size => {
        return <TypographyTableRow key={size} type={type} properties={filteredData[size as keyof typeof filteredData]!} size={size as Size} />;
    });
}

function generateSizelessRows(tokenData: TokenData, type: string) {
    const properties = groupItemsByProperties(tokenData, type);

    return <TypographyTableRow type={type} properties={properties!} /> ;
}

export default TypographyTable;

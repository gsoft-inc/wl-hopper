"use client";

import React from "react";
import TypographyPreview from "@/app/ui/tokens/preview/TypographyPreview";
import Code from "@/components/code/Code";

import "./table.css";

interface TypographyTableProps {
    type: string;
    data: Record<string, { name: string; value: string }[]>;
}

const Sizes = ["3xl", "2xl", "xl", "lg", "md", "sm", "xs"] as const;

const FontProperties = ["fontFamily", "fontSize", "fontWeight", "lineHeight", "topOffset", "bottomOffset"] as const;

type GroupedItems = Record<typeof Sizes[number], Record<typeof FontProperties[number], string>>;

interface TokenData {
    [category: string]: { name: string; value: string }[];
}

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

function groupItemsByPropertiesAndSizes(tokenData: TokenData, itemType: string): GroupedItems {
    const groupedItems: GroupedItems = {} as GroupedItems;

    Sizes.forEach(size => {
        const sizeKey = size as typeof Sizes[number];
        groupedItems[sizeKey] = {} as Record<typeof FontProperties[number], string>;

        FontProperties.forEach(property => {
            const propertyKey = property;

            if (!tokenData[propertyKey]) {
                return;
            }

            const matchingItem = tokenData[propertyKey].find(item => {
                const nameParts = item.name.split("-");

                return nameParts.includes(itemType) && nameParts.includes(size);
            });

            const matchingItemOverline = tokenData[propertyKey].find(item => {
                const nameParts = item.name.split("-");

                return nameParts.includes("overline");
            });

            if (matchingItemOverline && sizeKey === "md") {
                groupedItems[sizeKey][propertyKey] = matchingItemOverline.value;
            }

            if (matchingItem) {
                groupedItems[sizeKey][propertyKey] = matchingItem.value;
            }
        });

        if (Object.values(groupedItems[sizeKey]).every(value => !value)) {
            delete groupedItems[sizeKey];
        }
    });

    return groupedItems;
}

const TypographyTable = ({ type, data }: TypographyTableProps) => {
    const tokenData = transformDataToTokenData(data);
    const filteredData = groupItemsByPropertiesAndSizes(tokenData, type);

    const listItems = Object.keys(filteredData).map(size => {
        const {
            fontFamily,
            fontSize,
            fontWeight,
            lineHeight,
            topOffset,
            bottomOffset
        } = filteredData[size as typeof Sizes[number]];

        // If the itemType is 'overline', set displaySize to an empty string
        let displaySize = `-${size}`;
        let previewAdditionalStyles = {};

        if (type === "overline") {
            displaySize = "";
            previewAdditionalStyles = {
                textTransform: "uppercase",
                letterSpacing: "0.015rem"
            };
        }

        // Accent MD is not a size, until we have a use case for it we will not display it, instead of doing some technical gymnastics, we will just return an empty string
        if (type === "accent" && size === "md") {
            return "";
        }

        const rowSpan = bottomOffset && topOffset ? 6 : 4;

        return (
            <React.Fragment key={`${type}${size}`}>
                <tr className="hd-typo__row hd-top__row">
                    {type !== "overline" && <td className="hd-table__cell hd-typo__cell" rowSpan={rowSpan}>{size}</td>}
                    <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                        Font Size
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        <Code
                            value={`--hop-${type}${displaySize}-font-size`}
                        >{`--hop-${type}${displaySize}-font-size`}</Code>
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        {fontSize}
                    </td>
                    <td className="hd-table__cell hd-typo__cell" rowSpan={4}>
                        <TypographyPreview style={{ ...previewAdditionalStyles }}
                            values={{ lineHeight, fontSize, fontWeight, fontFamily }}
                        />
                    </td>
                </tr>
                <tr className="hd-typo__row">
                    <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                        Font Weight
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        <Code
                            value={`--hop-${type}${displaySize}-font-weight`}
                        >{`--hop-${type}${displaySize}-font-weight`}</Code>
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        {fontWeight}
                    </td>
                </tr>
                <tr className="hd-typo__row">
                    <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                        Line Height
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        <Code
                            value={`--hop-${type}${displaySize}-line-height`}
                        >{`--hop-${type}${displaySize}-line-height`}</Code>
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        {lineHeight}
                    </td>
                </tr>
                <tr className="hd-typo__row">
                    <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                        Font Family
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        <Code
                            value={`--hop-${type}${displaySize}-font-family`}
                        >{`--hop-${type}${displaySize}-font-family`}</Code>
                    </td>
                    <td className="hd-table__cell hd-typo__cell hd-typo__cell-font-family">
                        {fontFamily}
                    </td>
                </tr>
                {bottomOffset && topOffset && (
                    <React.Fragment>
                        <tr className="hd-typo__row">
                            <td className="hd-table__cell hd-typo__cell hd-typo-offset-cell" colSpan={3}>
                                Bottom Offset<a href="#offset-tokens" className="hd-table__link"><sup>1</sup></a>
                            </td>
                            <td className="hd-table__cell hd-typo__cell hd-typo-offset-cell">
                                <Code value={`--hop-${type}${displaySize}-font-family`}>{`--hop-${type}${displaySize}-bottom-offset`}</Code>
                            </td>
                            <td className="hd-table__cell hd-typo__cell hd-typo-offset-cell hd-typo__cell-font-family">
                                {bottomOffset}
                            </td>
                        </tr>
                        <tr className="hd-typo__row">
                            <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                            Top Offset<a href="#offset-tokens" className="hd-table__link"><sup>1</sup></a>
                            </td>
                            <td className="hd-table__cell hd-typo__cell">
                                <Code value={`--hop-${type}${displaySize}-font-family`}>{`--hop-${type}${displaySize}-top-offset`}</Code>
                            </td>
                            <td className="hd-table__cell hd-typo__cell hd-typo__cell-font-family">
                                {topOffset}
                            </td>
                        </tr>
                    </React.Fragment>
                )
                }
            </React.Fragment>
        );
    });

    return (
        <table className="hd-table hd-typo-table" aria-label="Tokens">
            <thead>
                <tr>
                    {type !== "overline" && <th className="hd-table__column">Name</th>}
                    <th className="hd-table__column" colSpan={5}>Values</th>
                    <th className="hd-table__column">Preview</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </table>
    );
};

export default TypographyTable;

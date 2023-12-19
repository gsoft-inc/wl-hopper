"use client";

import React from "react";
import TypographyPreview from "@/components/preview/TypographyPreview";
import Code from "@/components/ui/code/Code";

import "./table.css";

interface TypographyTableProps {
    type: string;
    data: Record<string, { name: string; value: string }[]>;
}

const Sizes = ["3xl", "2xl", "xl", "lg", "md", "sm", "xs"] as const;
const FontWeightVariations = ["bold", "semibold", "medium"] as const;

type CategoryData = FontPropertiesRecord | Record<typeof Sizes[number], FontPropertiesRecord>;

const FontProperties = ["fontFamily", "fontSize", "fontWeight", "lineHeight"] as const;

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

interface FontPropertiesRecord {
    default?: {
        fontFamily: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
    };
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
}

interface GroupedItem {
    [size: string]: {
        [fontWeight: string]: FontPropertiesRecord;
    };
}

interface GroupedItems {
    [key: string]: GroupedItem | FontPropertiesRecord | DefaultGroupedItem;
}

interface DefaultGroupedItem {
    default: FontPropertiesRecord;
}

function initializeSizeKey(): FontPropertiesRecord {
    return {
        fontFamily: "",
        fontSize: "",
        fontWeight: "",
        lineHeight: ""
    };
}

function groupItemsByPropertiesAndSizes(tokenData: TokenData, itemType: string): GroupedItems {
    const groupedItems: Record<string, GroupedItem | FontPropertiesRecord | DefaultGroupedItem> = {};

    FontProperties.forEach(property => {
        if (!tokenData[property]) {
            return;
        }

        tokenData[property].forEach(tokenItem => {
            const nameParts = tokenItem.name.split("-");
            const fontWeight = FontWeightVariations.find(variation => nameParts.includes(variation));
            const size = Sizes.find(s => nameParts.includes(s));

            if (nameParts.includes(itemType)) {
                if (!groupedItems[itemType] || typeof groupedItems[itemType] === "string") {
                    groupedItems[itemType] = {};
                }

                const itemGroup = groupedItems[itemType] as GroupedItem;

                if (fontWeight !== undefined && size !== undefined) {
                    itemGroup[size] = itemGroup[size] || {};
                    itemGroup[size][fontWeight] = itemGroup[size][fontWeight] || initializeSizeKey();
                    itemGroup[size][fontWeight][property] = tokenItem.value;
                } else if (size !== undefined) {
                    itemGroup[size] = itemGroup[size] || { default: initializeSizeKey() };
                    itemGroup[size].default[property] = tokenItem.value;
                } else {
                    groupedItems[itemType] = { default: initializeSizeKey() };
                    if (groupedItems[itemType]) {
                        (groupedItems[itemType] as DefaultGroupedItem).default[property] = tokenItem.value;
                    }
                }
            }
        });
    });

    return groupedItems;
}

const TypographyTable: React.FC<TypographyTableProps> = ({ type, data }) => {
    const tokenData = transformDataToTokenData(data);
    const filteredData = groupItemsByPropertiesAndSizes(tokenData, type);

    const hasSizes = Object.values(filteredData).some(categoryData =>
        typeof categoryData === "object" && !Array.isArray(categoryData) && Object.keys(categoryData).some(key => Sizes.includes(key as typeof Sizes[number]))
    );

    let previewAdditionalStyles = {};

    if (type === "overline") {
        previewAdditionalStyles = {
            textTransform: "uppercase"
        };
    }

    return (
        <div>
            <table className="hd-table hd-typo-table" aria-label="Tokens">
                <thead>
                    <tr>
                        {hasSizes && <th className="hd-table__column">Name</th>}
                        <th className="hd-table__column" colSpan={5}>Values</th>
                        <th className="hd-table__column">Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(filteredData).map(([category, categoryData]) => {
                        if (typeof categoryData === "object" && !Array.isArray(categoryData) && Object.keys(categoryData).some(key => Sizes.includes(key as typeof Sizes[number]))) {
                            return Object.entries(categoryData as CategoryData).map(([size, properties]) => (
                                <React.Fragment key={`${category}-${size}`}>
                                    <tr className="hd-typo__row hd-top__row">
                                        <td className="hd-table__cell hd-typo__cell" rowSpan={4}>{size}</td>
                                        <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                                        Font Size
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell">
                                            <Code value={`--hop-${type}-${size}-font-size`}>{`--hop-${type}-${size}-font-size`}</Code>
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell">
                                            {properties.default.fontSize}
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell" rowSpan={4}>
                                            <TypographyPreview style={{ ...previewAdditionalStyles }}
                                                values={{
                                                    lineHeight: properties.default.lineHeight,
                                                    fontSize: properties.default.fontSize,
                                                    fontWeight: properties.default.fontWeight,
                                                    fontFamily: properties.default.fontFamily
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="hd-typo__row">
                                        <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                                        Font Weight
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell">
                                            <Code value={`--hop-${type}-${size}-font-weight`}>{`--hop-${type}-${size}-font-weight`}</Code>
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell">
                                            {properties.default.fontWeight}
                                        </td>
                                    </tr>
                                    <tr className="hd-typo__row">
                                        <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                                        Line Height
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell">
                                            <Code value={`--hop-${type}-${size}-line-height`}>{`--hop-${type}-${size}-line-height`}</Code>
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell">
                                            {properties.default.lineHeight}
                                        </td>
                                    </tr>
                                    <tr className="hd-typo__row">
                                        <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                                        Font Family
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell">
                                            <Code value={`--hop-${type}-${size}-font-family`}>{`--hop-${type}-${size}-font-family`}</Code>
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell">
                                            {properties.default.fontFamily}
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ));
                        } else {
                            return (
                                <React.Fragment key={`${category}`}>
                                    <tr className="hd-typo__row hd-top__row">
                                        <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                                        Font Size
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell">
                                            <Code value={`--hop-${type}-font-size`}>{`--hop-${type}-font-size`}</Code>
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell">
                                            {(categoryData as FontPropertiesRecord).default?.fontSize}
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell" rowSpan={4}>
                                            <TypographyPreview style={{ ...previewAdditionalStyles }}
                                                values={{
                                                    lineHeight: (categoryData as FontPropertiesRecord).default?.lineHeight,
                                                    fontSize: (categoryData as FontPropertiesRecord).default?.fontSize,
                                                    fontWeight: (categoryData as FontPropertiesRecord).default?.fontWeight,
                                                    fontFamily: (categoryData as FontPropertiesRecord).default?.fontFamily
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="hd-typo__row">
                                        <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                                        Font Weight
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell">
                                            <Code value={`--hop-${type}-font-weight`}>{`--hop-${type}-font-weight`}</Code>
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell">
                                            {(categoryData as FontPropertiesRecord).default?.fontWeight}
                                        </td>
                                    </tr>
                                    <tr className="hd-typo__row">
                                        <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                                        Line Height
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell">
                                            <Code value={`--hop-${type}-line-height`}>{`--hop-${type}-line-height`}</Code>
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell">
                                            {(categoryData as FontPropertiesRecord).default?.lineHeight}
                                        </td>
                                    </tr>
                                    <tr className="hd-typo__row">
                                        <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                                        Font Family
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell">
                                            <Code value={`--hop-${type}-font-family`}>{`--hop-${type}-font-family`}</Code>
                                        </td>
                                        <td className="hd-table__cell hd-typo__cell">
                                            {(categoryData as FontPropertiesRecord).default?.fontFamily}
                                        </td>
                                    </tr>
                                </React.Fragment>
                            );
                        }
                    })}
                </tbody>
            </table>
            {Object.entries(filteredData).map(([category, categoryData]) => {
                if (typeof categoryData === "object" && !Array.isArray(categoryData) && Object.keys(categoryData).some(key => Sizes.includes(key as typeof Sizes[number]))) {
                    const variantEntries = Object.entries(categoryData as CategoryData).flatMap(([size, properties]) => (
                        Object.entries(properties).filter(([fontWeight]) => fontWeight !== "default").map(([fontWeight, fontWeightData]) => ({ size, fontWeight, fontWeightData }))
                    ));

                    if (variantEntries.length > 0) {
                        return (
                            <React.Fragment key={category}>
                                <h3 className="hd-title hd-title--level3">Style Variations</h3>
                                <table className="hd-table hd-typo-table" aria-label="Tokens" key={`${category}`}>

                                    <thead>
                                        <tr>
                                            <th className="hd-table__column">Name</th>
                                            <th className="hd-table__column" colSpan={5}>Value</th>
                                            <th className="hd-table__column">Preview</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {variantEntries.map(({ size, fontWeight, fontWeightData }) => (
                                            <tr className="hd-typo__row hd-top__row" key={`${size}-${fontWeight}`}>

                                                <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                                                    {size}-{fontWeight}
                                                </td>
                                                <td className="hd-table__cell hd-typo__cell">
                                                    font-weight
                                                </td>
                                                <td className="hd-table__cell hd-typo__cell">
                                                    <Code value={`--hop-${type}-${size}-${fontWeight}-font-weight`}>{`--hop-${type}-${size}-${fontWeight}-font-weight`}</Code>
                                                </td>
                                                <td className="hd-table__cell hd-typo__cell">
                                                    {(fontWeightData as FontPropertiesRecord["default"])?.fontWeight}
                                                </td>
                                                <td className="hd-table__cell hd-typo__cell">
                                                    <TypographyPreview style={{ ...previewAdditionalStyles }}
                                                        values={{
                                                            lineHeight: (fontWeightData as FontPropertiesRecord["default"])?.lineHeight,
                                                            fontSize: (fontWeightData as FontPropertiesRecord["default"])?.fontSize,
                                                            fontWeight: (fontWeightData as FontPropertiesRecord["default"])?.fontWeight,
                                                            fontFamily: (fontWeightData as FontPropertiesRecord["default"])?.fontFamily
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </React.Fragment>
                        );
                    }
                }

                return null;
            })}
        </div>
    );
};

export default TypographyTable;

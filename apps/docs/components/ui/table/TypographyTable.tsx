"use client";

import TypographyPreview from "@/components/preview/TypographyPreview";
import Code from "@/components/ui/code/Code";
import tokens from "../../../datas/tokens.json";

import "./table.css";

interface TypographyTableProps {
    type: string;
}

const TypographyTable = ({ type }: TypographyTableProps) => {
    interface JsonData {
        [property: string]: {
            name: string;
            value: string;
        }[];
    }

    type fontProperty = "fontFamily" | "fontSize" | "fontWeight" | "lineHeight";

    type Size = "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs";

    type GroupedItems = Record<Size, Record<fontProperty, string>>;

    function groupItemsByPropertiesAndSizes(jsonData: JsonData, itemType: string): GroupedItems {
        const sizes = ["3xl", "2xl", "xl", "lg", "md", "sm", "xs"];
        const properties = ["fontFamily", "fontSize", "fontWeight", "lineHeight"];

        const groupedItems: GroupedItems = {} as GroupedItems;

        sizes.forEach(size => {
            const sizeKey = size as Size;
            groupedItems[sizeKey] = {} as Record<fontProperty, string>;

            properties.forEach(property => {
                groupedItems[sizeKey][property as fontProperty] = "";
                jsonData[property].forEach(item => {
                    if (item.name.includes(itemType) && item.name.includes(size)) {
                        groupedItems[sizeKey][property as fontProperty] = item.value;
                    }
                });
            });

            if (Object.values(groupedItems[sizeKey]).every(value => !value)) {
                delete groupedItems[sizeKey];
            }
        });

        return groupedItems;
    }

    const filteredData = groupItemsByPropertiesAndSizes(tokens.semantic, type);

    const listItems = Object.keys(filteredData).map(size => {
        const {
            fontFamily,
            fontSize,
            fontWeight,
            lineHeight
        } = filteredData[size as Size];

        return (
            <>
                <tr key={size} className="hd-typo__row">
                    <td className="hd-table__cell hd-typo__cell" rowSpan={4}>{size}</td>
                    <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                        Font Size
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        <Code value={`--hop-${type}-${size}-font-size`}>{`--hop-${type}-${size}-font-size`}</Code>
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        {fontSize}
                    </td>
                    <td className="hd-table__cell hd-typo__cell" rowSpan={4}>
                        <TypographyPreview values={{ lineHeight, fontSize, fontWeight, fontFamily }} />
                    </td>
                </tr>
                <tr>
                    <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                        Font Weight
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        <Code value={`--hop-${type}-${size}-font-weight`}>{`--hop-${type}-${size}-font-weight`}</Code>
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        {fontWeight}
                    </td>
                </tr>
                <tr>
                    <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                        Line Height
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        <Code value={`--hop-${type}-${size}-line-height`}>{`--hop-${type}-${size}-line-height`}</Code>
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        {lineHeight}
                    </td>
                </tr>
                <tr>
                    <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                        Font-Family
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        <Code value={`--hop-${type}-${size}-font-family`}>{`--hop-${type}-${size}-font-family`}</Code>
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        {fontFamily}
                    </td>
                </tr>
            </>
        );
    });

    return (
        <>
            <table className="hd-table hd-typo-table" aria-label="Tokens">
                <thead>
                    <tr>
                        <th className="hd-table__column">Name</th>
                        <th className="hd-table__column" colSpan={5}>Values</th>
                        <th className="hd-table__column">Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        </>
    );
};

export default TypographyTable;

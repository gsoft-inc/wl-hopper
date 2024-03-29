"use client";

import React from "react";
import TypographyPreview from "@/app/ui/tokens/preview/TypographyPreview";
import Code from "@/components/code/Code";

import "./table.css";

interface TypographyVariantTableProps {
    data: Record<string, { name: string; value: string }[]>;
    type: string;
}

const TypographyVariantTable = ({ type, data }: TypographyVariantTableProps) => {
    const tokenData = data["fontWeight"];

    const filteredDataByType: Array<{ name: string; value: string }> = tokenData.filter(item =>
        item.name.includes(type)
    );

    const filteredDataByWeightVariation: Array<{ name: string; value: string }> = filteredDataByType.filter(item =>
        item.name.includes("bold") ||
        item.name.includes("semibold") ||
        item.name.includes("medium")
    );

    const listItems = filteredDataByWeightVariation.map(item => {
        const fontWeight = item.value;

        return (
            <React.Fragment key={`${item.name}`}>
                <tr className="hd-typo__row hd-top__row">
                    <td className="hd-table__cell hd-typo__cell">{item.name}</td>
                    <td className="hd-table__cell hd-typo__cell rowSpan={2}">
                        <Code value={`--${item.name}`}>{`--${item.name}`}</Code>
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        {item.value}
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        <TypographyPreview values={{ fontWeight }} />
                    </td>
                </tr>
            </React.Fragment>
        );
    });

    return (
        <table className="hd-table hd-typo-table" aria-label="Tokens">
            <thead>
                <tr>
                    <th className="hd-table__column">Name</th>
                    <th className="hd-table__column" colSpan={2}>Value</th>
                    <th className="hd-table__column">Preview</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </table>
    );
};

export default TypographyVariantTable;

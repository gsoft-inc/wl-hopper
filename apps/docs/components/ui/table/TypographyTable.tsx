"use client";

import TypographyPreview from "@/components/preview/TypographyPreview";
import Code from "@/components/ui/code/Code";
import tokens from "../../../datas/tokens.json";

import "./table.css";

interface TypographyTableProps {
    type: string;
    data: {
        [key: string]: {
            "font-family": { $value: string };
            "font-size": { $type: string; $value: string };
            "font-weight": { $type: string; $value: string };
            "line-height": { $type: string; $value: string };
        };
    };
}

const TypographyTable = ({ type, data }: TypographyTableProps) => {
    const headings = Object.keys(data);

    const listItems = headings.map(heading => {
        const {
            "font-family": fontFamily,
            "font-size": fontSize,
            "font-weight": fontWeight,
            "line-height": lineHeight
        } = data[heading];

        const lineHeightTokens = tokens.core.lineHeight;
        const fontFamilyTokens = tokens.core.fontFamily;
        const fontWeightTokens = tokens.core.fontWeight;
        const fontSizeTokens = tokens.core.fontSize;

        const getFontSize = (value: string) => {
            const lastPart = value.match(/\.(\d+)(?=\})/);

            if (lastPart) {
                return lastPart[1];
            }
        };

        const getFontWeight = (value: string) => {
            const lastPart = value.match(/\.(\d+)(?=\})/);

            if (lastPart) {
                return lastPart[1];
            }
        };

        const getlineHeight = (value: string) => {
            const lastPart = value.match(/\.([\d-]+)(?=\})/);

            if (lastPart) {
                return lastPart[1];
            }
        };

        const getFontFamily = (value: string) => {
            const lastPart = value.match(/\.([^\s.}]+)(?=\})/);

            if (lastPart) {
                return lastPart[1];
            }
        };

        const fontSizeValue = fontSizeTokens.find(item => item.name === `hop-font-size-${getFontSize(fontSize.$value)}`)?.value;
        const fontWeightValue = fontWeightTokens.find(item => item.name === `hop-font-weight-${getFontWeight(fontWeight.$value)}`)?.value;
        const fontFamilyValue = fontFamilyTokens.find(item => item.name === `hop-font-family-${getFontFamily(fontFamily.$value)}`)?.value;
        const lineHeightValue = lineHeightTokens.find(item => item.name === `hop-line-height-${getlineHeight(lineHeight.$value)}`)?.value;

        return (
            <>
                <tr key={heading} className="hd-typo__row">
                    <td className="hd-table__cell hd-typo__cell" rowSpan={4}>{heading}</td>
                    <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                        Font Size
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        <Code value={`--hop-${type}-${heading}-font-size`}>{`--hop-${type}-${heading}-font-size`}</Code>
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        {fontSizeValue}
                    </td>
                    <td className="hd-table__cell hd-typo__cell" rowSpan={4}>
                        <TypographyPreview values={{ lineHeight: lineHeightValue, fontSize: fontSizeValue, fontWeight: fontWeightValue, fontFamily: fontFamilyValue }} />
                    </td>
                </tr>
                <tr>
                    <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                        Font Weight
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        <Code value={`--hop-${type}-${heading}-font-weight`}>{`--hop-${type}-${heading}-font-weight`}</Code>
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        {fontWeightValue}
                    </td>
                </tr>
                <tr>
                    <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                        Line Height
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        <Code value={`--hop-${type}-${heading}-line-height`}>{`--hop-${type}-${heading}-line-height`}</Code>
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        {lineHeightValue}
                    </td>
                </tr>
                <tr>
                    <td className="hd-table__cell hd-typo__cell" colSpan={3}>
                        Font-Family
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        <Code value={`--hop-${type}-${heading}-font-family`}>{`--hop-${type}-${heading}-font-family`}</Code>
                    </td>
                    <td className="hd-table__cell hd-typo__cell">
                        {fontFamilyValue}
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

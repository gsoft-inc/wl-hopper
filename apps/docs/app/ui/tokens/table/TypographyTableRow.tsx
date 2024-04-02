import type { ComponentProps, ReactNode } from "react";
import TypographyPreview from "../preview/TypographyPreview";
import Code from "@/components/code/Code";
import type { FontProperties, Size } from "./getTypographyTokens";
import "./table.css";

interface TypographyTableRowProps {
    type: string;
    properties: FontProperties;
    size?: Size;
}

export function TypographyTableRow({ type, properties, size }: TypographyTableRowProps) {
    const {
        fontFamily,
        fontSize,
        fontWeight,
        lineHeight,
        topOffset,
        bottomOffset
    } = properties;

    let previewAdditionalStyles = {};

    if (type === "overline") {
        previewAdditionalStyles = {
            textTransform: "uppercase",
            letterSpacing: "0.015rem"
        };
    }

    return (
        <tr className="hd-typo__row hd-top__row">
            {size && <td className="hd-table__cell hd-typo__cell">{size}</td>}
            <PropertiesCell properties={properties} />
            <td className="hd-table__cell hd-typo__cell">
                <TypographyPreview
                    style={{ ...previewAdditionalStyles }}
                    values={{
                        lineHeight: lineHeight?.value,
                        fontSize: fontSize?.value,
                        fontWeight: fontWeight?.value,
                        fontFamily: fontFamily?.value,
                        topOffset: topOffset?.value,
                        bottomOffset: bottomOffset?.value
                    }}
                />
            </td>
        </tr>
    );
}

interface PropertiesCellProps {
    properties: FontProperties;
}

function PropertiesCell({ properties } : PropertiesCellProps) {
    return (
        <td className="hd-table__cell hd-typo__cell">
            <table>
                <tbody className="hd-properties-table__tbody">
                    {properties.fontSize && (
                        <PropertyRow
                            key="fontSize"
                            tokenName={properties.fontSize.tokenName}
                            displayName="Font Size"
                            value={properties.fontSize.value}
                        />
                    )}
                    {properties.fontWeight && (
                        <PropertyRow
                            key="fontWeight"
                            tokenName={properties.fontWeight.tokenName}
                            displayName="Font Weight"
                            value={properties.fontWeight.value}
                        />
                    )}
                    {properties.lineHeight && (
                        <PropertyRow
                            key="lineHeight"
                            tokenName={properties.lineHeight.tokenName}
                            displayName="Line Height"
                            value={properties.lineHeight.value}
                        />
                    )}
                    {properties.fontFamily && (
                        <PropertyRow
                            key="fontFamily"
                            tokenName={properties.fontFamily.tokenName}
                            displayName="Font Family"
                            value={properties.fontFamily.value}
                        />
                    )}
                    {properties.topOffset && (
                        <PropertyRow
                            key="topOffset"
                            className="hd-typo-offset-cell"
                            tokenName={properties.topOffset.tokenName}
                            displayName={<>Top Offset<a href="#offset-tokens" className="hd-table__link"><sup>1</sup></a></>}
                            value={properties.topOffset.value}
                        />
                    )}
                    {properties.bottomOffset && (
                        <PropertyRow
                            key="bottomOffset"
                            className={properties.topOffset ? undefined : "hd-typo-offset-cell"}
                            tokenName={properties.bottomOffset.tokenName}
                            displayName={<>Bottom Offset<a href="#offset-tokens" className="hd-table__link"><sup>1</sup></a></>}
                            value={properties.bottomOffset.value}
                        />
                    )}
                </tbody>
            </table>
        </td>
    );
}

interface PropertyRowProps extends Omit<ComponentProps<"tr">, "children">{
    tokenName: string;
    displayName: ReactNode;
    value: string;
}

function PropertyRow({ tokenName, displayName, value, ...rest }: PropertyRowProps) {
    const tokenValue = value;

    return (
        <tr {...rest} >
            <td style={{
                textWrap: "nowrap",
                padding: "var(--hd-space-1)"
            }}
            >
                {displayName}
            </td>
            <td style={{
                textWrap: "nowrap",
                padding: "var(--hd-space-1)"
            }}
            >
                <Code value={tokenName}>{tokenName}</Code>
            </td>
            <td style={{
                padding: "var(--hd-space-1)"
            }}
            >
                {tokenValue}
            </td>
        </tr>
    );
}

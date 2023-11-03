import type { Globals, Property } from "csstype";
import type { Breakpoint } from "../responsive/Breakpoints.ts";
import { parseResponsiveValue } from "../responsive/useResponsiveValue.tsx";
import { isNil } from "../utils/assertion.ts";
import {
    BackgroundColorAliases,
    BorderColorAliases,
    BorderRadiusPrefix,
    BorderRadiusScale,
    BoxShadowAliases,
    BoxShadowPrefix,
    BoxShadowScale,
    ColorPrefix,
    FontSizePrefix,
    FontSizeScale,
    FontWeightPrefix,
    FontWeightScale,
    HopperColors,
    HopperPrefix,
    IconColorAliases,
    LineHeightPrefix,
    LineHeightScale,
    SizingPrefix,
    SizingScale,
    SpacePrefix,
    SpacingScale,
    TextColorAliases
} from "./generated/token-scales.ts";

export const ColorExpressionTypes = ["#", "rgb", "rgba", "hsl", "hsla"] as const;
export const DefaultBorderWidthAndStyle = "1px solid";

export function createValuesMapping<T extends string | number>(values: readonly T[], template: (value: T) => string) {
    return values.reduce((acc, x) => {
        acc[x] = template(x);

        return acc;
    }, {} as Record<T, string>);
}
export function normalizeVariable(name: string | number, prefix?: string) {
    return isNil(prefix) ? `--${HopperPrefix}-${name}` : `--${prefix}-${name}`;
}

function composePrefixes(...rest: string[]) {
    return rest.reduce((acc, prefix) => {
        return !isNil(prefix) ? `${acc}${acc !== "" ? "-" : ""}${prefix}` : acc;
    }, "");
}

function createPrefixedValueTemplate(prefix: string) {
    return (value: string | number) => `var(${normalizeVariable(value, prefix)})`;
}

// mappings
export const SpacingMapping = createValuesMapping(SpacingScale, createPrefixedValueTemplate(SpacePrefix));
export const SizingMapping = createValuesMapping(SizingScale, createPrefixedValueTemplate(SizingPrefix));
export const ColorMapping = createValuesMapping(HopperColors, createPrefixedValueTemplate(ColorPrefix));

export const BackgroundColorMapping = {
    ...createValuesMapping(BackgroundColorAliases, createPrefixedValueTemplate(composePrefixes(ColorPrefix, "bg"))),
    ...ColorMapping
};


export const BorderMapping = {
    ...createValuesMapping(BorderColorAliases, value => `${DefaultBorderWidthAndStyle} var(${normalizeVariable(value, composePrefixes(ColorPrefix, "b"))})`),
    ...createValuesMapping(HopperColors, value => `${DefaultBorderWidthAndStyle} var(${normalizeVariable(value, ColorPrefix)})`)
};

export const BorderRadiusMapping = createValuesMapping(BorderRadiusScale, createPrefixedValueTemplate(BorderRadiusPrefix));

export const BoxShadowMapping = {
    ...createValuesMapping(BoxShadowScale, createPrefixedValueTemplate(BoxShadowPrefix)),
    ...createValuesMapping(BoxShadowAliases, createPrefixedValueTemplate(BoxShadowPrefix))
};

export const FontSizeMapping = createValuesMapping(FontSizeScale, createPrefixedValueTemplate(FontSizePrefix));


export const FontWeightMapping = createValuesMapping(FontWeightScale, createPrefixedValueTemplate(FontWeightPrefix));

export const IconColorMapping = {
    ...createValuesMapping(IconColorAliases, createPrefixedValueTemplate(composePrefixes(ColorPrefix, "icon"))),
    ...ColorMapping
};

export const LineHeightMapping = createValuesMapping(LineHeightScale, createPrefixedValueTemplate(LineHeightPrefix));

export const TextColorMapping = {
    ...createValuesMapping(TextColorAliases, createPrefixedValueTemplate(composePrefixes(ColorPrefix, "text"))),
    ...ColorMapping
};
// Custom CSS values to use instead of Property.X to offer less useless values in intellisense and
// stop showing too many values in props docs.
export type CssColor = Globals | "currentcolor" | "transparent";
export type CssFill = Globals | "child" | "context-fill" | "context-stroke" | "none" | "transparent" | "currentcolor";
export type CssGrid = "auto" | "max-content" | "min-content" | Globals;
export type CssGridTemplate = "none" | "subgrid" | CssGrid;
export type CssBoxShadow = Globals | "none";
export type CssBorder = Globals | 0;
export type CssBorderRadius = Globals | 0;
export type CssGap = Globals | "normal" | 0;

export type BackgroundColorValue = keyof typeof BackgroundColorMapping | CssColor;
export type UNSAFE_BackgroundColorValue = keyof typeof BackgroundColorMapping | Property.BackgroundColor ;

export type BorderValue = keyof typeof BorderMapping | CssColor | CssBorder;
export type UNSAFE_BorderValue = keyof typeof BorderMapping | Property.Border;

export type BorderRadiusValue = keyof typeof BorderRadiusMapping | CssBorderRadius;
export type UNSAFE_BorderRadiusValue = keyof typeof BorderRadiusMapping | Property.BorderRadius;

export type BoxShadowValue = keyof typeof BoxShadowMapping | CssBoxShadow;
export type UNSAFE_BoxShadowValue = keyof typeof BoxShadowMapping | Property.BoxShadow;

export type ColorValue = keyof typeof TextColorMapping | CssColor;
export type UNSAFE_ColorValue = keyof typeof TextColorMapping | Property.Color;

export type ColumnGapValue = keyof typeof SpacingMapping | CssGap;
export type UNSAFE_ColumnGapValue = keyof typeof SpacingMapping | Property.ColumnGap;

export type FillValue = keyof typeof IconColorMapping | CssFill;
export type UNSAFE_FillValue = keyof typeof IconColorMapping | Property.Fill;

export type FontSizeValue = keyof typeof FontSizeMapping | Globals;
export type UNSAFE_FontSizeValue = keyof typeof FontSizeMapping | Property.FontSize;

export type FontWeightValue = keyof typeof FontWeightMapping | Globals;
export type UNSAFE_FontWeightValue = keyof typeof FontWeightMapping | Property.FontWeight;

export type GapValue = keyof typeof SpacingMapping | CssGap;
export type UNSAFE_GapValue = keyof typeof SpacingMapping | Property.Gap;

export type GridAutoColumnsValue = keyof typeof SizingMapping | CssGrid;
export type UNSAFE_GridAutoColumnsValue = keyof typeof SizingMapping | Property.GridAutoColumns;

export type GridAutoRowsValue = keyof typeof SizingMapping | CssGrid;
export type UNSAFE_GridAutoRowsValue = keyof typeof SizingMapping | Property.GridAutoRows;

export type GridTemplateColumnsValue = keyof typeof SizingMapping | CssGridTemplate;
export type UNSAFE_GridTemplateColumnsValue = keyof typeof SizingMapping | Property.GridTemplateColumns;

export type GridTemplateRowsValue = keyof typeof SizingMapping | CssGridTemplate;
export type UNSAFE_GridTemplateRowsValue = keyof typeof SizingMapping | Property.GridTemplateRows;

export type HeightValue = keyof typeof SizingMapping | Globals;
export type UNSAFE_HeightValue = keyof typeof SizingMapping | Property.Height;

export type LineHeightValue = keyof typeof LineHeightMapping | Globals;
export type UNSAFE_LineHeightValue = keyof typeof LineHeightMapping | Property.LineHeight;

export type MarginValue = keyof typeof SpacingMapping | Globals;
export type UNSAFE_MarginValue = keyof typeof SpacingMapping | Property.Margin;

export type PaddingValue = keyof typeof SpacingMapping | Globals;
export type UNSAFE_PaddingValue = keyof typeof SpacingMapping | Property.Padding;

export type RowGapValue = keyof typeof SpacingMapping | CssGap;
export type UNSAFE_RowGapValue = keyof typeof SpacingMapping | Property.RowGap;

export type SizingValue = keyof typeof SizingMapping | Globals;
export type UNSAFE_SizingValue = keyof typeof SizingMapping | Property.Scale;

export type SpacingValue = keyof typeof SpacingMapping | Globals;
export type UNSAFE_SpacingValue = keyof typeof SpacingMapping | Property.Scale;

export type StrokeValue = keyof typeof IconColorMapping | CssFill;
export type UNSAFE_StrokeValue = keyof typeof IconColorMapping | Property.Stroke;

export type WidthValue = keyof typeof SizingMapping | Globals;
export type UNSAFE_WidthValue = keyof typeof SizingMapping | Property.Width;

export type GridColumSpanValue = number;
export type GridRowSpanValue = number;

export function parseResponsiveSystemValue<TValue extends string | number>(value: TValue | undefined, systemValues: Record<TValue, string>, matchedBreakpoints: Breakpoint[]) {
    if (isNil(value)) {
        return value;
    }

    // Quick lookup since most values will be a non responsive system value and will not requires to parse for a responsive value.
    const systemValue = getSystemValue(value, systemValues);

    if (!isNil(systemValue)) {
        return systemValue;
    }

    const underlyingValue = parseResponsiveValue(value, matchedBreakpoints);

    if (!isNil(underlyingValue)) {
        const underlyingSystemValue = getSystemValue(underlyingValue, systemValues);

        if (!isNil(underlyingSystemValue)) {
            return underlyingSystemValue;
        }
    }

    return underlyingValue;
}

export function getSystemValue<T extends string | number>(value: T, systemValues: Record<T, string>) {
    return systemValues[value];
}

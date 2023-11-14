import type { Globals, Property } from "csstype";
import type { Breakpoint } from "../responsive/Breakpoints.ts";
import { parseResponsiveValue } from "../responsive/useResponsiveValue.tsx";
import { isNil } from "../utils/assertion.ts";
import {
    BackgroundColors,
    CoreSpace,
    DataVizColors,
    Elevation,
    FontFamily,
    FontSize,
    FontWeight,
    HopperColors,
    HopperVariablePrefix,
    IconColors,
    LineHeight,
    SemanticComplexMarginSpace,
    SemanticComplexPaddingSpace,
    SemanticSimpleMarginSpace,
    SemanticSimplePaddingSpace,
    Shape,
    TextColors
} from "./generated/styled-system-to-token-mappings.ts";

export const ColorExpressionTypes = [
    "#",
    "rgb",
    "rgba",
    "hsl",
    "hsla"
] as const;

export const DefaultBorderWidthAndStyle = "1px solid";

function createMapping<T extends string>(mappings: Record<T, string>, template: (value: string) => string = createValueTemplate) {
    return Object.entries<string>(mappings).reduce((acc, [key, value]) => {
        acc[key as T] = template(value);

        return acc;
    }, {} as Record<T, string>);
}

function createValueTemplate(value: string) {
    return `var(${`${HopperVariablePrefix}-${value}`})`;
}

function createBorderValueTemplate(value: string) {
    return `${DefaultBorderWidthAndStyle} ${createValueTemplate(value)}`;
}

// mappings
export const ColorMapping = createMapping(HopperColors);
export const DataVizColorMapping = createMapping(DataVizColors);

export const BackgroundColorMapping = {
    ...createMapping(BackgroundColors),
    ...ColorMapping,
    ...DataVizColorMapping
};

export const BorderMapping = {
    ...createMapping(BackgroundColors, createBorderValueTemplate),
    ...createMapping(HopperColors, createBorderValueTemplate),
    ...createMapping(DataVizColors, createBorderValueTemplate)
};

export const TextColorMapping = {
    ...createMapping(TextColors),
    ...ColorMapping,
    ...DataVizColorMapping
};

export const IconColorMapping = {
    ...createMapping(IconColors),
    ...ColorMapping,
    ...DataVizColorMapping
};

export const BoxShadowMapping = createMapping(Elevation);

export const FontSizeMapping = createMapping(FontSize);
export const FontWeightMapping = createMapping(FontWeight);
export const LineHeightMapping = createMapping(LineHeight);
export const FontFamilyMapping = createMapping(FontFamily);

export const BorderRadiusMapping = createMapping(Shape);

export const SpaceMapping = createMapping(CoreSpace);

export const SimplePaddingMapping = {
    ...createMapping(SemanticSimplePaddingSpace),
    ...SpaceMapping
};

export const ComplexPaddingMapping = {
    ...SimplePaddingMapping,
    ...createMapping(SemanticComplexPaddingSpace)
};

export const SimpleMarginMapping = {
    ...createMapping(SemanticSimpleMarginSpace),
    ...SpaceMapping
};

export const ComplexMarginMapping = {
    ...SimpleMarginMapping,
    ...createMapping(SemanticComplexMarginSpace)
};

export const SizingMapping = {
    ...SpaceMapping
    // TODO: Sizing scale still missing, only core tokens are available at the moment
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

export type ColumnGapValue = keyof typeof SimpleMarginMapping | CssGap;
export type UNSAFE_ColumnGapValue = keyof typeof SimpleMarginMapping | Property.ColumnGap;

export type FillValue = keyof typeof IconColorMapping | CssFill;
export type UNSAFE_FillValue = keyof typeof IconColorMapping | Property.Fill;

export type FontSizeValue = keyof typeof FontSizeMapping | Globals;
export type UNSAFE_FontSizeValue = keyof typeof FontSizeMapping | Property.FontSize;

export type FontFamilyValue = keyof typeof FontFamilyMapping | Globals;
export type UNSAFE_FontFamilyValue = keyof typeof FontFamilyMapping | Property.FontFamily;

export type FontWeightValue = keyof typeof FontWeightMapping | Globals;
export type UNSAFE_FontWeightValue = keyof typeof FontWeightMapping | Property.FontWeight;

export type GapValue = keyof typeof SimpleMarginMapping | CssGap;
export type UNSAFE_GapValue = keyof typeof SimpleMarginMapping | Property.Gap;

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

export type SimpleMarginValue = keyof typeof SimpleMarginMapping | Globals;
export type UNSAFE_SimpleMarginValue = keyof typeof SimpleMarginMapping | Property.Margin;
export type ComplexMarginValue = keyof typeof ComplexMarginMapping | Globals;
export type UNSAFE_ComplexMarginValue = keyof typeof ComplexMarginMapping | Property.Margin;

export type SimplePaddingValue = keyof typeof SimplePaddingMapping | Globals;
export type UNSAFE_SimplePaddingValue = keyof typeof SimplePaddingMapping | Property.Padding;
export type ComplexPaddingValue = keyof typeof ComplexPaddingMapping | Globals;
export type UNSAFE_ComplexPaddingValue = keyof typeof ComplexPaddingMapping | Property.Padding;

export type RowGapValue = keyof typeof SimpleMarginMapping | CssGap;
export type UNSAFE_RowGapValue = keyof typeof SimpleMarginMapping | Property.RowGap;

export type SizingValue = keyof typeof SizingMapping | Globals;
export type UNSAFE_SizingValue = keyof typeof SizingMapping | Property.Scale;

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

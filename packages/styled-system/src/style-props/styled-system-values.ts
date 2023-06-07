import type { BackgroundColorAliases, BorderColorAliases, BorderRadiusScale, BoxShadowAliases, OrbitColors } from "@hopper-ui/fake-tokens";
import { parseResponsiveValue } from "../useResponsiveValue.tsx";
import type { Globals, Property } from "csstype";
import { isNil } from "../core-external-package/assertion.tsx";
import type { BoxShadowMapping, FontSizeMapping, FontWeightMapping, IconColorMapping, LineHeightMapping, SizingMapping, SpacingMapping, TextColorMapping } from "./css-variable-mappings.ts";
import type { Breakpoint } from "../BreakpointProvider.tsx";

export const GlobalValues = ["inherit", "initial", "revert", "unset"]; // TODO: probably not needed, we can just use globals from csstype
export const ColorExpressionTypes = ["#", "rgb", "rgba", "hsl", "hsla"] as const;
export const DefaultBorderWidthAndStyle = "1px solid";

// Custom CSS color type to use instead of Property.Color to offer less useless values in intellisense and
// stop showing too many values in props docs.
// eslint-disable-next-line @typescript-eslint/ban-types
export type CssColor = Globals | "currentcolor" | "transparent" | (string & {});

// Custom fill type to use instead of Property.Fill to offer less useless values in intellisense and
// stop showing too many values in props docs.
// eslint-disable-next-line @typescript-eslint/ban-types
export type CssFill = Globals | "child" | "context-fill" | "context-stroke" | "none" | "transparent" | (string & {});

type ArrayToType<T> = T extends ReadonlyArray<infer U> ? U : T extends Array<infer U> ? U : T;

export type BackgroundColorValue = ArrayToType<typeof BackgroundColorAliases | typeof OrbitColors> ; // TODO: Globals | "currentcolor" | "transparent" are not accepted right now
export type UNSAFE_BackgroundColorValue = ArrayToType<typeof BackgroundColorAliases | typeof OrbitColors> | CssColor ;

export type BorderValue = ArrayToType<typeof BorderColorAliases | typeof OrbitColors>; // TODO: Globals?
export type UNSAFE_BorderValue = ArrayToType<typeof BorderColorAliases | typeof OrbitColors> | Property.Border;

export type BorderRadiusValue = ArrayToType<typeof BorderRadiusScale>; // TODO: 0 not allowed, Globals?
export type UNSAFE_BorderRadiusValue = ArrayToType<typeof BorderRadiusScale> | Property.BorderRadius;

export type BoxShadowValue = ArrayToType<typeof BoxShadowAliases | typeof BoxShadowAliases>; // TODO: Globals?
export type UNSAFE_BoxShadowValue = keyof typeof BoxShadowMapping | Property.BoxShadow;

export type ColorValue = keyof typeof TextColorMapping;// TODO: Globals? transparent  currentcolor
export type UNSAFE_ColorValue = keyof typeof TextColorMapping | CssColor;

export type ColumnGapValue = keyof typeof SpacingMapping; // TODO: Globals?
export type UNSAFE_ColumnGapValue = keyof typeof SpacingMapping | Property.ColumnGap;

export type FillValue = keyof typeof IconColorMapping; // TODO: Globals?
export type UNSAFE_FillValue = keyof typeof IconColorMapping | CssFill;

export type FontSizeValue = keyof typeof FontSizeMapping;
export type UNSAFE_FontSizeValue = keyof typeof FontSizeMapping | Property.FontSize;

export type FontWeightValue = keyof typeof FontWeightMapping; // TODO: Globals?
export type UNSAFE_FontWeightValue = keyof typeof FontWeightMapping | (typeof GlobalValues)[number];

export type GapValue = keyof typeof SpacingMapping;// TODO: Globals?
export type UNSAFE_GapValue = keyof typeof SpacingMapping | Property.Gap;

export type GridAutoColumnsValue = keyof typeof SizingMapping;// TODO: Globals?
export type UNSAFE_GridAutoColumnsValue = keyof typeof SizingMapping | Property.GridAutoColumns;

export type GridAutoRowsValue = keyof typeof SizingMapping;
export type UNSAFE_GridAutoRowsValue = keyof typeof SizingMapping | Property.GridAutoRows;

export type GridTemplateColumnsValue = keyof typeof SizingMapping;
export type UNSAFE_GridTemplateColumnsValue = keyof typeof SizingMapping | Property.GridTemplateColumns;

export type GridTemplateRowsValue = keyof typeof SizingMapping;
export type UNSAFE_GridTemplateRowsValue = keyof typeof SizingMapping | Property.GridTemplateRows;

export type HeightValue = keyof typeof SizingMapping;
export type UNSAFE_HeightValue = keyof typeof SizingMapping | Property.Height;

export type LineHeightValue = keyof typeof LineHeightMapping;
export type UNSAFE_LineHeightValue = keyof typeof LineHeightMapping | Property.LineHeight;

export type MarginValue = keyof typeof SpacingMapping;
export type UNSAFE_MarginValue = keyof typeof SpacingMapping | Property.Margin;

export type PaddingValue = keyof typeof SpacingMapping;
export type UNSAFE_PaddingValue = keyof typeof SpacingMapping | Property.Padding;

export type RowGapValue = keyof typeof SpacingMapping;
export type UNSAFE_RowGapValue = keyof typeof SpacingMapping | Property.RowGap;

export type SizingValue = keyof typeof SizingMapping | Property.Scale;
export type UNSAFE_SizingValue = keyof typeof SizingMapping | Property.Scale;

export type SpacingValue = keyof typeof SpacingMapping;
export type UNSAFE_SpacingValue = keyof typeof SpacingMapping | Property.Scale;

export type StrokeValue = keyof typeof IconColorMapping;
export type UNSAFE_StrokeValue = keyof typeof IconColorMapping | Property.Stroke;

export type WidthValue = keyof typeof SizingMapping;
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
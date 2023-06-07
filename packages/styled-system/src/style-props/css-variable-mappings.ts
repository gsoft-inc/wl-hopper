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
    HopperPrefix,
    IconColorAliases,
    LineHeightPrefix,
    LineHeightScale,
    OrbitColors,
    SizingPrefix,
    SizingScale,
    SpacePrefix,
    SpacingScale,
    TextColorAliases
} from "@hopper-ui/fake-tokens";
import { isNil } from "../core-external-package/assertion.tsx";
import { DefaultBorderWidthAndStyle } from "./styled-system-values.ts";

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

// TODO, font-variation-settings might not be required
const fontVariationSettingsValueTemplate = (value: string | number) => `'wght' var(${normalizeVariable(value, FontWeightPrefix)})`;

// mappings
export const SpacingMapping = createValuesMapping(SpacingScale, createPrefixedValueTemplate(SpacePrefix));
export const SizingMapping = createValuesMapping(SizingScale, createPrefixedValueTemplate(SizingPrefix));
export const ColorMapping = createValuesMapping(OrbitColors, createPrefixedValueTemplate(ColorPrefix));

export const BackgroundColorMapping = {
    ...createValuesMapping(BackgroundColorAliases, createPrefixedValueTemplate(composePrefixes(ColorPrefix, "bg"))),
    ...ColorMapping
};


export const BorderMapping = {
    ...createValuesMapping(BorderColorAliases, value => `${DefaultBorderWidthAndStyle} var(${normalizeVariable(value, composePrefixes(ColorPrefix, "b"))})`),
    ...createValuesMapping(OrbitColors, value => `${DefaultBorderWidthAndStyle} var(${normalizeVariable(value, ColorPrefix)})`)
};

export const BorderRadiusMapping = createValuesMapping(BorderRadiusScale, createPrefixedValueTemplate(BorderRadiusPrefix));

export const BoxShadowMapping = {
    ...createValuesMapping(BoxShadowScale, createPrefixedValueTemplate(BoxShadowPrefix)),
    ...createValuesMapping(BoxShadowAliases, createPrefixedValueTemplate(BoxShadowPrefix))
};

export const FontSizeMapping = createValuesMapping(FontSizeScale, createPrefixedValueTemplate(FontSizePrefix));


export const FontWeightMapping = createValuesMapping(FontWeightScale, fontVariationSettingsValueTemplate);

export const IconColorMapping = {
    ...createValuesMapping(IconColorAliases, createPrefixedValueTemplate(composePrefixes(ColorPrefix, "icon"))),
    ...ColorMapping
};

export const LineHeightMapping = createValuesMapping(LineHeightScale, createPrefixedValueTemplate(LineHeightPrefix));

export const TextColorMapping = {
    ...createValuesMapping(TextColorAliases, createPrefixedValueTemplate(composePrefixes(ColorPrefix, "text"))),
    ...ColorMapping
};
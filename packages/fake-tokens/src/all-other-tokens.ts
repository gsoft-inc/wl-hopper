export const HopperPrefix = "hop";

export const SpacePrefix = `${HopperPrefix}-sp` as const;
export const SizingPrefix = `${HopperPrefix}-sz` as const;
export const FontSizePrefix = `${HopperPrefix}-fs` as const;
export const FontWeightPrefix = `${HopperPrefix}-fw` as const;
export const LineHeightPrefix = `${HopperPrefix}-lh` as const;
export const BorderRadiusPrefix = `${HopperPrefix}-br` as const;
export const BoxShadowPrefix = `${HopperPrefix}-bs` as const;
export const ColorPrefix = `${HopperPrefix}-color` as const;

export const SizingScale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] as const;

export const SpacingScale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as const;

export const HopperColors = [
    "white",
    "black",
    "gray",
    // Purple
    "purple-1",
    "purple-2",
    "purple-3",
    "purple-4",
    "purple-5",
    "purple-6",
    "purple-7",
    "purple-8",
    "purple-9",
    "purple-10",
    // Orange
    "orange-1",
    "orange-2",
    "orange-3",
    "orange-4",
    "orange-5",
    "orange-6",
    "orange-7",
    "orange-8",
    "orange-9",
    "orange-10",
    // Green
    "green-1",
    "green-2",
    "green-3",
    "green-4",
    "green-5",
    "green-6",
    "green-7",
    "green-8",
    "green-9",
    "green-10",
    // Alert
    "alert-1",
    "alert-2",
    "alert-3",
    "alert-4",
    "alert-5",
    "alert-6",
    "alert-7",
    "alert-8",
    "alert-9",
    "alert-10",
    // Warning
    "warning-1",
    "warning-2",
    "warning-3",
    "warning-4",
    "warning-5",
    "warning-6",
    "warning-7",
    "warning-8",
    "warning-9",
    "warning-10",
    // Success
    "success-1",
    "success-2",
    "success-3",
    "success-4",
    "success-5",
    "success-6",
    "success-7",
    "success-8",
    "success-9",
    "success-10",
    // Neutral
    "neutral-1",
    "neutral-2",
    "neutral-3",
    "neutral-4",
    "neutral-5",
    "neutral-6",
    "neutral-7",
    "neutral-8",
    "neutral-9",
    "neutral-10",
    // Accent
    "accent-1",
    "accent-2",
    "accent-3",
    "accent-4",
    "accent-5",
    "accent-6",
    "accent-7",
    "accent-8",
    "accent-9",
    "accent-10"
] as const;


export const BackgroundColorAliases = [
    "alias-body",
    "alias-surface",
    "alias-soft-break",
    "alias-hard-break",
    "alias-mid-break",
    "alias-basic",
    "alias-basic-hover",
    "alias-basic-active",
    "alias-basic-transparent",
    "alias-basic-transparent-hover",
    "alias-basic-transparent-active",
    "alias-static-white",
    "alias-grey-hover",
    "alias-grey-active",
    "alias-accent",
    "alias-accent-hover",
    "alias-accent-active",
    "alias-accent-faint",
    "alias-accent-light",
    "alias-accent-transparent",
    "alias-accent-transparent-hover",
    "alias-accent-transparent-active",
    "alias-alert",
    "alias-alert-hover",
    "alias-alert-active",
    "alias-alert-faint",
    "alias-alert-light",
    "alias-alert-transparent",
    "alias-alert-transparent-hover",
    "alias-alert-transparent-active",
    "alias-warning",
    "alias-warning-hover",
    "alias-warning-active",
    "alias-warning-faint",
    "alias-warning-light",
    "alias-success",
    "alias-success-hover",
    "alias-success-active",
    "alias-success-faint",
    "alias-success-light",
    "alias-transparent",
    "alias-underlay",
    "alias-input-selection"
] as const;


export const BorderColorAliases = [
    "alias-low-break",
    "alias-mid-break",
    "alias-high-break",
    "alias-accent-active",
    "alias-alert",
    "alias-alert-hover",
    "alias-alert-active",
    "alias-warning",
    "alias-warning-hover",
    "alias-warning-active",
    "alias-success",
    "alias-success-hover",
    "alias-success-active"
] as const;

export const IconColorAliases = [
    "alias-primary",
    "alias-primary-hover",
    "alias-secondary",
    "alias-tertiary",
    "alias-faint",
    "alias-accent",
    "alias-accent-hover",
    "alias-accent-active",
    "alias-alert",
    "alias-alert-hover",
    "alias-warning",
    "alias-success",
    "alias-static-white",
    "alias-input-placeholder"
] as const;

export const TextColorAliases = [
    "alias-primary",
    "alias-primary-hover",
    "alias-secondary",
    "alias-tertiary",
    "alias-faint",
    "alias-accent",
    "alias-accent-hover",
    "alias-accent-active",
    "alias-alert",
    "alias-alert-hover",
    "alias-warning",
    "alias-success",
    "alias-static-white",
    "alias-input-placeholder"
] as const;

export const BorderRadiusScale = [1, 2, 3, 4, "pill", "circular"] as const;

export const BoxShadowScale = [1, 2] as const;

export const BoxShadowAliases = ["alias-floating", "alias-lifted"] as const;

export const FontSizeScale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;

export const FontWeightScale = [1, 2, 3] as const;

export const LineHeightScale = [1, 2, 3, 4, 5, 6] as const;

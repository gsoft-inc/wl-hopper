import type { ColorScheme } from "@hopper-ui/styled-system";

export type PresetSchemeValues = ColorScheme | "all";

export interface GlobalState {
    name: string | undefined;
    selected: string | undefined;
}

export interface AddonColorScheme {
    name: string;
    value: PresetSchemeValues;
}

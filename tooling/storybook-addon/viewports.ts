import { Breakpoints } from "@hopper-ui/components";

interface Viewport {
    name: string;
    styles: { height: string; width: string };
    type: "desktop" | "mobile" | "tablet";
}

type BreakpointViewports = Record<keyof typeof Breakpoints, Viewport>;

const BreakpointToDeviceType: Record<keyof typeof Breakpoints, Viewport["type"]> = {
    xs: "mobile",
    sm: "mobile",
    md: "tablet",
    lg: "desktop",
    xl: "desktop"
};

const viewports = (Object.keys(Breakpoints) as (keyof typeof Breakpoints)[]).reduce((acc, key) => {
    acc[key] = {
        name: `Breakpoint ${key}`,
        styles: {
            height: "100%",
            width: `${Breakpoints[key]}px`
        },
        type: BreakpointToDeviceType[key]
    };

    return acc;
}, {} as BreakpointViewports);

export const viewport = {
    viewports
};

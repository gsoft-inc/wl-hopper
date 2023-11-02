// TODO should this be in tokens?
export const Breakpoints = {
    xs: 640,
    sm: 768,
    md: 1024,
    lg: 1280,
    xl: 1536
} as const;

export type Breakpoint = keyof typeof Breakpoints | "base";

// Those breakpoints could be in the token solution, but we decided to keep them here for now, since there is no way to
// use breakpoint tokens in css media queries.
export const Breakpoints = {
    xs: 640,
    sm: 768,
    md: 1024,
    lg: 1280,
    xl: 1440
} as const;

export type Breakpoint = keyof typeof Breakpoints | "base";

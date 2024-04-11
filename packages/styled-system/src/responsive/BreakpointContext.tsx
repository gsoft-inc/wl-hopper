import { createContext, useContext } from "react";

import type { Breakpoint } from "./Breakpoints.ts";

export interface BreakpointContextType {
    matchedBreakpoints: Breakpoint[];
}

export const BreakpointContext = createContext<BreakpointContextType>({
    matchedBreakpoints: []
});

export function useBreakpointContext() {
    const context = useContext(BreakpointContext);

    return context;
}

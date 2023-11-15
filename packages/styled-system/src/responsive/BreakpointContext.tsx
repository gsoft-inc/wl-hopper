import { createContext, useContext } from "react";
import { isNil } from "../utils/assertion.ts";
import type { Breakpoint } from "./Breakpoints.ts";

export interface BreakpointContextType {
    matchedBreakpoints: Breakpoint[];
}

export const BreakpointContext = createContext<BreakpointContextType | undefined>(undefined);


export function useBreakpointContext() {
    const context = useContext(BreakpointContext);

    if (isNil(context)) {
        throw new Error("useBreakpointContext must be used within a BreakpointProvider");
    }

    return context;
}

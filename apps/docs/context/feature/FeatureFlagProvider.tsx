"use client";

import { createContext, type ReactNode } from "react";
import { flags } from "./flags.ts";

export const FeatureFlagContext = createContext<Record<string, boolean>>({});

export const FeatureFlagProvider = ({ children }: { children: ReactNode }) => {
    return (
        <FeatureFlagContext.Provider value={flags}>
            {children}
        </FeatureFlagContext.Provider>
    );
};

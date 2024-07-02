"use client";

import { createContext, type ReactNode } from "react";

export interface FeatureFlags {
    alpha?: boolean;
}

export const FeatureFlagContext = createContext<FeatureFlags>({});

export const FeatureFlagProvider = ({ children }: { children: ReactNode }) => {
    const flags = {
        alpha: process.env.NEXT_PUBLIC_ALPHA === "true"
    };

    return (
        <FeatureFlagContext.Provider value={flags}>
            {children}
        </FeatureFlagContext.Provider>
    );
};

"use client";

import { createContext, type ReactNode } from "react";

export interface FeatureFlags {
    alpha?: boolean;
}

export const FeatureFlagContext = createContext<FeatureFlags>({});

declare const window: {
    env: Record<string, string | undefined>;
} & Window;

export const FeatureFlagProvider = ({ children }: { children: ReactNode }) => {
    const flags = {
        alpha: process.env.NEXT_PUBLIC_ALPHA === "true" || window?.env?.NEXTPUBLIC_ALPHA === "true"
    };

    return (
        <FeatureFlagContext.Provider value={flags}>
            {children}
        </FeatureFlagContext.Provider>
    );
};

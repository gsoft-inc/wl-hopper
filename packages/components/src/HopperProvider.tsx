import type { ReactNode } from "react";
import packageJson from "../package.json";

import { BodyStyleProvider, useInjectTokens } from "@hopper-ui/styled-system";

export interface HopperProviderProps {
    children: ReactNode;
    withBodyStyle?: boolean;
    colorScheme?: "light" | "dark";
}

// We read the version from the packageJson and replace all dots with dashes.
// This ensures that multiple versions of Hopper can be used on the same page.
export const RootSelector = `hop-${packageJson.version.replaceAll(".", "-")}`;


export function HopperProvider({ children, withBodyStyle = false, colorScheme = "light" }: HopperProviderProps) {
    useInjectTokens(RootSelector);

    return (
        <div className={`hop ${RootSelector} ${RootSelector}-${colorScheme}`}>
            {withBodyStyle && <BodyStyleProvider rootSelector={RootSelector} />}

            {children}
        </div>
    );
}

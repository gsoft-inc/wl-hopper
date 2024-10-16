"use client";

import OverviewTile from "@/app/ui/components/overview/overviewTile/OverviewTile";
import { type ColorScheme, ThemeContext } from "@/context/theme/ThemeProvider.tsx";
import { HopperProvider } from "@hopper-ui/components";
import { useContext } from "react";

import "./composedComponents.css";

interface ComposedComponentsProps {
    components: string[];
}

const ComposedComponents = ({ components } : ComposedComponentsProps) => {
    const { colorMode } = useContext(ThemeContext);
    const theme = colorMode as ColorScheme;

    return (
        <HopperProvider colorScheme={theme}>
            <div className="hd-composed-components__wrapper">
                {components.map(component => (
                    <OverviewTile title={component} key={component} />
                ))}
            </div>
        </HopperProvider>
    );
};

export default ComposedComponents;

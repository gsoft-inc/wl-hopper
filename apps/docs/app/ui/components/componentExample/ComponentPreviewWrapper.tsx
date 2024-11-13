"use client";

import Card from "@/components/card/Card.tsx";
import ThemeSwitch from "@/components/themeSwitch/ThemeSwitch.tsx";
import Tooltip from "@/components/tooltip/Tooltip.tsx";
import { ThemeContext, type ColorScheme } from "@/context/theme/ThemeProvider.tsx";
import { memo, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

import { HopperProvider } from "@hopper-ui/components";
import "./componentPreviewWrapper.css";

interface ComponentPreviewWrapperProps {
    preview?: ReactNode;
    toggleButton?: ReactNode;
    minHeight?: string;
}

const ComponentPreviewWrapper = memo(({ preview, toggleButton, minHeight = "13rem" }: ComponentPreviewWrapperProps) => {
    const { colorMode = "light" } = useContext(ThemeContext);
    const [localColorMode, setLocalColorMode] = useState(colorMode);

    useEffect(() => {
        // keep the local color mode in sync with the global color mode when the global changes
        setLocalColorMode(colorMode);
    }, [colorMode]);

    const toggleTheme = useCallback(() => {
        const theme: ColorScheme = localColorMode === "dark"
            ? "light"
            : "dark";

        setLocalColorMode(theme);
    }, [localColorMode]);

    return (
        <div
            className="hd-component-preview-wrapper"
            data-schema={localColorMode}
            style={{ minHeight: minHeight }}
        >
            <div className="hd-component-preview-wrapper__actions">
                <Tooltip title="Toggle code sample">
                    {toggleButton}
                </Tooltip>
                <Tooltip title={`Toggle ${localColorMode === "dark" ? "light" : "dark" } theme for preview`}>
                    <ThemeSwitch className="hd-component-preview-wrapper__action"
                        onChange={toggleTheme}
                        colorMode={localColorMode}
                    />
                </Tooltip>

            </div>
            <HopperProvider colorScheme={localColorMode} locale="en-US">
                <Card className="hd-component-preview-wrapper__card" size="sm" style={{ minHeight: minHeight }}>
                    {preview}
                </Card>
            </HopperProvider>
        </div>
    );
});

ComponentPreviewWrapper.displayName = "ComponentPreviewWrapper";

export default ComponentPreviewWrapper;

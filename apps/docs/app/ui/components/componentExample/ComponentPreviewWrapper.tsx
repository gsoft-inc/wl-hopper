"use client";

import { useState, memo, type ReactNode, useCallback, useContext, useEffect } from "react";
import Card from "@/components/card/Card.tsx";
import ThemeSwitch from "@/components/themeSwitch/ThemeSwitch.tsx";
import { ThemeContext, type ColorScheme } from "@/context/theme/ThemeProvider.tsx";

import "./componentPreviewWrapper.css";
import { HopperProvider } from "@hopper-ui/components";

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
                {toggleButton}
                <ThemeSwitch className="hd-component-preview-wrapper__action"
                    onChange={toggleTheme}
                    colorMode={localColorMode}
                />
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

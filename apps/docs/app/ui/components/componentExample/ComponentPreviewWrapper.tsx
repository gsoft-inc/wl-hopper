"use client";

import { useState, memo, type ReactNode, useCallback } from "react";
import Card from "@/components/card/Card.tsx";
import ThemeSwitch from "@/components/themeSwitch/ThemeSwitch.tsx";
import type { ColorScheme } from "@/context/theme/ThemeProvider.tsx";
import { StyledSystemProvider } from "@hopper-ui/styled-system";

import "./componentPreviewWrapper.css";

interface ComponentPreviewWrapperProps {
    preview?: ReactNode;
    toggleButton?: ReactNode;
    height?: string;
}

const ComponentPreviewWrapper = memo(({ preview, toggleButton, height = "13rem" }: ComponentPreviewWrapperProps) => {
    const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");

    const toggleTheme = useCallback(() => {
        const theme: ColorScheme = colorScheme === "dark"
            ? "light"
            : "dark";

        setColorScheme(theme);
    }, [colorScheme]);

    return (
        <div
            className="hd-component-preview-wrapper"
            data-schema={colorScheme}
            style={{ height: height }}
        >
            <div className="hd-component-preview-wrapper__actions">
                {toggleButton}
                <ThemeSwitch className="hd-component-preview-wrapper__action"
                    onChange={toggleTheme}
                    colorMode={colorScheme}
                />
            </div>
            <Card className="hd-component-preview-wrapper__card" size="sm">
                <StyledSystemProvider colorScheme={colorScheme}>
                    {preview}
                </StyledSystemProvider>
            </Card>

        </div>
    );
});

export default ComponentPreviewWrapper;

"use client";

import { useState } from "react";
import Card from "@/components/card/Card.tsx";
import ThemeSwitch from "@/components/themeSwitch/ThemeSwitch.tsx";
import type { ColorScheme } from "@/context/theme/ThemeProvider.tsx";

import ComponentPreview from "./ComponentPreview.tsx";

import "./componentPreviewWrapper.css";

interface ComponentPreviewWrapperProps {
    src: string;
    toggleButton?: React.ReactNode;
    height?: string;
}

const ComponentPreviewWrapper = ({ src, toggleButton, height = "13rem" }: ComponentPreviewWrapperProps) => {
    const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        const theme: ColorScheme = colorScheme === "dark"
            ? "light"
            : "dark";

        setColorScheme(theme);
    };

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
                <ComponentPreview src={src} colorScheme={colorScheme} />
            </Card>
        </div>
    );
};

export default ComponentPreviewWrapper;

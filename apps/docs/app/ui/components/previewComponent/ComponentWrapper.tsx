"use client";

import { useState } from "react";
import clsx from "clsx";
import Card from "@/components/card/Card.tsx";
import ThemeSwitch from "@/components/themeSwitch/ThemeSwitch.tsx";
import type { ColorScheme } from "@/context/theme/ThemeProvider.tsx";
import Example from "@/app/ui/components/exampleComponent/Example.tsx";

import "./componentWrapper.css";

interface ComponentWrapperProps {
    className?: string;
    src: string;
}

const ComponentWrapper = ({ className, src }: ComponentWrapperProps) => {
    const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        const theme: ColorScheme = colorScheme === "dark"
            ? "light"
            : "dark";

        setColorScheme(theme);
    };

    return (
        <div className={clsx("hd-component-wrapper", `hd-component-wrapper--${colorScheme}`)}>
            <ThemeSwitch className="hd-component-wrapper__action" onChange={toggleTheme} colorMode={colorScheme} />
            <Card className={className} size="sm">
                <Example src={src} colorScheme={colorScheme} />
            </Card>
        </div>
    );
};

export default ComponentWrapper;

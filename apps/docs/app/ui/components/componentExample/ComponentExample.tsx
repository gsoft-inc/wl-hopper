"use client";

import { useState, useMemo } from "react";
import clsx from "clsx";

import { CodeIcon } from "@/components/icon";
import { ToggleButton } from "@/components/toggleButton/ToggleButton.tsx";

import ComponentPreviewWrapper from "./ComponentPreviewWrapper.tsx";

import "./componentExample.css";

export interface ComponentExampleProps {
    type?: "code" | "preview" | "both";
    src: string;
    code?: React.ReactNode;
    className?: string;
    isOpen?: boolean;
}

const ComponentExample = ({ type = "both", src = "", code = "", className, isOpen = true }: ComponentExampleProps) => {
    const [showCode, setShowCode] = useState(isOpen);

    const showBothComponent = useMemo(() => type === "both", [type]);
    const showPreviewComponent = useMemo(() => type === "preview" || showBothComponent, [type, showBothComponent]);
    const showCodeComponent = useMemo(() => (showBothComponent && showCode) || type === "code", [showBothComponent, showCode, type]);

    const toggleShowCodeButton = showBothComponent &&
        <ToggleButton isSelected={showCode}
            className="hd-component-preview-wrapper__action"
            onPress={() => setShowCode(!showCode)}
        >
            <CodeIcon />
            <span>Show code</span>
        </ToggleButton>;

    return (
        <div data-usage={type}
            className={clsx("hd-component-example", showCodeComponent && "hd-component-example--expanded", className)}
        >
            {showPreviewComponent && <ComponentPreviewWrapper
                src={src}
                toggleButton={toggleShowCodeButton}
            />}
            <div className={clsx("hd-component-code", showCodeComponent && "hd-component-code--expanded")}>
                {code}
            </div>
        </div>
    );
};

export default ComponentExample;

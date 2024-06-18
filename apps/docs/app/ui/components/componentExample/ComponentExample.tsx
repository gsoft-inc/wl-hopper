"use client";

import { useState, memo, useCallback, useMemo, type ReactNode } from "react";
import clsx from "clsx";

import { CodeIcon } from "@/components/icon";
import { ToggleButton } from "@/components/toggleButton/ToggleButton.tsx";

import ComponentPreviewWrapper from "./ComponentPreviewWrapper.tsx";

import "./componentExample.css";

interface CommonProps {
    src: string;
    className?: string;
    isOpen?: boolean;
}

interface CodeProps extends CommonProps {
    type: "code";
    code: ReactNode;
}

interface PreviewProps extends CommonProps {
    type: "preview";
    preview: ReactNode;
}

interface BothProps extends CommonProps {
    type: "both";
    code: ReactNode;
    preview: ReactNode;
}

export type ComponentExampleProps = CodeProps | PreviewProps | BothProps;

const ComponentExample = memo(({
    src,
    type = "both",
    className,
    isOpen = false,
    ...props
}: ComponentExampleProps) => {
    const [showCode, setShowCode] = useState(isOpen);

    const showBothComponent = useMemo(() => type === "both", [type]);
    const showPreviewComponent = useMemo(() => type === "preview" || showBothComponent, [type, showBothComponent]);
    const showCodeComponent = useMemo(() => (showBothComponent && showCode) || type === "code", [showBothComponent, showCode, type]);

    const toggleShowCode = useCallback(() => setShowCode(prevShowCode => !prevShowCode), []);

    if (!src) {
        return null;
    }

    const renderToggleButton = () => {
        if (!showBothComponent) {
            return null;
        }

        return (
            <ToggleButton isSelected={showCode}
                className="hd-component-preview-wrapper__action"
                onPress={toggleShowCode}
            >
                <CodeIcon />
                <span>Show code</span>
            </ToggleButton>
        );
    };

    const renderPreviewComponent = () => {
        if (!showPreviewComponent) {
            return null;
        }

        return (
            <ComponentPreviewWrapper
                preview={(type === "preview" || type === "both") ? (props as PreviewProps | BothProps).preview : undefined}
                toggleButton={renderToggleButton()}
            />
        );
    };

    const renderCodeComponent = () => {
        if (!showCodeComponent) {
            return null;
        }

        return (
            <div className={clsx("hd-component-code", showCodeComponent && "hd-component-code--expanded")}>
                {(type === "code" || type === "both") ? (props as CodeProps | BothProps).code : undefined}
            </div>
        );
    };

    return (
        <div data-usage={type}
            className={clsx("hd-component-example", showCodeComponent && "hd-component-example--expanded", className)}
        >
            {renderPreviewComponent()}
            {renderCodeComponent()}
        </div>
    );
});

export default ComponentExample;

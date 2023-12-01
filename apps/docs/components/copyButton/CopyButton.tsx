"use client";

import clsx from "clsx";
import React, { type ReactNode } from "react";

import { Button } from "react-aria-components";

import "./copyButton.css";

interface CopyButtonProps {
    text: string;
    className?: string;
    children?: ReactNode;
    onCopy?: () => void;
    isCopied: boolean;
    setIsCopied: React.Dispatch<React.SetStateAction<boolean>>;
}

const CopyButton = ({ text, className, children, onCopy, isCopied, setIsCopied }: CopyButtonProps) => {
    const classes = clsx("hd-copy-button", className);

    const copy = async () => {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        onCopy?.();

        setTimeout(() => {
            setIsCopied(false);
        }, 5000);
    };

    return (
        <Button isDisabled={isCopied} onPress={copy} className={classes} aria-label="Copy">
            {children}
        </Button>
    );
};

export default CopyButton;

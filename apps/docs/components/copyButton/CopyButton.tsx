"use client";

import React, { type ReactNode } from "react";
import { Button } from "react-aria-components";
import cx from "classnames";

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
    const classes = cx("hd-copy-button", className);

    const copy = async () => {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        onCopy?.();

        setTimeout(() => {
            setIsCopied(false);
        }, 5000);
    };

    return (
        <Button isDisabled={isCopied} onPress={copy} className={classes}>
            {children}
        </Button>
    );
};

export default CopyButton;

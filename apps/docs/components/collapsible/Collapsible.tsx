"use client";

import clsx from "clsx";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { ToggleButton } from "react-aria-components";
import { Icon, CollapseIcon } from "@/components/icon";

import "./collapsible.css";

export interface CollapsibleProps {
    children: ReactNode;
    title: ReactNode;
    label?: string;
    isOpen?: boolean;
    className?: string;
}

const Collapsible = ({ children, title, label, isOpen = false, className }: CollapsibleProps) => {
    const [open, setOpen] = useState(isOpen);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (open && contentRef.current) {
            contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
        }

        if (!open && contentRef.current) {
            contentRef.current.style.height = "0px";
        }
    }, [open]);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className={clsx("hd-collapsible", { "hd-collapsible--open": open }, className)}>
            <ToggleButton className="hd-collapsible__trigger"
                onChange={toggle}
                isSelected={open}
                aria-label={label}
            >
                {title}
                <Icon src={CollapseIcon} />
            </ToggleButton>
            <div ref={contentRef}
                className="hd-collapsible__content-parent"
            >
                <div className="hd-collapsible__content">{children}</div>
            </div>
        </div>
    );
};

export default Collapsible;

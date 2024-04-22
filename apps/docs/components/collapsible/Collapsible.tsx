"use client";

import clsx from "clsx";
import { type ReactNode, useRef, useState } from "react";
import { ToggleButton } from "react-aria-components";
import { Icon, CollapseIcon } from "@/components/icon";

import "./collapsible.css";

export interface CollapsibleProps {
    children: ReactNode;
    title: ReactNode;
    label?: string;
    isOpen?: boolean;
}

const Collapsible = ({ children, title, label, isOpen = false }: CollapsibleProps) => {
    const [open, setOpen] = useState(isOpen);
    const contentRef = useRef<HTMLDivElement>(null);

    let styles = { height: "0px" };

    if (contentRef.current && open) {
        styles = { height: contentRef.current.scrollHeight + "px" };
    }

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className={clsx("hd-collapsible", { "hd-collapsible--open": open })}>
            <ToggleButton className="hd-collapsible__trigger"
                onChange={toggle}
                isSelected={open}
                aria-label={label}
            >
                {title}
                <Icon src={CollapseIcon} />
            </ToggleButton>
            <div ref={contentRef}
                style={styles}
                className="hd-collapsible__content-parent"
            >
                <div className="hd-collapsible__content">{children}</div>
            </div>
        </div>
    );
};

export default Collapsible;

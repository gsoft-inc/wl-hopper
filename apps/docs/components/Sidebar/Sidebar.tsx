"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import Link from "next/link";
import React from "react";
import "./sidebar.css";

export const Sidebar = () => {
    const [open, setOpen] = React.useState(false);
    const arrowOrientation = open ? "hd-sidebar-trigger__icon--down" : "hd-sidebar-trigger__icon--up";

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            setOpen(!open);
        }
    };

    return (
        <nav className="hd-sidebar" aria-label="Sidebar">
            <div className="hd-sidebar__container">
                <ul className="hd-sidebar__list">
                    <li className="hd-sidebar__list-item">
                        <Link href="/" className="hd-sidebar__link">Introduction</Link>
                    </li>
                    <li className="hd-sidebar__list-item">
                        <Link href="/" className="hd-sidebar__link">Get Started</Link>
                    </li>
                    <Collapsible.Root open={open} onOpenChange={setOpen}>
                        <Collapsible.Trigger tabIndex={0} asChild>
                            <li className="hd-sidebar-list__section-trigger hd-sidebar__list-item" onKeyDown={handleKeyDown}>
                                <span>Design Tokens</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`hd-sidebar-trigger__icon ${arrowOrientation}`}>
                                    <path d="M4 6L8 10L12 6" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </li>
                        </Collapsible.Trigger>
                        <Collapsible.Content className="hd-sidebar-list--collapsible" asChild>
                            <ul>
                                <li className="hd-sidebar__list-item">
                                    <Link href="/" className="hd-sidebar__link">Color</Link>
                                </li>
                                <li className="hd-sidebar__list-item">
                                    <Link href="/" className="hd-sidebar__link">Radii</Link>
                                </li>
                                <li className="hd-sidebar__list-item">
                                    <Link href="/" className="hd-sidebar__link">Font family</Link>
                                </li>
                                <li className="hd-sidebar__list-item">
                                    <Link href="/" className="hd-sidebar__link">Font weight</Link>
                                </li>
                                <li className="hd-sidebar__list-item">
                                    <Link href="/" className="hd-sidebar__link">Font size</Link>
                                </li>
                                <li className="hd-sidebar__list-item">
                                    <Link href="/" className="hd-sidebar__link">Media Query</Link>
                                </li>
                                <li className="hd-sidebar__list-item">
                                    <Link href="/" className="hd-sidebar__link">Shadow</Link>
                                </li>
                                <li className="hd-sidebar__list-item">
                                    <Link href="/" className="hd-sidebar__link">Focus</Link>
                                </li>
                                <li className="hd-sidebar__list-item">
                                    <Link href="/" className="hd-sidebar__link">Spacing</Link>
                                </li>
                                <li className="hd-sidebar__list-item">
                                    <Link href="/" className="hd-sidebar__link">ZIndex</Link>
                                </li>
                            </ul>
                        </Collapsible.Content>
                    </Collapsible.Root>
                </ul>
            </div>
        </nav>
    );
};

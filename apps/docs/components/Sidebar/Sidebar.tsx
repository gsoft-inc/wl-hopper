"use client";

import Link from "next/link";
import React from "react";
import "./sidebar.css";

export const Sidebar = () => {
    return (
        <nav className="hd-sidebar" aria-label="Sidebar">
            <div className="hd-sidebar__container">
                <ul className="hd-sidebar__list">
                    <li className="hd-sidebar__list-item">
                        <Link href="/" className="hd-sidebar__link">Introduction</Link>
                    </li>
                </ul>
                <ul className="hd-sidebar__list">
                    <li className="hd-sidebar__list-item">
                        <Link href="/" className="hd-sidebar__link">Get Started</Link>
                    </li>
                </ul>
                <details className="hd-sidebar-list__details">
                    <summary className="hd-sidebar-list__section-trigger hd-sidebar__list-item">
                        <span>Design Tokens</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="hd-sidebar-trigger__icon">
                            <path d="M4 6L8 10L12 6" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </summary>
                    <ul className="hd-sidebar__list hd-sidebar__list--collapsible" >
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
                </details>
            </div>
        </nav>
    );
};

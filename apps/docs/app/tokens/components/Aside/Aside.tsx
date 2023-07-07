"use client";

import Link from "next/link";
import React from "react";
import "./aside.css";

export const Aside = () => {
    return (
        <aside className="hd-aside">
            <ul className="hd-aside__list">
                <li className="hd-aside__list-item hd-aside-section">
                    <span className="hd-aside-section__title">Contents</span>
                    <ul className="hd-aside__list">
                        <li className="hd-aside__list-item">
                            <Link href="/" className="hd-aside__link">Tokens</Link>
                        </li>
                        <li className="hd-aside__list-item">
                            <Link href="/" className="hd-aside__link">Definitions</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    );
};

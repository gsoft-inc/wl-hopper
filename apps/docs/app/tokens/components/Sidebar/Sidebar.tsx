"use client";

import Link from "next/link";
import React from "react";
import { allTokens } from "@/.contentlayer/generated";
import { usePathname } from "next/navigation";
import type { Tokens } from "@/.contentlayer/generated";

import "./sidebar.css";

const mapTokensToLinks = (tokens:Tokens[], pathName: string, subsection: string, sectionTitle: string) => {
    return (
        <ul className="hd-sidebar__list">
            <li className="hd-sidebar__list-item hd-sidebar-section">
                <span className="hd-sidebar-section__title">{sectionTitle}</span>
                <ul className="hd-sidebar__list">
                    {tokens
                        .filter(token => token.section === subsection)
                        .sort((a, b) => {
                            if (a.order && b.order) {
                                return a.order - b.order;
                            } else if (a.order) {
                                return -1;
                            } else if (b.order) {
                                return 1;
                            } else {
                                return a.title.localeCompare(b.title);
                            }
                        })
                        .map(token => {
                            const formattedPath = `/${token._raw.flattenedPath}`;
                            const isActive = pathName === formattedPath;

                            return (
                                <li className={`hd-sidebar__list-item ${isActive ? "hd-sidebar-list-item--active" : ""}`} key={token.slug}>
                                    <Link href={`/tokens/${token.section}/${token.slug}`} className="hd-sidebar__link">{token.title}</Link>
                                </li>
                            );
                        })}
                </ul>
            </li>
        </ul>
    );
};

const GettingStartedTokenLinks = () => {
    const pathName = usePathname();

    const tokens = allTokens;

    return mapTokensToLinks(tokens, pathName, "getting-started", "Getting Started");
};

const CoreTokenLinks = () => {
    const pathName = usePathname();

    const tokens = allTokens;

    return mapTokensToLinks(tokens, pathName, "core", "Core Tokens");
};

const SemanticTokenLinks = () => {
    const pathName = usePathname();

    const tokens = allTokens;

    return mapTokensToLinks(tokens, pathName, "semantic", "Semantic Tokens");
};

export const Sidebar = () => {
    return (
        <nav className="hd-sidebar" aria-label="Sidebar">
            <div className="hd-sidebar__container">
                <GettingStartedTokenLinks />
                <CoreTokenLinks />
                <SemanticTokenLinks />
            </div>
        </nav>
    );
};

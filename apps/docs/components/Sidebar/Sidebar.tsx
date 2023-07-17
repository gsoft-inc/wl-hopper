"use client";

import Link from "next/link";
import React from "react";
import cx from "classnames";
import { allTokens } from "@/.contentlayer/generated";
import { usePathname } from "next/navigation";
import type { Tokens } from "@/.contentlayer/generated";

import "./sidebar.css";

const mapTokensToLinks = (tokens:Tokens[], pathName: string, subsection: string, sectionTitle: string) => {
    return (
        <ul className="hd-sidebar__list">
            <li className="hd-sidebar__item hd-sidebar-section">
                <span className="hd-sidebar__title">{sectionTitle}</span>
                <ul className="hd-sidebar__nested-list">
                    {tokens
                        .filter(token => token.section === subsection)
                        .sort((a, b) => {
                            if (a.order && b.order) {
                                return a.order - b.order;
                            }

                            if (a.order) {
                                return -1;
                            }

                            if (b.order) {
                                return 1;
                            }

                            return a.title.localeCompare(b.title);
                        })
                        .map(token => {
                            const formattedPath = `/${token._raw.flattenedPath}`;
                            const isActive = pathName === formattedPath;

                            return (
                                <li className={cx("hd-sidebar__item", isActive && "hd-sidebar__item--active")} key={token.slug}>
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

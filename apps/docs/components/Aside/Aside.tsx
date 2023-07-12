"use client";

import Link from "next/link";
import React from "react";
import "./aside.css";

interface Link {
    title: string;
    url: string;
}

interface AsideProps {
    title: string;
    links: Link[];
}

export const Aside: React.FC<AsideProps> = ({ title, links }) => {
    return (
        <aside className="hd-aside">
            <ul className="hd-aside__list">
                <li className="hd-aside__item hd-aside-section">
                    <span className="hd-aside__title">{title}</span>
                    <ul className="hd-aside__nested-list">
                        {links.map(link => (
                            <li className="hd-aside__item">
                                <Link href={link.url} key={link.title} className="hd-aside__link">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </aside>
    );
};

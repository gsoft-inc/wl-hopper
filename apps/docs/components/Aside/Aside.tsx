"use client";

import Link from "next/link";
import React from "react";
import "./aside.css";

interface Link {
    title: string;
    url: string;
    id: string;
}

interface AsideProps {
    title: string;
    links: Link[];
}

export const Aside: React.FC<AsideProps> = ({ title, links }) => {
    if (links.length) {
        return (
            <aside className="hd-aside">
                <span className="hd-aside__title">{title}</span>
                <ul className="hd-aside__list">
                    {links.map(link => (
                        <li className="hd-aside__item" key={link.id}>
                            <Link href={link.url} className="hd-aside__link">
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        );
    }

    return null;
};

"use client";

import Link from "next/link";

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

const Aside = ({ title, links }: React.PropsWithoutRef<AsideProps>) => {
    const listItems = links.map(link => (
        <li className="hd-aside__item" key={link.id}>
            <Link href={link.url} className="hd-aside__link">
                {link.title}
            </Link>
        </li>
    ));

    return (
        <aside className="hd-aside">
            <span className="hd-aside__title">{title}</span>
            <ul className="hd-aside__list">
                {listItems}
            </ul>
        </aside>
    );
};

export default Aside;

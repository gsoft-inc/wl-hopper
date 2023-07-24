"use client";

import Link from "next/link";
import cx from "classnames";
import { usePathname } from "next/navigation";
import getPageLinks from "@/utils/getPageLinks";
import type { Data } from "@/utils/getPageLinks";

import "./sidebar.css";

const Sidebar = ({ data }: { data: Data[] }) => {
    const links = getPageLinks(data, { order: ["getting-started", "core", "semantic"] });
    const pathName = usePathname();

    const linkItems = links.map(link => {
        return (
            <ul className="hd-sidebar__list" key={link.id}>
                <li className="hd-sidebar__item hd-sidebar-section">
                    <span className="hd-sidebar__title">{link.title}</span>
                    <ul className="hd-sidebar__nested-list">
                        {link.linkItems.map(item => {
                            const linkPath = `/${item.path}`;
                            const isActive = pathName === linkPath;

                            return (
                                <li className={cx("hd-sidebar__item", isActive && "hd-sidebar__item--active")} key={item.id}>
                                    <Link href={linkPath} className="hd-sidebar__link">{item.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </li>
            </ul>
        );
    });

    return (
        <nav className="hd-sidebar" aria-label="Sidebar">
            <div className="hd-sidebar__container">
                {linkItems}
            </div>
        </nav>
    );
};

export default Sidebar;

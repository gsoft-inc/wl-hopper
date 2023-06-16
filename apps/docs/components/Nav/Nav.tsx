"use client";

import Link from "next/link";
import cx from "classnames";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/configs/navigation";

import "./nav.css";

export default function Nav ({ items }: { items: NavItem[] }) {
    const pathname = usePathname();

    const navItems = items.map(item => {
        return (
            <li key={item.label} className={cx("hd-nav__list-item", pathname === item.path && "hd-nav__list-item--active")}>
                <Link href={item.path} className="hd-nav__link" >
                    {item.label}
                </Link>
            </li>
        );
    });

    return (
        <nav className="hd-nav" aria-label="Main" data-orientation="horizontal" dir="ltr">
            <ul className="hd-nav__list">
                {navItems}
            </ul>
        </nav>
    );
}

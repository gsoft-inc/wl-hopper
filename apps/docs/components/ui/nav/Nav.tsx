"use client";

import Link from "next/link";
import cx from "classnames";
import { usePathname } from "next/navigation";

import type { NavItem } from "@/configs/navigation";

import "./nav.css";

const Nav = ({ items }: { items: React.PropsWithoutRef<NavItem[]> }) => {

    const fistPathLevel = usePathname().split("/")[1].trim();

    const navItems = items.map(item => {
        const { path, label } = item;

        console.log("component path", path);

        const isActive = path.includes(fistPathLevel) && fistPathLevel !== "";

        return (
            <li key={label} className={cx("hd-nav__list-item", isActive && "hd-nav__list-item--active")}>
                <Link href={path} className="hd-nav__link" >
                    {label}
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
};

export default Nav;

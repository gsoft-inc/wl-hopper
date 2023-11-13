"use client";

import Overlay from "@/components/ui/overlay/Overlay";
import getPageLinks from "@/utils/getPageLinks";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import type { Data } from "@/utils/getPageLinks";

import "./sidebar.css";

interface SidebarProps {
    data: Data[];
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = ({ data, isOpen, onClose }: SidebarProps) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const links = getPageLinks(data, { order: ["getting-started", "core", "semantic"] });
    const pathName = usePathname();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        const handleLockScroll = () => {
            const shouldLockScroll = window.innerWidth <= 768 && isOpen;
            document.body.style.overflow = shouldLockScroll ? "hidden" : "auto";
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        const handleWindowResize = () => {
            if (window.innerWidth > 768) {
                onClose();
            } else {
                handleLockScroll();
            }
        };

        if (isOpen) {
            handleLockScroll();
            document.addEventListener("click", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
            window.addEventListener("resize", handleWindowResize);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [isOpen, onClose]);

    const handleLinkClick = () => {
        if (window.innerWidth <= 768) {
            onClose();
        }
    };

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
                                <li className={clsx("hd-sidebar__item", isActive && "hd-sidebar__item--active")} key={item.id}>
                                    <Link href={linkPath} className="hd-sidebar__link" onClick={handleLinkClick}>{item.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </li>
            </ul>
        );
    });

    return (
        <>
            <Overlay isOpen={isOpen}></Overlay>
            <nav className={clsx("hd-sidebar", isOpen && "hd-sidebar--open")} aria-label="Sidebar" ref={sidebarRef}>
                <div className="hd-sidebar__container">
                    {linkItems}
                </div>
            </nav>
        </>
    );
};

export default Sidebar;

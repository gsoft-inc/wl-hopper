"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useSidebar } from "@/context/sidebar/SidebarProvider";

import Overlay from "@/components/overlay/Overlay";

import type { Section } from "@/app/lib/getPageLinks";

import "./sidebar.css";

interface SidebarProps {
    links: Section[];
}

const Sidebar = ({ links }: SidebarProps) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const pathName = usePathname();
    const { toggleSidebar, isSidebarOpen } = useSidebar();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                toggleSidebar();
            }
        };

        const handleLockScroll = () => {
            const shouldLockScroll = window.innerWidth <= 768 && isSidebarOpen;
            document.body.style.overflow = shouldLockScroll ? "hidden" : "visible";
        };

        const handleWindowResize = () => {
            if (window.innerWidth > 768) {
                toggleSidebar();
            } else {
                handleLockScroll();
            }
        };

        if (isSidebarOpen) {
            handleLockScroll();
            document.addEventListener("click", handleClickOutside);
            window.addEventListener("resize", handleWindowResize);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [isSidebarOpen, toggleSidebar]);

    const handleLinkClick = () => {
        if (window.innerWidth <= 768) {
            toggleSidebar();
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
                                <li className={clsx("hd-sidebar__item", isActive && "hd-sidebar__item--active")}
                                    key={item.id}
                                >
                                    <Link href={linkPath}
                                        className="hd-sidebar__link"
                                        onClick={handleLinkClick}
                                    >{item.title}</Link>
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
            <Overlay isOpen={isSidebarOpen}></Overlay>
            <nav className={clsx("hd-sidebar", isSidebarOpen && "hd-sidebar--open")}
                aria-label="Sidebar"
                ref={sidebarRef}
            >
                <div className="hd-sidebar__container">
                    {linkItems}
                </div>
            </nav>
        </>
    );
};

export default Sidebar;

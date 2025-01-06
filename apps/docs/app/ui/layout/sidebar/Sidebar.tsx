"use client";

import type { Section } from "@/app/lib/getPageLinks";
import Overlay from "@/components/overlay/Overlay";
import { FeatureFlagContext } from "@/context/feature/FeatureFlagProvider.tsx";
import { useSidebar } from "@/context/sidebar/SidebarProvider";
import { ThemeContext } from "@/context/theme/ThemeProvider";
import { HopperProvider, SearchField } from "@hopper-ui/components";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import "./sidebar.css";

export interface SidebarProps {
    links: Section[];
}

const Sidebar = ({ links }: SidebarProps) => {
    const { colorMode } = useContext(ThemeContext);
    const [filter, setFilter] = useState("");
    const sidebarRef = useRef<HTMLDivElement>(null);
    const pathName = usePathname();
    const sidebarContext = useSidebar()!;
    if (!sidebarContext) {
        throw new Error("Sidebar context is not available");
    }

    const { toggleSidebar, isSidebarOpen } = sidebarContext;
    const featureFlags = useContext(FeatureFlagContext);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                toggleSidebar();
            }
        };

        const handleLockScroll = () => {
            const shouldLockScroll = window.innerWidth <= 768 && isSidebarOpen;
            document.body.style.overflow = shouldLockScroll ? "hidden" : "";
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
            document.body.style.overflow = "";
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [isSidebarOpen, toggleSidebar]);

    const handleLinkClick = () => {
        if (window.innerWidth <= 768) {
            toggleSidebar();
        }
    };

    const onTextFieldChange = (value: string) => {
        setFilter(value);
    };

    const linkItems = links
        .filter(link => {
            const trimmedFilter = filter.trim().toLowerCase();

            const hasMatch = (value: string) => value.toLowerCase().includes(trimmedFilter);

            return hasMatch(link.title) || link.linkItems.find(item => hasMatch(item.title));
        })
        .map(link => {
            return (
                <ul className="hd-sidebar__list" key={link.id}>
                    <li className="hd-sidebar__item hd-sidebar-section">
                        <span className="hd-sidebar__title">{link.title}</span>
                        <ul className="hd-sidebar__nested-list">
                            {link.linkItems
                                .filter(item => item.status === "ready" || item.status === undefined || (item.status === "alpha" && featureFlags.alpha)).map(item => {
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
                <div className="hd-sidebar__wrapper">
                    <div className="hd-sidebar__container">
                        <HopperProvider colorScheme={colorMode}>
                            <SearchField aria-label="Filter sections" placeholder="Search" value={filter} onChange={onTextFieldChange} />
                        </HopperProvider>
                        {linkItems}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;

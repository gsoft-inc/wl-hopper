"use client";

import Link from "next/link";
import cx from "classnames";
import { usePathname } from "next/navigation";
import { navigation } from "@/configs/navigation";
import IconButton from "@/components/ui/iconButton/IconButton";
import ThemeSwitch from "@/components/themeSwitch/ThemeSwitch";

import CloseIcon from "./assets/close.svg";
import GithubLogo from "./assets/github.svg";
import HopperLogo from "./assets/hopper-logo.svg";

import "./mobileMenu.css";

interface MobileMenuProps {
    onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
    const pathname = usePathname()!;
    let firstPathLevel: string;

    if (pathname) {
        firstPathLevel = pathname.split("/")[1].trim();
    }

    const navItems = navigation.map(item => {
        const { path, label } = item;

        const isActive = path.includes(firstPathLevel) && firstPathLevel !== "";

        return (
            <li key={label}>
                <Link href={path} className={cx("hd-mobile-menu-nav-list__link", isActive && "hd-mobile-menu-nav-list__link--active")}>
                    {label}
                </Link>
            </li>
        );
    });

    return (
        <div className="hd-mobile-menu">
            <div className="hd-mobile-menu__header">
                <div className="hd-wrapper hd-flex">
                    <Link href="/" className="hd-brand" aria-label="Hopper Brand">
                        <HopperLogo />
                    </Link>
                    <IconButton onClick={onClose} className="hd-mobile-menu__close">
                        <CloseIcon className="hd-mobile-menu__close-icon" />
                    </IconButton>
                </div>
            </div>
            <div className="hd-mobile-menu__container">
                <div className="hd-mobile-menu-nav">
                    <ul className="hd-mobile-menu-nav-list">
                        {navItems}
                    </ul>
                </div>
                <div className="hd-mobile-menu-footer">
                    <nav>
                        <ul className="hd-mobile-menu-footer-list">
                            <li>
                                <Link href="https://www.github.com" target="_blank" className="hd-mobile-menu-footer-link">
                                    <GithubLogo />
                                    GitHub
                                </Link>
                            </li>
                            <li>
                                <ThemeSwitch text="Appearance" className="hd-mobile-menu-footer-button" />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;

"use client";

import ThemeSwitch from "@/components/themeSwitch/ThemeSwitch";
import IconButton from "@/components/iconButton/IconButton";
import { navigation } from "@/configs/navigation";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import CloseIcon from "./assets/close.svg";
import GithubLogo from "./assets/github.svg";
import HopperLogo from "./assets/hopper-logo.svg";

import "./mobileMenu.css";

interface MobileMenuProps {
    onClose: () => void;
    isOpen: boolean;
}

const MobileMenu = ({ onClose, isOpen }: MobileMenuProps) => {
    const pathname = usePathname()!;
    let firstPathLevel: string;

    const [isAnimating, setIsAnimating] = useState(false);
    const [animationDirection, setAnimationDirection] = useState<"opening" | "closing">("opening");

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
            setAnimationDirection("opening");
        } else {
            setAnimationDirection("closing");
        }

        const animationTimeout = setTimeout(() => {
            setIsAnimating(false);
        }, 300);

        return () => clearTimeout(animationTimeout);
    }, [isOpen]);

    if (pathname) {
        firstPathLevel = pathname.split("/")[1].trim();
    }

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth > 600) {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener("resize", handleWindowResize);
        }
    }, [isOpen, onClose]);

    const navItems = navigation.map(item => {
        const { path, label } = item;

        const isActive = path.includes(firstPathLevel) && firstPathLevel !== "";
        const isReady = item.status !== "ready" && "hd-nav__link--disabled";

        return (
            <li key={label}>
                <Link href={path}
                    className={clsx("hd-mobile-menu-nav-list__link", isActive && "hd-mobile-menu-nav-list__link--active", isReady && "hd-mobile-menu-nav-list__link--disabled")}
                    onClick={onClose}
                >
                    {label}
                </Link>
            </li>
        );
    });

    return (
        <div
            className={clsx("hd-mobile-menu", isAnimating && "hd-mobile-menu--is-animating", `hd-mobile-menu--${animationDirection}`)}
        >
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
                                <Link href="https://github.com/gsoft-inc/wl-hopper"
                                    target="_blank"
                                    className="hd-mobile-menu-footer-link"
                                >
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

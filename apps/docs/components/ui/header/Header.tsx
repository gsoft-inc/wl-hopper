"use client";

import Link from "next/link";

import { useState, useEffect } from "react";
import { navigation } from "@/configs/navigation";
import ThemeSwitch from "@/components/themeSwitch/ThemeSwitch";
import IconButton from "@/components/ui/iconButton/IconButton";
import MobileMenu from "@/components/ui/mobileMenu/MobileMenu";
import MobileMenuTrigger from "@/components/ui/mobileMenu/MobileMenuTrigger";
import Nav from "@/components/ui/nav/Nav";

import "./header.css";
import HopperLogo from "./assets/hopper-logo.svg";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    });

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMobileMenuClose = () => {
        setTimeout(() => {
            setIsMobileMenuOpen(false);
        }, 300);
    };

    return (
        <>
            <header className="hd-header">
                <div className="hd-wrapper hd-flex">
                    <div className="hd-header__nav">
                        <Link href="/" className="hd-brand" aria-label="Hopper Brand">
                            <HopperLogo />
                        </Link>
                        <Nav items={navigation} />
                    </div>
                    <div className="hd-header__quick-actions">
                        {/*<input type="search" placeholder="Search" />*/}
                        <ThemeSwitch className="hd-icon-button" />
                        <IconButton as={Link} href="https://www.github.com" target="_blank">
                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                {/* eslint-disable-next-line max-len */}
                                <path d="M8 0.197266C3.58267 0.197266 0 3.77927 0 8.19727C0 11.7319 2.292 14.7306 5.47133 15.7886C5.87067 15.8626 6 15.6146 6 15.4039V13.9146C3.77467 14.3986 3.31133 12.9706 3.31133 12.9706C2.94733 12.0459 2.42267 11.7999 2.42267 11.7999C1.69667 11.3033 2.478 11.3139 2.478 11.3139C3.28133 11.3699 3.704 12.1386 3.704 12.1386C4.41733 13.3613 5.57533 13.0079 6.032 12.8033C6.10333 12.2866 6.31067 11.9333 6.54 11.7339C4.76333 11.5306 2.89533 10.8446 2.89533 7.77993C2.89533 6.90593 3.208 6.1926 3.71933 5.6326C3.63667 5.4306 3.36267 4.6166 3.79733 3.51527C3.79733 3.51527 4.46933 3.3006 5.998 4.33527C6.636 4.15793 7.32 4.06927 8 4.06593C8.68 4.06927 9.36467 4.15793 10.004 4.33527C11.5313 3.3006 12.202 3.51527 12.202 3.51527C12.6373 4.61727 12.3633 5.43127 12.2807 5.6326C12.794 6.1926 13.104 6.9066 13.104 7.77993C13.104 10.8526 11.2327 11.5293 9.45133 11.7273C9.738 11.9753 10 12.4619 10 13.2086V15.4039C10 15.6166 10.128 15.8666 10.534 15.7879C13.7107 14.7286 16 11.7306 16 8.19727C16 3.77927 12.418 0.197266 8 0.197266Z" fill="currentColor" />
                            </svg>
                        </IconButton>
                    </div>
                    <MobileMenuTrigger onToggle={handleMobileMenuToggle} />
                </div>
            </header>
            {isMobileMenuOpen && <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />}
        </>
    );
};

export default Header;

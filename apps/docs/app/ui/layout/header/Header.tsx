"use client";

import { SlotProvider } from "@hopper-ui/components";
import Link from "next/link";
import { useContext, useEffect, useState, type ReactNode } from "react";

import MobileMenu from "@/app/ui/layout/mobileMenu/MobileMenu";
import MobileMenuTrigger from "@/app/ui/layout/mobileMenu/MobileMenuTrigger";
import Nav from "@/app/ui/layout/nav/Nav";
import Wrapper from "@/app/ui/layout/wrapper/Wrapper";
import { Icon, ProductMenuIcon } from "@/components/icon";
import LinkIconButton from "@/components/iconButton/LinkIconButton";
import { Popover, PopoverContext, PopoverTrigger } from "@/components/popover/Popover.tsx";
import ThemeSwitch from "@/components/themeSwitch/ThemeSwitch";
import { ToggleButton, ToggleButtonContext } from "@/components/toggleButton/ToggleButton.tsx";
import { navigation } from "@/configs/navigation";
import { ThemeContext, type ColorScheme } from "@/context/theme/ThemeProvider.tsx";
import { useIsMobile } from "@/hooks/useIsMobile";
import LogRocket from "logrocket";

import { useEnvironmentContext } from "@/context/env/EnvironmentProvider";
import HopperLogo from "./assets/hopper-logo.svg";
import "./header.css";

const designSystemLinks = [
    {
        title: "Orbit",
        url: "https://orbit.sharegate.design/?path=/docs/installation--page"
    },
    {
        title: "Orbiter",
        url: "https://wl-orbiter-website.netlify.app/?path=/docs/installation--page"
    },
    {
        title: "Igloo",
        url: "https://igloo.officevibe.design"
    }
];

const ToggleTrigger = ({ children }: { children: ReactNode }) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    return (
        <SlotProvider values={[
            [PopoverContext, {
                isOpen: isPopoverOpen,
                onOpenChange: setIsPopoverOpen,
                placement: "bottom start",
                offset: 20
            }],
            [ToggleButtonContext, {
                onPress: () => setIsPopoverOpen(!isPopoverOpen),
                isSelected: isPopoverOpen
            }]
        ]}
        >
            {children}
        </SlotProvider>
    );
};

const ProductMenuAndBrand = () => {
    return (
        <span className="hd-product">
            <ToggleTrigger>
                <PopoverTrigger>
                    <ToggleButton aria-label="Open other libraries menu">
                        <Icon src={ProductMenuIcon} />
                    </ToggleButton>
                    <Popover
                        className="hd-product__menu"
                        aria-label="product menu link"
                    >
                        <span className="hd-product__title">Frontend tools</span>
                        <Link className="hd-product__link"
                            href="https://gsoft-inc.github.io/wl-idp-docs-hub/"
                        >IDP Hub</Link>
                        <ul className="hd-product__items">
                            <span className="hd-product__title">Design Systems</span>
                            {designSystemLinks.map(link => (
                                <li className="hd-product__item" key={link.title}>
                                    <Link className="hd-product__link" href={link.url}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </Popover>
                    <Link href="/" className="hd-brand" aria-label="Hopper Brand">
                        <HopperLogo />
                    </Link>
                </PopoverTrigger>
            </ToggleTrigger>
        </span>
    );
};

const Header = () => {
    const { colorMode, setColorMode } = useContext(ThemeContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useIsMobile("52.25rem");
    const { logRocketAppId } = useEnvironmentContext();

    useEffect(() => {
        if (logRocketAppId) {
            LogRocket.init(logRocketAppId);
        }
    }, [logRocketAppId]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMobileMenuOpen]);

    const toggleTheme = () => {
        const theme: ColorScheme = colorMode === "dark"
            ? "light"
            : "dark";

        setColorMode(theme);
    };

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
            <header className="hd-header" id="hd-header">
                <Wrapper className="hd-flex">
                    <div className="hd-header__nav">
                        <ProductMenuAndBrand />
                        <Nav items={navigation} />
                    </div>
                    <div className="hd-header__quick-actions">
                        {/*<input type="search" placeholder="Search" />*/}
                        <ThemeSwitch onChange={toggleTheme} colorMode={colorMode as ColorScheme} />
                        <LinkIconButton href="https://github.com/gsoft-inc/wl-hopper" target="_blank" aria-label="View source on Github">
                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                {/* eslint-disable max-len */}
                                <path
                                    d="M8 0.197266C3.58267 0.197266 0 3.77927 0 8.19727C0 11.7319 2.292 14.7306 5.47133 15.7886C5.87067 15.8626 6 15.6146 6 15.4039V13.9146C3.77467 14.3986 3.31133 12.9706 3.31133 12.9706C2.94733 12.0459 2.42267 11.7999 2.42267 11.7999C1.69667 11.3033 2.478 11.3139 2.478 11.3139C3.28133 11.3699 3.704 12.1386 3.704 12.1386C4.41733 13.3613 5.57533 13.0079 6.032 12.8033C6.10333 12.2866 6.31067 11.9333 6.54 11.7339C4.76333 11.5306 2.89533 10.8446 2.89533 7.77993C2.89533 6.90593 3.208 6.1926 3.71933 5.6326C3.63667 5.4306 3.36267 4.6166 3.79733 3.51527C3.79733 3.51527 4.46933 3.3006 5.998 4.33527C6.636 4.15793 7.32 4.06927 8 4.06593C8.68 4.06927 9.36467 4.15793 10.004 4.33527C11.5313 3.3006 12.202 3.51527 12.202 3.51527C12.6373 4.61727 12.3633 5.43127 12.2807 5.6326C12.794 6.1926 13.104 6.9066 13.104 7.77993C13.104 10.8526 11.2327 11.5293 9.45133 11.7273C9.738 11.9753 10 12.4619 10 13.2086V15.4039C10 15.6166 10.128 15.8666 10.534 15.7879C13.7107 14.7286 16 11.7306 16 8.19727C16 3.77927 12.418 0.197266 8 0.197266Z"
                                    fill="currentColor"
                                />
                                {/* eslint-disable max-len */}
                            </svg>
                        </LinkIconButton>
                    </div>
                    {isMobile && <MobileMenuTrigger onToggle={handleMobileMenuToggle} />}
                </Wrapper>
            </header>
            {isMobileMenuOpen && <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />}
        </>
    );
};

export default Header;

"use client";

import clsx from "clsx";
import { useState, type PropsWithoutRef } from "react";
import { Button } from "react-aria-components";

import ChevronIcon from "./assets/chevron-icon.svg";
import "./sectionPopover.css";

interface Link {
    title: string;
    url: string;
    id: string;
    level?: number;
}

interface SectionPopoverProps {
    links: Link[];
}

const SectionPopover = ({ links }: PropsWithoutRef<SectionPopoverProps>) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopover = () => {
        setIsOpen(!isOpen);
    };

    const handleWindowResize = () => {
        if (window.innerWidth > 768) {
            setIsOpen(false);
        }
    };

    if (isOpen) {
        window.addEventListener("resize", handleWindowResize);
    }

    const listItems = links.map(link => (
        <li className="hd-section-popover__list-item" key={link.id}>
            {/* This has to be an a, not a link: https://github.com/vercel/next.js/issues/49612 */}
            <a href={link.url} className={`hd-section-popover__list-link hd-section-popover__list-link-${link.level}`} onClick={togglePopover}>
                {link.title}
            </a>
        </li>
    ));

    return (
        <>
            {listItems.length > 0 && (
                <div className="hd-section-popover">
                    <Button className={clsx("hd-section-popover__button", isOpen && "hd-section-popover__button--open")} onPress={togglePopover}>
                        On this page
                        <ChevronIcon className="hd-section-popover__button-icon" />
                    </Button>
                    <div className={clsx("hd-section-popover__popover", isOpen && "hd-section-popover__popover--open")}>
                        <a className="hd-section-popover__top-section" href="#top" onClick={togglePopover}>Return to top</a>
                        <div className="hd-section-popover__container">
                            <ul className="hd-section-popover__list">
                                {listItems}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SectionPopover;

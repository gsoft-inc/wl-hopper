"use client";

import { useState } from "react";
import { Button } from "react-aria-components";

import "./sectionPopover.css";

interface Link {
    title: string;
    url: string;
    id: string;
}

interface SectionPopoverProps {
    links: Link[];
}

const SectionPopover = ({ links }: React.PropsWithoutRef<SectionPopoverProps>) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopover = () => {
        setIsOpen(!isOpen);
    };

    const listItems = links.map(link => (
        <li className="hd-section-popover__list-item" key={link.id}>
            <a href={link.url} className="hd-section-popover__list-link" onClick={togglePopover}>
                {link.title}
            </a>
        </li>
    ));

    return (
        <div className="hd-section-popover">
            <Button className="hd-section-popover__button" onPress={togglePopover}>
                    On this page
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="hd-section-popover__button-icon">
                    <path d="M4 6L8 10L12 6" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Button>
            <div className={`hd-section-popover__popover ${isOpen ? "hd-section-popover__popover--open" : ""}`}>
                <a className="hd-section-popover__top-section" href="#top" onClick={togglePopover}>Return to top</a>
                <ul className="hd-section-popover__list">
                    {listItems}
                </ul>
            </div>
        </div>
    );
};

export default SectionPopover;

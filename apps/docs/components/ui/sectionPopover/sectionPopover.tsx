"use client";

import { useState } from "react";
import cx from "classnames";
import { Button } from "react-aria-components";

import "./sectionPopover.css";
import ChevronIcon from "./assets/chevron-icon.svg";

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
            <a href={link.url} className="hd-section-popover__list-link" onClick={togglePopover}>
                {link.title}
            </a>
        </li>
    ));

    return (
        <div className="hd-section-popover">
            {listItems.length > 0 && (
                <>
                    <Button className={cx("hd-section-popover__button", isOpen && "hd-section-popover__button--open")} onPress={togglePopover}>
                        On this page
                        <ChevronIcon className="hd-section-popover__button-icon" />
                    </Button>
                    <div className={cx("hd-section-popover__popover", isOpen && "hd-section-popover__popover--open")}>
                        <a className="hd-section-popover__top-section" href="#top" onClick={togglePopover}>Return to top</a>
                        <ul className="hd-section-popover__list">
                            {listItems}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default SectionPopover;

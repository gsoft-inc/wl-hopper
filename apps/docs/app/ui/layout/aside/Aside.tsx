"use client";

import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

import "./aside.css";

interface Link {
    title: string;
    url: string;
    id: string;
}

interface AsideProps {
    title: string;
    links: Link[];
}

const Aside = ({ title, links }: React.PropsWithoutRef<AsideProps>) => {
    const [activeSection, setActiveSection] = useState("");
    const [activeItemIndex, setActiveItemIndex] = useState(-1);
    const observer = useRef<IntersectionObserver | null>(null);
    const sectionTitleDomElement = "[data-section-title]";
    const titleHeight = 28;
    
    useEffect(() => {
        const sectionsTitle = document.querySelectorAll(sectionTitleDomElement);
        const options = {
            threshold: 0.7
        };

        observer.current = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sectionsTitle.forEach(sectionTitle => {
            observer.current?.observe(sectionTitle);
        });

        const setInitialActiveItemIndex = () => {
            const lastVisibleSection = findLastFullyVisibleSection();
            if (lastVisibleSection) {
                const lastVisibleSectionIndex = links.findIndex(link => link.id === lastVisibleSection);
                setActiveItemIndex(lastVisibleSectionIndex);
            }
        };

        setInitialActiveItemIndex();

        // Cleanup function to remove observer
        return () => {
            sectionsTitle.forEach(sectionTitle => {
                observer.current?.unobserve(sectionTitle);
            });
        };
    }, [links]);

    // Custom function to determine the last fully visible section in the viewport
    const findLastFullyVisibleSection = () => {
        const sectionsTitle = document.querySelectorAll(sectionTitleDomElement);
        let lastFullyVisibleSection = null;
        let lastFullyVisibleSectionIndex = 0;

        sectionsTitle.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                lastFullyVisibleSection = section.id;
                lastFullyVisibleSectionIndex = index;
            }
        });

        setActiveItemIndex(lastFullyVisibleSectionIndex);

        return lastFullyVisibleSection;
    };

    // Scroll handler to set the active section when scrolling up
    const handleScroll = () => {
        const lastVisibleSection = findLastFullyVisibleSection();
        if (lastVisibleSection) {
            setActiveSection(lastVisibleSection);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const [isOpen, setIsOpen] = useState(false);

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth < 768 || window.innerWidth > 992) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleWindowResize);
    }, [isOpen]);

    const listItems = links.map(link => (
        <li className={clsx("hd-aside__item", activeSection === link.id && "hd-aside__item--active")} key={link.id}>
            <a href={link.url} className="hd-aside__link">
                {link.title}
            </a>
        </li>
    ));

    return (
        <aside className="hd-aside">
            {links.length > 0 && (
                <>
                    <span className="hd-aside__title">{title}</span>
                    <button type="button" className="hd-aside__button" onClick={toggleList}>
                        {title}
                        <svg width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="hd-aside__button-icon"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M4 6L8 10L12 6"
                                strokeWidth="1.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <ul className={clsx("hd-aside__list", isOpen ? "hd-aside__item--active" : "hd-aside__list--closed")}>
                        {activeItemIndex !== -1 && (
                            <span
                                className={clsx("hd-aside__marker", activeItemIndex === -1 && "hd-aside__marker--hide")}
                                style={{ top: activeItemIndex * titleHeight + "px" }}
                            ></span>)}
                        {listItems}
                    </ul>
                </>
            )}
        </aside>
    );
};

export default Aside;

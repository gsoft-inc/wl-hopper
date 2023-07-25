"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

import "./aside.css";

interface LinkProps {
    title: string;
    url: string;
    id: string;
}

interface AsideProps {
    title: string;
    links: LinkProps[];
}

export const Aside: React.FC<AsideProps> = ({ title, links }) => {
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

    return (
        <>
            {links.length > 0 && (
                <aside className="hd-aside">
                    <span className="hd-aside__title">{title}</span>
                    <ul className="hd-aside__list">
                        {activeItemIndex !== -1 && (
                            <span
                                className={`hd-aside__marker ${
                                    activeItemIndex === -1 ? "hd-aside__marker--hide" : ""
                                }`}
                                style={{ top: activeItemIndex * titleHeight + "px" }}
                            ></span>)}
                        {links.map(link => (
                            <li
                                className={`hd-aside__item ${
                                    activeSection === link.id ? "hd-aside__item--active" : ""
                                }`}
                                key={link.id}
                            >
                                <Link href={link.url} className="hd-aside__link">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            )}
        </>
    );
};

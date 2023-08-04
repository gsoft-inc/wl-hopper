"use client";

import SectionPopover from "@/components/ui/sectionPopover/sectionPopover";

import "./subHeader.css";

interface Link {
    title: string;
    url: string;
    id: string;
}

interface SubHeaderProps {
    toggleOpenState: () => void;
    links: Link[];
}

const SubHeader = ({ toggleOpenState, links }: SubHeaderProps) => {
    return (
        <div className="hd-sub-header">
            <div className="hd-wrapper">
                <div className="sub-header-container">
                    <button type="button" className="hd-sub-header__sidebar-button" onClick={toggleOpenState}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hd-sub-header__button-icon">
                            <rect x="4" y="4" width="16" height="16" rx="1" strokeWidth="2" />
                            <line x1="10.4287" y1="4.28571" x2="10.4287" y2="21" strokeWidth="2" />
                        </svg>
                    </button>
                    <SectionPopover links={links} />
                </div>
            </div>
        </div>
    );
};

export default SubHeader;

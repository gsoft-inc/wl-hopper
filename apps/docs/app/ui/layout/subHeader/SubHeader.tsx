"use client";

import SectionPopover from "@/app/ui/layout/sectionPopover/sectionPopover";

import "./subHeader.css";
import SidePanel from "./assets/side-panel.svg";

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
                        <SidePanel className="hd-sub-header__button-icon" />
                    </button>
                    <SectionPopover links={links} />
                </div>
            </div>
        </div>
    );
};

export default SubHeader;

"use client";

import SectionPopover from "@/app/ui/layout/sectionPopover/sectionPopover";
import Wrapper from "@/app/ui/layout/wrapper/Wrapper";
import { useSidebar } from "@/context/sidebar/SidebarProvider";
import { useIsMobile } from "@/hooks/useIsMobile.ts";

import SidePanel from "./assets/side-panel.svg";

import "./subHeader.css";

interface Link {
    title: string;
    url: string;
    id: string;
}

interface SubHeaderProps {
    links: Link[];
}

const SubHeader = ({ links }: SubHeaderProps) => {
    const { toggleSidebar } = useSidebar();
    const isMobile = useIsMobile("37.5rem");

    if (!isMobile) {
        return null;
    }

    return (
        <div className="hd-sub-header">
            <Wrapper>
                <div className="sub-header-container">
                    <button type="button" className="hd-sub-header__sidebar-button" onClick={toggleSidebar}>
                        <SidePanel className="hd-sub-header__button-icon" />
                    </button>
                    <SectionPopover links={links} />
                </div>
            </Wrapper>
        </div>
    );
};

export default SubHeader;

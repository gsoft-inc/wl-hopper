"use client";

import { allIcons } from "contentlayer/generated";
import { useSelectedLayoutSegment } from "next/navigation";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import SubHeader from "@/components/ui/subHeader/SubHeader";
import useSidebarState from "@/hooks/useSidebarState";
import getSectionLinks from "@/utils/getSectionLinks";

export default function TokenLayout({ children }: { children: React.ReactNode }) {
    const { isOpen, toggleOpenState } = useSidebarState(false);
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const [section, type] = selectedLayoutSegment?.split("/") ?? ["", ""];

    const pageContent = allIcons.find(icon => icon.slug === type && icon.section === section);

    if (!pageContent) {
        return null;
    }

    const sectionLinks = getSectionLinks(pageContent);

    return (
        <>
            <SubHeader toggleOpenState={toggleOpenState} links={sectionLinks} />
            <div className="hd-wrapper hd-flex">
                <Sidebar data={allIcons} isOpen={isOpen} onClose={toggleOpenState} />
                {children}
            </div>
        </>
    );
}

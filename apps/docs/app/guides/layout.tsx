"use client";

import { allGuides } from "contentlayer/generated";
import { useSelectedLayoutSegment } from "next/navigation";
import Sidebar from "@/app/ui/layout/sidebar/Sidebar";
import SubHeader from "@/app/ui/layout/subHeader/SubHeader";
import useSidebarState from "@/hooks/useSidebarState";
import getSectionLinks from "@/app/lib/getSectionLinks";

export default function TokenLayout({ children }: { children: React.ReactNode }) {
    const { isOpen, toggleOpenState } = useSidebarState(false);
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const [section, type] = selectedLayoutSegment?.split("/") ?? ["", ""];

    const pageContent = allGuides.find(icon => icon.slug === type && icon.section === section);

    if (!pageContent) {
        return null;
    }

    const sectionLinks = getSectionLinks(pageContent);

    return (
        <>
            <SubHeader toggleOpenState={toggleOpenState} links={sectionLinks} />
            <div className="hd-wrapper hd-flex">
                <Sidebar data={allGuides} isOpen={isOpen} onClose={toggleOpenState} />
                {children}
            </div>
        </>
    );
}

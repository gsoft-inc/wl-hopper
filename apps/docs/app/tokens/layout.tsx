"use client";

import { allTokens } from "contentlayer/generated";
import { useSelectedLayoutSegment } from "next/navigation";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import SubHeader from "@/components/ui/subHeader/subHeader";
import useSidebarState from "@/components/ui/sidebar/useSidebarState";
import getSectionLinks from "@/utils/getSectionLinks";

export default function TokenLayout({ children }: { children: React.ReactNode }) {
    const { isOpen, toggleOpenState } = useSidebarState(false);
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const [section, type] = selectedLayoutSegment?.split("/") ?? ["", ""];

    const pageContent = allTokens.find(token => token.slug === type && token.section === section);

    if (!pageContent) {
        return null;
    }

    const sectionLinks = getSectionLinks(pageContent);

    return (
        <>
            <SubHeader isOpen={isOpen} toggleOpenState={toggleOpenState} links={sectionLinks} />
            <div className="hd-wrapper hd-flex">
                <Sidebar data={allTokens} isOpen={isOpen} onClose={toggleOpenState} />
                {children}
            </div>
        </>
    );
}

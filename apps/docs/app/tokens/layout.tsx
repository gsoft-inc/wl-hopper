"use client";

import type { ReactNode } from "react";
import { allTokens } from "contentlayer/generated";
import { useSelectedLayoutSegment } from "next/navigation";
import Sidebar from "@/app/ui/layout/sidebar/Sidebar";
import SubHeader from "@/app/ui/layout/subHeader/SubHeader";
import { SidebarProvider } from "@/context/sidebar/SidebarProvider";
import getSectionLinks from "@/app/lib/getSectionLinks";

export default function TokenLayout({ children }: { children: ReactNode }) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const [section, type] = selectedLayoutSegment?.split("/") ?? ["", ""];

    const pageContent = allTokens.find(token => token.slug === type && token.section === section);

    if (!pageContent) {
        return null;
    }

    const sectionLinks = getSectionLinks(pageContent);

    return (
        <>
            <SidebarProvider>
                <SubHeader links={sectionLinks} />
                <div className="hd-wrapper hd-layout-with-nav">
                    <Sidebar data={allTokens} />
                    {children}
                </div>
            </SidebarProvider>
        </>
    );
}

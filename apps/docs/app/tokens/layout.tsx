"use client";

import type { ReactNode } from "react";
import { allTokens } from "contentlayer/generated";
import { useSelectedLayoutSegment } from "next/navigation";
import Sidebar from "@/app/ui/layout/sidebar/Sidebar";
import SubHeader from "@/app/ui/layout/subHeader/SubHeader";
import { SidebarProvider } from "@/context/sidebar/SidebarProvider";
import getSectionLinks from "@/app/lib/getSectionLinks";
import getPageLinks from "@/app/lib/getPageLinks";

export default function TokenLayout({ children }: { children: ReactNode }) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const [section, type] = selectedLayoutSegment?.split("/") ?? ["", ""];

    const pageContent = allTokens.find(token => token.slug === type && token.section === section);

    if (!pageContent) {
        return null;
    }

    const sectionLinks = getSectionLinks(pageContent);
    const allTokenLinks = getPageLinks(allTokens, {
        order: ["getting-started", "semantic", "core"]
    });

    return (
        <>
            <SidebarProvider>
                <SubHeader links={sectionLinks} />
                <div className="hd-wrapper hd-flex">
                    <Sidebar links={allTokenLinks} />
                    {children}
                </div>
            </SidebarProvider>
        </>
    );
}

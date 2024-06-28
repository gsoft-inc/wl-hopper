"use client";

import type { ReactNode } from "react";
import { allGettingStarteds } from "contentlayer/generated";
import { useSelectedLayoutSegment } from "next/navigation";
import Sidebar from "@/app/ui/layout/sidebar/Sidebar";
import SubHeader from "@/app/ui/layout/subHeader/SubHeader";
import getSectionLinks from "@/app/lib/getSectionLinks";
import { SidebarProvider } from "@/context/sidebar/SidebarProvider";
import getPageLinks from "@/app/lib/getPageLinks";

export default function TokenLayout({ children }: { children: ReactNode }) {
    const slug = useSelectedLayoutSegment();
    const pageContent = allGettingStarteds.find(page => page.slug === slug);
    const allGettingStartedsLinks = getPageLinks(allGettingStarteds);

    if (!pageContent) {
        return null;
    }

    const sectionLinks = getSectionLinks(pageContent);

    return (
        <>
            <SidebarProvider>
                <SubHeader links={sectionLinks} />
                <div className="hd-wrapper hd-flex">
                    <Sidebar links={allGettingStartedsLinks} />
                    {children}
                </div>
            </SidebarProvider>
        </>
    );
}

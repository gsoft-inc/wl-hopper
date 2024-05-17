"use client";

import type { ReactNode } from "react";
import { allGuides } from "contentlayer/generated";
import { useSelectedLayoutSegment } from "next/navigation";
import Sidebar from "@/app/ui/layout/sidebar/Sidebar";
import SubHeader from "@/app/ui/layout/subHeader/SubHeader";
import getSectionLinks from "@/app/lib/getSectionLinks";
import { SidebarProvider } from "@/context/sidebar/SidebarProvider";

export default function TokenLayout({ children }: { children: ReactNode }) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const [section, type] = selectedLayoutSegment?.split("/") ?? ["", ""];

    const pageContent = allGuides.find(icon => icon.slug === type && icon.section === section);

    if (!pageContent) {
        return null;
    }

    const sectionLinks = getSectionLinks(pageContent);

    return (
        <>
            <SidebarProvider>
                <SubHeader links={sectionLinks} />
                <div className="hd-wrapper hd-flex">
                    <Sidebar data={allGuides} />
                    {children}
                </div>
            </SidebarProvider>
        </>
    );
}

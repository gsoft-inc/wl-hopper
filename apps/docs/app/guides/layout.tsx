"use client";

import getPageLinks from "@/app/lib/getPageLinks";
import getSectionLinks from "@/app/lib/getSectionLinks";
import Sidebar from "@/app/ui/layout/sidebar/Sidebar";
import SubHeader from "@/app/ui/layout/subHeader/SubHeader";
import Wrapper from "@/app/ui/layout/wrapper/Wrapper";
import { SidebarProvider } from "@/context/sidebar/SidebarProvider";
import { allGuides } from "contentlayer/generated";
import { notFound, useSelectedLayoutSegment } from "next/navigation";
import type { ReactNode } from "react";

export default function GuideLayout({ children }: { children: ReactNode }) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    let segments = selectedLayoutSegment?.split("/") ?? ["", ""];
    if (segments.length === 1) {
        segments = ["guides", ...segments];
    }
    const [section, type] = segments;

    const pageContent = allGuides.find(icon => icon.slug === type && icon.section === section);

    if (!pageContent) {
        return notFound();
    }

    const sectionLinks = getSectionLinks(pageContent);
    const allGuidesLinks = getPageLinks(allGuides, {
        order: ["overview", "guides"]
    });

    return (
        <SidebarProvider>
            <SubHeader links={sectionLinks} />
            <Wrapper type="with-sidebar">
                <Sidebar links={allGuidesLinks} />
                {children}
            </Wrapper>
        </SidebarProvider>
    );
}

"use client";

import getPageLinks from "@/app/lib/getPageLinks";
import getSectionLinks from "@/app/lib/getSectionLinks";
import Sidebar from "@/app/ui/layout/sidebar/Sidebar";
import SubHeader from "@/app/ui/layout/subHeader/SubHeader";
import Wrapper from "@/app/ui/layout/wrapper/Wrapper";
import { SidebarProvider } from "@/context/sidebar/SidebarProvider";
import { allGettingStarteds } from "contentlayer/generated";
import { notFound, useSelectedLayoutSegment } from "next/navigation";
import type { ReactNode } from "react";

export default function GettingStartedLayout({ children }: { children: ReactNode }) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const [section, type] = selectedLayoutSegment?.split("/") ?? ["", ""];

    const pageContent = allGettingStarteds.find(page => page.slug === type && page.section === section);
    if (!pageContent) {
        return notFound();
    }

    const sectionLinks = getSectionLinks(pageContent);
    const allGettingStartedsLinks = getPageLinks(allGettingStarteds, {
        order: ["overview", "installation-path", "advanced-options", "guides"]
    });

    return (
        <SidebarProvider>
            <SubHeader links={sectionLinks} />
            <Wrapper type="with-sidebar">
                <Sidebar links={allGettingStartedsLinks} />
                {children}
            </Wrapper>
        </SidebarProvider>
    );
}

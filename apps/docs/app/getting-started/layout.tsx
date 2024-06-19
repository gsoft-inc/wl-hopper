"use client";

import type { ReactNode } from "react";
import { allGettingStarteds } from "contentlayer/generated";
import { useSelectedLayoutSegment } from "next/navigation";
import Sidebar from "@/app/ui/layout/sidebar/Sidebar";
import SubHeader from "@/app/ui/layout/subHeader/SubHeader";
import Wrapper from "@/app/ui/layout/wrapper/Wrapper";
import getSectionLinks from "@/app/lib/getSectionLinks";
import { SidebarProvider } from "@/context/sidebar/SidebarProvider";

export default function TokenLayout({ children }: { children: ReactNode }) {
    const slug = useSelectedLayoutSegment();
    const pageContent = allGettingStarteds.find(page => page.slug === slug);

    if (!pageContent) {
        return null;
    }

    const sectionLinks = getSectionLinks(pageContent);

    return (
        <>
            <SidebarProvider>
                <SubHeader links={sectionLinks} />
                <Wrapper type="with-sidebar">
                    <Sidebar data={allGettingStarteds} />
                    {children}
                </Wrapper>
            </SidebarProvider>
        </>
    );
}

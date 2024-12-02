"use client";

import getPageLinks from "@/app/lib/getPageLinks";
import getSectionLinks from "@/app/lib/getSectionLinks";
import Sidebar from "@/app/ui/layout/sidebar/Sidebar";
import SubHeader from "@/app/ui/layout/subHeader/SubHeader";
import Wrapper from "@/app/ui/layout/wrapper/Wrapper";
import { SidebarProvider } from "@/context/sidebar/SidebarProvider";
import { allIcons } from "contentlayer/generated";
import { notFound, useSelectedLayoutSegment } from "next/navigation";
import type { ReactNode } from "react";

export default function TokenLayout({ children }: { children: ReactNode }) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const [section, type] = selectedLayoutSegment?.split("/") ?? ["", ""];

    const pageContent = allIcons.find(icon => icon.slug === type && icon.section === section);

    if (!pageContent) {
        return notFound;
    }

    const sectionLinks = getSectionLinks(pageContent);
    const allIconLinks = getPageLinks(allIcons, {
        order: ["overview", "react-icons", "svg"]
    });

    return (
        <>
            <SidebarProvider>
                <SubHeader links={sectionLinks} />
                <Wrapper type="with-sidebar">
                    <Sidebar links={allIconLinks} />
                    {children}
                </Wrapper>
            </SidebarProvider>
        </>
    );
}

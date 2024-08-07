"use client";

import type { ReactNode } from "react";
import { allIcons } from "contentlayer/generated";
import { useSelectedLayoutSegment } from "next/navigation";
import Sidebar from "@/app/ui/layout/sidebar/Sidebar";
import SubHeader from "@/app/ui/layout/subHeader/SubHeader";
import Wrapper from "@/app/ui/layout/wrapper/Wrapper";
import getSectionLinks from "@/app/lib/getSectionLinks";
import { SidebarProvider } from "@/context/sidebar/SidebarProvider";
import getPageLinks from "@/app/lib/getPageLinks";

export default function TokenLayout({ children }: { children: ReactNode }) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const [section, type] = selectedLayoutSegment?.split("/") ?? ["", ""];

    const pageContent = allIcons.find(icon => icon.slug === type && icon.section === section);

    if (!pageContent) {
        return null;
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

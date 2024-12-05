import getPageLinks from "@/app/lib/getPageLinks";
import { SidebarLayout } from "@/app/ui/layout/sidebarLayout";
import { allIcons } from "contentlayer/generated";
import type { ReactNode } from "react";

export default function IconLayout({ children }: { children: ReactNode }) {
    const allIconLinks = getPageLinks(allIcons, {
        order: ["overview", "react-icons", "svg"]
    });

    return (
        <SidebarLayout links={allIconLinks}>
            {children}
        </SidebarLayout>
    );
}

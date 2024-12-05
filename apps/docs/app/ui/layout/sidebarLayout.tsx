import { SidebarProvider } from "@/context/sidebar/SidebarProvider";
import type { ReactNode } from "react";
import Sidebar, { type SidebarProps } from "./sidebar/Sidebar";
import Wrapper from "./wrapper/Wrapper";

interface SidebarLayoutProps {
    links: SidebarProps["links"];
    children: ReactNode;
}

export const SidebarLayout = ({ links, children }: SidebarLayoutProps) => (
    <SidebarProvider>
        <Wrapper type="with-sidebar">
            <Sidebar links={links} />
            {children}
        </Wrapper>
    </SidebarProvider>
);

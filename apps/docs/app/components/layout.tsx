"use client";

import { allComponents } from "contentlayer/generated";
import Sidebar from "@/components/ui/sidebar/Sidebar";
import useSidebarState from "@/components/ui/sidebar/useSidebarState";

export default function ComponentsLayout({ children } : { children: React.ReactNode }) {
    const { isOpen, toggleOpenState } = useSidebarState(false);

    return (
        <>
            <div className="hd-wrapper hd-flex">
                <Sidebar data={allComponents} isOpen={isOpen} onClose={toggleOpenState} />
                {children}
            </div>
        </>
    );
}

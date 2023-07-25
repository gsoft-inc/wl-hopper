import { allComponents } from "contentlayer/generated";
import Sidebar from "@/components/ui/sidebar/Sidebar";

export default function ComponentsLayout({ children } : { children: React.ReactNode }) {
    return (
        <>
            <Sidebar data={allComponents} />
            {children}
        </>
    );
}

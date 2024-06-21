import type { ReactNode } from "react";
import Sidebar from "@/app/ui/layout/sidebar/Sidebar";
import { SidebarProvider } from "@/context/sidebar/SidebarProvider";
import { type ComponentData, getComponentDetails } from "@/app/lib/getComponentDetails.ts";
import path from "path";

interface Data {
    frontmatter: ComponentData;
    slugs: string[];
    content: ReactNode;
}

function formatComponentData(data: Data[]) {
    return data.map((component, index) => {
        const { slugs, frontmatter: { title, order } } = component;
        let section = "";

        if (slugs.length > 1) {
            section = slugs[0];
        }

        return {
            _id: `component-${index}`,
            title,
            order,
            section: section,
            _raw: {
                flattenedPath: `components/${path.join(...slugs)}`
            }
        };
    });
}

async function ComponentsLayout({ children }: { children: ReactNode }) {
    const components = await getComponentDetails();
    const data = formatComponentData(components);

    return (
        <SidebarProvider>
            <div className="hd-wrapper hd-flex sm:hd-flex-direction-column">
                <Sidebar data={data} order={["getting-started", "concepts", "buttons"]} />
                {children}
            </div>
        </SidebarProvider>
    );
}

export default ComponentsLayout;

import type { ReactNode } from "react";
import Sidebar from "@/app/ui/layout/sidebar/Sidebar";
import { SidebarProvider } from "@/context/sidebar/SidebarProvider";
import { type ComponentData, getComponentDetails } from "@/app/lib/getComponentDetails.ts";

interface Data {
    frontmatter: ComponentData;
    slug: string;
    content: ReactNode;
}

function formatComponentData(data: Data[]) {
    return data.map((component, index) => {
        const { slug, frontmatter: { title, order } } = component;
        let section = "";

        if (slug.split("/").length > 1) {
            section = slug.split("/")[0];
        }

        return {
            _id: `component-${index}`,
            title,
            order,
            section: section,
            _raw: {
                flattenedPath: `components/${slug}`
            }
        };
    });
}

async function ComponentsLayout({ children }: { children: ReactNode }) {
    const components = await getComponentDetails();
    const data = formatComponentData(components);

    return (
        <SidebarProvider>
            <div className="hd-wrapper hd-layout-with-nav sm:hd-flex-direction-column">
                <Sidebar data={data} />
                {children}
            </div>
        </SidebarProvider>
    );
}

export default ComponentsLayout;

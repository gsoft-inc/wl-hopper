import type { ReactNode } from "react";
import Sidebar from "@/app/ui/layout/sidebar/Sidebar";
import Wrapper from "@/app/ui/layout/wrapper/Wrapper";
import { SidebarProvider } from "@/context/sidebar/SidebarProvider";
import { type ComponentData, getComponentDetails } from "@/app/lib/getComponentDetails.ts";
import getPageLinks from "@/app/lib/getPageLinks.ts";

interface Data {
    frontmatter: ComponentData;
    slugs: string[];
    content: ReactNode;
}

function formatComponentData(data: Data[]) {
    return data.map((component, index) => {
        console.log(component);

        const { slugs, frontmatter: { title, order, status } } = component;
        let section = "";

        if (slugs.length > 1) {
            section = slugs[0];
        }

        // we exclude the category from the link, so we only take the last slug
        const componentLink = slugs[slugs.length - 1];

        return {
            _id: `component-${index}`,
            title,
            order,
            status,
            section: section,
            _raw: {
                flattenedPath: `components/${componentLink}`
            }
        };
    });
}

async function ComponentsLayout({ children }: { children: ReactNode }) {
    const components = await getComponentDetails();
    const data = formatComponentData(components);
    const links = getPageLinks(data, { order: [
        "overview",
        "concepts",
        "application",
        "layout",
        "buttons",
        "collections",
        "forms",
        "icons",
        "navigation",
        "overlays",
        "pickers",
        "status",
        "content"
    ] });


    return (
        <SidebarProvider>
            <Wrapper type="with-sidebar">
                <Sidebar links={links} />
                {children}
            </Wrapper>
        </SidebarProvider>
    );
}

export default ComponentsLayout;

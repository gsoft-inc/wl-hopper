import { getComponentDetails } from "@/app/lib/getComponentDetails.ts";
import getPageLinks from "@/app/lib/getPageLinks.ts";
import { SidebarLayout } from "@/app/ui/layout/sidebarLayout";
import type { ReactNode } from "react";


function formatComponentData(data: Awaited<ReturnType<typeof getComponentDetails>>) {
    return data.map((component, index) => {
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
        <SidebarLayout links={links}>
            {children}
        </SidebarLayout>
    );
}

export default ComponentsLayout;

import { notFound } from "next/navigation";

import Heading from "@/app/ui/components/heading/Heading.tsx";
import SubHeader from "@/app/ui/layout/subHeader/SubHeader.tsx";
import Aside from "@/app/ui/layout/aside/Aside.tsx";

import { getComponentDetails } from "@/app/lib/getComponentDetails.ts";
import getSectionLinks from "@/app/lib/getSectionLinks.ts";

interface PageProps {
    params: {
        slug: string[];
    };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    const componentsDetails = await getComponentDetails();

    return componentsDetails.map(({ slugs }) => {
        const [section, type] = slugs;

        return ({
            slug: [section, type]
        });
    });
}

export default async function ComponentPage({ params }: PageProps) {
    const [section, type] = params.slug;

    const component = (await getComponentDetails()).find(componentDetail => {
        const [componentSlugSection, componentSlugType] = componentDetail.slugs;

        return componentSlugType === type && componentSlugSection === section;
    });

    if (!component) {
        notFound();
    }

    const { content, frontmatter: { title, status, description, links } } = component;
    const componentLinks = links && [
        {
            name: "github",
            src: links.source,
            label: "View source"
        },
        {
            name: "npm",
            src: "https://www.npmjs.com/package/@hopper-ui/components",
            label: "View on npm"
        },
        {
            name: "issue",
            src: "https://github.com/gsoft-inc/wl-hopper/issues/new",
            label: "Report an issue"
        }
    ];

    const sectionLinks = getSectionLinks({ body: { raw: component.raw } });

    return (
        <div className="hd-section">
            <SubHeader links={sectionLinks} />
            <div className="hd-container">
                {type !== "overview" && <Aside title="On this page" links={sectionLinks} />}
                <main>
                    <Heading title={title} tag={status} description={description} links={componentLinks} />
                    <div className="hd-content">
                        {content}
                    </div>
                </main>
            </div>
        </div>
    );
}

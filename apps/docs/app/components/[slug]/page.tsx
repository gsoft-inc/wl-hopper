import { notFound } from "next/navigation";
import Heading from "@/app/ui/components/heading/Heading.tsx";
import { getComponentDetails } from "@/app/lib/getComponentDetails.ts";

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    const componentsDetails = await getComponentDetails();

    return componentsDetails.map(({ slug }) => ({
        slug
    }));
}

export default async function ComponentPage({ params }: PageProps) {
    const component = (await getComponentDetails()).find(componentDetail => componentDetail.slug === params.slug);

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
            src: links.npm,
            label: "View on npm"
        },
        {
            name: "issue",
            src: links.issue,
            label: "Report an issue"
        }
    ];

    return (
        <div className="hd-container">
            <main>
                <Heading title={title} tag={status} description={description} links={componentLinks} />

                <div className="hd-content">
                    {content}
                </div>
            </main>
        </div>
    );
}

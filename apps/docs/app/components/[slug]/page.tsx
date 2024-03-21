import { notFound } from "next/navigation";
import { allComponents } from "contentlayer/generated";

import Tag from "@/components/ui/tag/Tag";
import LinkList from "@/components/linkList/LinkList";

import { getComponentDetails } from "@/utils/getComponentDetails.ts";
import Title from "@/components/ui/title/Title.tsx";

import "./components.css";

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return allComponents.map(({ slug }) => ({
        slug
    }));
}

export default async function ComponentPage({ params }: PageProps) {
    const component = (await getComponentDetails()).find(componentDetail => componentDetail.slug === params.slug);

    if (!component) {
        notFound();
    }

    const { content, frontmatter: { title, status, description, links } } = component;

    const linksList = [
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
                <div className="hd-flex hd-component-heading">
                    <Title as="h1">{title}</Title>
                    {status && <Tag>{status}</Tag>}
                </div>

                <p>{description}</p>
                
                <LinkList links={linksList} />

                {content}

                {/*the sections below are simply for zoning purposes, they will be replaced by real content*/}
                {/*<section>*/}
                {/*    <h2>Usage</h2>*/}
                {/*    <p>Alerts are used to communicate a state that affects the entire system, not just a single*/}
                {/*        component. They are used to communicate a state that affects the entire system, not just a*/}
                {/*        single component. They are used to communicate a state that affects the entire system, not just*/}
                {/*        a single component. They are used to communicate a state that affects the entire system, not*/}
                {/*        just a single component.</p>*/}
                {/*</section>*/}

                {/*<section>*/}
                {/*    <h2>Anatomy</h2>*/}
                {/*</section>*/}

                {/*<section>*/}
                {/*    <h2>API</h2>*/}
                {/*</section>*/}

                {/*<section>*/}
                {/*    <h2>Examples</h2>*/}
                {/*</section>*/}

                {/*<section>*/}
                {/*    <h2>Accessibility</h2>*/}
                {/*</section>*/}

                {/*<section>*/}
                {/*    <h2>Related</h2>*/}
                {/*</section>*/}

                {/*<div>*/}
                {/*    <button type="submit">Preview</button>*/}
                {/*    <button type="submit">Next</button>*/}
                {/*</div>*/}
            </main>
        </div>
    );
}

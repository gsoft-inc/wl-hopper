import { notFound } from "next/navigation";
import { allComponents } from "contentlayer/generated";
import { getComponentDetails } from "@/utils/getComponentDetails.ts";

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

    const { content, frontmatter: { title, status, description } } = component;

    return (
        <div className="hd-container">
            <main>
                <h1>{title}</h1><span>{status}</span>
                <p>{description}</p>
                {content}

                {/*the sections below are simply for zoning purposes, they will be replaced by real content*/}
                <section>
                    <h2>Preview</h2>
                    <p>
                        code here
                    </p>
                </section>

                <section>
                    <h2>Usage</h2>
                    <p>Alerts are used to communicate a state that affects the entire system, not just a single
                        component. They are used to communicate a state that affects the entire system, not just a
                        single component. They are used to communicate a state that affects the entire system, not just
                        a single component. They are used to communicate a state that affects the entire system, not
                        just a single component.</p>
                </section>

                <section>
                    <h2>Anatomy</h2>
                </section>

                <section>
                    <h2>API</h2>
                </section>

                <section>
                    <h2>Examples</h2>
                </section>

                <section>
                    <h2>Accessibility</h2>
                </section>

                <section>
                    <h2>Related</h2>
                </section>

                <div>
                    <button type="submit">Preview</button>
                    <button type="submit">Next</button>
                </div>
            </main>
        </div>
    );
}

import { notFound } from "next/navigation";
import { allComponents } from "contentlayer/generated";
import Mdx from "@/components/ui/mdx/Mdx";

interface PageProps {
    params: {
        slug: string;
    };
}

async function getNoteFromParams(params: PageProps["params"]) {
    const componentContent = allComponents.find(component => component.slug === params.slug);

    if (!componentContent) {
        return null;
    }

    return componentContent;
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
    return allComponents.map(({ slug }) => ({
        slug
    }));
}

export default async function ComponentPage({ params }: PageProps) {
    const componentContent = await getNoteFromParams(params);

    if (!componentContent) {
        notFound();
    }

    return (
        <main>
            <article key={componentContent._id}>
                {componentContent.status &&
                    `status: ${componentContent.status}`
                }
                {componentContent.body && <Mdx code={componentContent.body.code} />}
            </article>
        </main>
    );
}

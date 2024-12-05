import getSectionLinks from "@/app/lib/getSectionLinks.ts";
import { BasePageLayout } from "@/app/ui/layout/basePageLayout/BasePageLayout";
import Mdx from "@/components/mdx/Mdx.tsx";
import Title from "@/components/title/Title";
import { allGettingStarteds } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        slug: string[];
    };
}

function findPageFromSlug(slug: string[]) {
    const [section, type] = slug;

    return allGettingStarteds.find(page => page.section === section && page.slug === type);
}

export default function GettingStartedPage({ params }: PageProps) {
    const page = findPageFromSlug(params.slug);

    if (!page) {
        notFound();
    }

    const sectionLinks = getSectionLinks(page);
    const { title, body: { code }, _id: id } = page;

    return (
        <BasePageLayout sectionsLinks={sectionLinks}>
            <article className="hd-content" key={id}>
                <Title level={1}>{title}</Title>
                <Mdx code={code} />
            </article>
        </BasePageLayout>
    );
}


export async function generateStaticParams() {
    return allGettingStarteds.map(({ section, slug }) => ({
        slug: [section, slug]
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const page = await findPageFromSlug(params.slug);

    return {
        title: page ? `${page.title}` : null
    };
}

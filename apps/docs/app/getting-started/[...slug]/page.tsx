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

export default function IconPage({ params }: PageProps) {
    const pages = findPageFromSlug(params.slug);

    if (!pages) {
        notFound();
    }

    const sectionLinks = getSectionLinks(pages);

    return (
        <BasePageLayout sectionsLinks={sectionLinks}>
            <article className="hd-content" key={pages._id}>
                <Title as="h1">{pages.title}</Title>
                <Mdx code={pages.body.code} />
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

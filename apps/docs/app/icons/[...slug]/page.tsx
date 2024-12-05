import getSectionLinks from "@/app/lib/getSectionLinks.ts";
import { BasePageLayout } from "@/app/ui/layout/basePageLayout/BasePageLayout";
import Mdx from "@/components/mdx/Mdx.tsx";
import Title from "@/components/title/Title";
import { allIcons } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        slug: string[];
    };
}

function findPageFromSlug(slug: string[]) {
    const [section, type] = slug;

    return allIcons.find(page => page.section === section && page.slug === type);
}


export default function IconPage({ params }: PageProps) {
    const icons = findPageFromSlug(params.slug);

    if (!icons) {
        notFound();
    }

    const sectionLinks = getSectionLinks(icons);

    return (
        <BasePageLayout sectionsLinks={sectionLinks}>
            <article className="hd-content" key={icons._id}>
                <Title level={1}>{icons.title}</Title>
                <Mdx code={icons.body.code} />
            </article>
        </BasePageLayout>
    );
}

export async function generateStaticParams() {
    return allIcons.map(({ section, slug }) => ({
        slug: [section, slug]
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const page = await findPageFromSlug(params.slug);

    return {
        title: page ? `${page.title}` : null
    };
}

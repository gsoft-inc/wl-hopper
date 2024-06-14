import { notFound } from "next/navigation";
import { allGettingStarteds } from "contentlayer/generated";

import Aside from "@/app/ui/layout/aside/Aside.tsx";
import Mdx from "@/components/mdx/Mdx.tsx";
import getSectionLinks from "@/app/lib/getSectionLinks.ts";
import Title from "@/components/title/Title";

interface PageProps {
    params: {
        slug: string[];
    };
}

export async function generateStaticParams() {
    return allGettingStarteds.map(({ section }) => ({
        slug: [section]
    }));
}

export default function IconPage({ params }: PageProps) {
    const [slug] = params.slug;

    const pages = allGettingStarteds.find(page => page.slug === slug);

    if (!pages) {
        notFound();
    }

    const sectionLinks = getSectionLinks(pages);

    return (
        <div className="hd-container">
            <Aside title="On this page" links={sectionLinks} />
            <main>
                <article className="hd-content" key={pages._id}>
                    <Title as="h1">{pages.title}</Title>
                    <Mdx code={pages.body.code} />
                </article>
            </main>
        </div>
    );
}

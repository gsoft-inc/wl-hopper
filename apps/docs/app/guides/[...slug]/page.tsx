import { allGuides } from "contentlayer/generated";
import { notFound } from "next/navigation";

import getSectionLinks from "@/app/lib/getSectionLinks.ts";
import Aside from "@/app/ui/layout/aside/Aside.tsx";
import Mdx from "@/components/mdx/Mdx.tsx";

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return allGuides.map(({ slug, section }) => ({
        slug: [section, slug]
    }));
}

export default function GuidePage({ params }: PageProps) {
    const [section, type] = params.slug;
    const guides = allGuides.find(icon => icon.slug === type && icon.section === section);

    if (!guides) {
        notFound();
    }

    const sectionLinks = getSectionLinks(guides);

    return (
        <div className="hd-container">
            <Aside title="On this page" links={sectionLinks} />
            <main>
                <article className="hd-content" key={guides._id}>
                    <h1 className="hd-title hd-title--level1">{guides.title}</h1>
                    <Mdx code={guides.body.code} />
                </article>
            </main>
        </div>
    );
}

import { notFound } from "next/navigation";
import { allGuides } from "contentlayer/generated";

import Aside from "@/components/ui/aside/Aside.tsx";
import Mdx from "@/components/ui/mdx/Mdx";
import getSectionLinks from "@/utils/getSectionLinks.ts";

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
    const [ section, type ] = params.slug;
    const guides = allGuides.find(icon => icon.slug === type && icon.section === section);

    if (!guides) {
        notFound();
    }

    const sectionLinks = getSectionLinks(guides);

    return (
        <div className="hd-container">
            <Aside title="On this page" links={sectionLinks} />
            <main>
                <article key={guides._id}>
                    <Mdx code={guides.body.code} />
                </article>
            </main>
        </div>
    );
}

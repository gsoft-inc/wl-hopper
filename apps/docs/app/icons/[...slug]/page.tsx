import { notFound } from "next/navigation";
import { allIcons } from "contentlayer/generated";

import Aside from "@/app/ui/layout/aside/Aside.tsx";
import Mdx from "@/components/mdx/Mdx.tsx";
import getSectionLinks from "@/app/lib/getSectionLinks.ts";

interface PageProps {
    params: {
        slug: string[];
    };
}

export async function generateStaticParams() {
    return allIcons.map(({ slug, section }) => ({
        slug: [section, slug]
    }));
}

export default function IconPage({ params }: PageProps) {
    const [section, type] = params.slug;
    const icons = allIcons.find(icon => icon.slug === type && icon.section === section);

    if (!icons) {
        notFound();
    }

    const sectionLinks = getSectionLinks(icons);

    return (
        <div className="hd-container">
            <Aside title="On this page" links={sectionLinks} />
            <main>
                <article className="hd-content" key={icons._id}>
                    <Mdx code={icons.body.code} />
                </article>
            </main>
        </div>
    );
}

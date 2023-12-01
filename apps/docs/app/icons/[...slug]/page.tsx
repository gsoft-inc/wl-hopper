import { notFound } from "next/navigation";
import { allIcons } from "contentlayer/generated";

import Aside from "@/components/ui/aside/Aside.tsx";
import Mdx from "@/components/ui/mdx/Mdx.tsx";
import getSectionLinks from "@/utils/getSectionLinks.ts";

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

export default function TokenPage({ params }: PageProps) {
    const [ section, type ] = params.slug;
    const designToken = allIcons.find(icon => icon.slug === type && icon.section === section);

    if (!designToken) {
        notFound();
    }

    const sectionLinks = getSectionLinks(designToken);

    return (
        <div className="hd-container">
            <Aside title="On this page" links={sectionLinks} />
            <main>
                <article key={designToken._id}>
                    <Mdx code={designToken.body.code} />
                </article>
            </main>
        </div>
    );
}

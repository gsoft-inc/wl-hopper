import { notFound } from "next/navigation";
import { allTokens } from "contentlayer/generated";

import Aside from "@/app/ui/layout/aside/Aside.tsx";
import Mdx from "@/components/mdx/Mdx.tsx";
import getSectionLinks from "@/app/lib/getSectionLinks.ts";

interface PageProps {
    params: {
        slug: string[];
    };
}

export async function generateStaticParams() {
    return allTokens.map(({ slug, section }) => ({
        slug: [section, slug]
    }));
}

export default function TokenPage({ params }: PageProps) {
    const [section, type] = params.slug;
    const designToken = allTokens.find(token => token.slug === type && token.section === section);

    if (!designToken) {
        notFound();
    }

    const sectionLinks = getSectionLinks(designToken);

    return (
        <div className="hd-container">
            <Aside title="On this page" links={sectionLinks} />
            <main>
                <article className="hd-content" key={designToken._id}>
                    <h1 className="hd-title hd-title--level1">{designToken.title}</h1>
                    <Mdx code={designToken.body.code} />
                </article>
            </main>
        </div>
    );
}

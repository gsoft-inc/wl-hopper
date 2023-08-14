import { notFound } from "next/navigation";
import { allTokens } from "contentlayer/generated";

import Aside from "@/components/ui/aside/Aside.tsx";
import Mdx from "@/components/ui/mdx/Mdx.tsx";
import getSectionLinks from "@/utils/getSectionLinks.ts";

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
    const [ section, type ] = params.slug;
    const designToken = allTokens.find(token => token.slug === type && token.section === section);

    if (!designToken) {
        notFound();
    }

    const sectionLinks = getSectionLinks(designToken);

    return (
        <>
            <main>
                <article key={designToken._id}>
                    <Mdx code={designToken.body.code} />
                </article>
            </main>
            <Aside title="Contents" links={sectionLinks} />
        </>
    );
}

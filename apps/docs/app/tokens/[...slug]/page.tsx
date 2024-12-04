import { allTokens } from "contentlayer/generated";
import { notFound } from "next/navigation";

import getSectionLinks from "@/app/lib/getSectionLinks.ts";
import { BasePageLayout } from "@/app/ui/layout/basePageLayout/BasePageLayout";
import Mdx from "@/components/mdx/Mdx.tsx";

interface PageProps {
    params: {
        slug: string[];
    };
}

function findPageFromSlug(slug: string[]) {
    const [section, type] = slug;

    return allTokens.find(page => page.section === section && page.slug === type);
}

export default function TokenPage({ params }: PageProps) {
    const designToken = findPageFromSlug(params.slug);

    if (!designToken) {
        notFound();
    }

    const sectionLinks = getSectionLinks(designToken);

    return (
        <BasePageLayout sectionsLinks={sectionLinks}>
            <article className="hd-content" key={designToken._id}>
                <h1 className="hd-title hd-title--level1">{designToken.title}</h1>
                <Mdx code={designToken.body.code} />
            </article>
        </BasePageLayout>
    );
}

export async function generateStaticParams() {
    return allTokens.map(({ section, slug }) => ({
        slug: [section, slug]
    }));
}

// The sections are Overview, Semantic and Core. we want all title in "Core" to be "Core " + "Color"(the token type) + " Tokens"
export async function generateMetadata({ params }: PageProps) {
    const page = await findPageFromSlug(params.slug);

    if (page?.section === "core") {
        return {
            title: `Core ${page.title} Tokens`
        };
    } else if (page?.section === "semantic") {
        return {
            title: `Semantic ${page.title} Tokens`
        };
    }

    return {
        title: page ? `${page.title}` : null
    };
}

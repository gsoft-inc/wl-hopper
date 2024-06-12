import { notFound } from "next/navigation";
import { allGettingStarteds } from "contentlayer/generated";

import Aside from "@/app/ui/layout/aside/Aside.tsx";
import Mdx from "@/components/mdx/Mdx.tsx";
import getSectionLinks from "@/app/lib/getSectionLinks.ts";

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

export default function GettingStartedPage({ params }: PageProps) {
    const [section] = params.slug;

    const pages = allGettingStarteds.find(page => page.slug === section);


    if (!pages) {
        notFound();
    }

    const sectionLinks = getSectionLinks(pages);

    return (
        <div className="hd-container">
            <Aside title="On this page" links={sectionLinks} />
            <main>
                <article className="hd-content" key={pages._id}>
                    <h1 className="hd-title hd-title--level1">{pages.title}</h1>
                    <Mdx code={pages.body.code} />
                </article>
            </main>
        </div>
    );
}

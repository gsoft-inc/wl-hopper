"use client";

import { allPages } from "contentlayer/generated";
import Mdx from "@/components/ui/mdx/Mdx";
import { notFound } from "next/navigation";
import Aside from "@/components/ui/aside/Aside.tsx";
import getSectionLinks from "@/utils/getSectionLinks";

export default function HeadingsLinkPage() {
    const page = allPages.find(iconPage => iconPage._id === "pages/playground-headings-links.mdx");

    if (!page) {
        notFound();
    }

    const sectionLinks = getSectionLinks(page);

    return (
        <>
            <main>
                <article key={page._id}>
                    {page.body && <Mdx code={page.body.code} />}
                </article>
            </main>
            <Aside title="Contents" links={sectionLinks} />
        </>
    );
}

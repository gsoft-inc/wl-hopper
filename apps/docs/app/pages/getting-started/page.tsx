"use client";

import { allPages } from "contentlayer/generated";
import Mdx from "@/components/mdx/Mdx";
import { notFound } from "next/navigation";
import Aside from "@/app/ui/layout/aside/Aside.tsx";
import getSectionLinks from "@/app/lib/getSectionLinks";

export default function GettingStartedPage() {
    const page = allPages.find(gettingStartedPage => gettingStartedPage._id === "pages/getting-started.mdx");

    if (!page) {
        notFound();
    }

    const sectionLinks = getSectionLinks(page);

    return (
        <div className="hd-wrapper hd-flex">
            <Aside title="On this page" links={sectionLinks} />
            <main>
                <article className="hd-content" key={page._id}>
                    <h1 className="hd-title hd-title--level1">{page.title}</h1>
                    {page.body && <Mdx code={page.body.code} />}
                </article>
            </main>
        </div>
    );
}

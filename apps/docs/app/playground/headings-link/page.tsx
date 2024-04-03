"use client";

import { allPages } from "contentlayer/generated";
import Mdx from "@/components/mdx/Mdx";
import { notFound } from "next/navigation";
import Aside from "@/app/ui/layout/aside/Aside.tsx";
import getSectionLinks from "@/app/lib/getSectionLinks";

export default function HeadingsLinkPage() {
    const page = allPages.find(iconPage => iconPage._id === "pages/playground-headings-links.mdx");

    if (!page) {
        notFound();
    }

    const sectionLinks = getSectionLinks(page);

    return (
        <div className="hd-wrapper hd-flex">
            <div className="hd-container">
                <Aside title="On this page" links={sectionLinks} />
                <main>
                    <article className="hd-content" key={page._id}>
                        {page.body && <Mdx code={page.body.code} />}
                    </article>
                </main>
            </div>
        </div>
    );
}

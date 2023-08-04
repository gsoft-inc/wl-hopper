"use client";

import { allPages } from "contentlayer/generated";
import Mdx from "@/components/ui/mdx/Mdx";
import { notFound } from "next/navigation";

export default function IconPage() {
    const page = allPages.find(iconPage => iconPage._id === "pages/icons.mdx");

    if (!page) {
        notFound();
    }

    return (
        <div className="hd-wrapper hd-flex">
            <main>
                <article key={page._id}>
                    {page.body && <Mdx code={page.body.code} />}
                </article>
            </main>
        </div>
    );
}

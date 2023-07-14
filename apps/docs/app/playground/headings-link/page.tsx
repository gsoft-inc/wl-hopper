"use client";

import { allPages } from "@/.contentlayer/generated";
import { Mdx } from "@/components/Mdx/MdxComponent";
import { notFound } from "next/navigation";

export default function Page() {
<<<<<<<< HEAD:apps/docs/app/playground/headings-link/page.tsx
    return <main>
        {allPages
            .filter(page => page._id === "pages/playground-headings-links.mdx")
            .map(page => (
========
    const page = allPages.find(iconPage => iconPage._id === "pages/icons.mdx");

    if (!page) {
        notFound();
    }

    return (
        <>
            <main>
>>>>>>>> main:apps/docs/app/icons/page.tsx
                <article key={page._id}>
                    {page.body && <Mdx code={page.body.code} />}
                </article>
            </main>
        </>
    );
}

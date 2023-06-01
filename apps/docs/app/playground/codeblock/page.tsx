"use client";

import { allPages } from "@/.contentlayer/generated";
import { Mdx } from "@/components/Mdx/MdxComponent";

import "../../page.css";

export default function Page() {
    return <main>
        {allPages
            .filter(page => page._id === "pages/playground.mdx")
            .map(page => (
                <article key={page._id}>
                    {page.body && <Mdx code={page.body.code} />}
                </article>
            ))}
    </main>;
}

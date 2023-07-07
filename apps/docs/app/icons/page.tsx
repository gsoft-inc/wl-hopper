"use client";

import { allPages } from "@/.contentlayer/generated";
import { Mdx } from "@/components/Mdx/MdxComponent";

export default function Page() {
    return <>
        {allPages
            .filter(page => page._id === "pages/icons.mdx")
            .map(page => (
                <main>
                    <article key={page._id}>
                        {page.body && <Mdx code={page.body.code} />}
                    </article>
                </main>
            ))}
    </>;
}

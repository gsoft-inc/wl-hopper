"use client";

import { allPages } from "contentlayer/generated";
import Mdx from "@/components/ui/mdx/Mdx";

export default function CodeBlockPage() {
    return <main>
        {allPages
            .filter(page => page._id === "pages/playground-codeblock.mdx")
            .map(page => (
                <div className="hd-wrapper hd-flex">
                    <article key={page._id}>
                        {page.body && <Mdx code={page.body.code} />}
                    </article>
                </div>
            ))}
    </main>;
}

import { allPages } from "contentlayer/generated";
import Mdx from "@/components/ui/mdx/Mdx";

export default function IntroPage() {
    return <main>
        {allPages.map(page => (
            <article key={page._id}>
                {page.body && <Mdx code={page.body.code} />}
            </article>
        ))}
    </main>;
}

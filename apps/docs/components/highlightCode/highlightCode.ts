import { type Plugin, unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { rehypePluginOptions } from "@/app/lib/rehypeConfig";
import rehypeStringify from "rehype-stringify";

export async function highlightCode(code: string) {
    const file = await unified()
        .use(remarkParse as unknown as Plugin)
        .use(remarkRehype as unknown as Plugin)
        .use(rehypePluginOptions as unknown as Plugin)
        .use(rehypeStringify as unknown as Plugin)
        .process(code);

    return String(file);
}

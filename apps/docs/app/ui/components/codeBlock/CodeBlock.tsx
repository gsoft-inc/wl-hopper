import { unified, type Plugin } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypeOptions } from "@/app/lib/rehypeConfig";

interface CodeBlockProps {
    code: string;
    className?: string;
}

export async function CodeBlock({ code, className }: CodeBlockProps) {
    const highlightedCode = await highlightCode(code);

    return (
        <section
            className={className}
            dangerouslySetInnerHTML={{
                __html: highlightedCode
            }}
        />
    );
}

async function highlightCode(code: string) {
    const file = await unified()
        .use(remarkParse as unknown as Plugin)
        .use(remarkRehype as unknown as Plugin)
        .use(rehypePrettyCode, rehypeOptions)
        .use(rehypeStringify as unknown as Plugin)
        .process(code);

    return String(file);
}

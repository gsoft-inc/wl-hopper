import { unified, type Plugin } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypeOptions } from "@/app/lib/rehypeConfig";
import { getExampleComponentPath, getFileContent, getFormattedCode } from "@/app/lib/getFileContent.ts";

interface CodeBlockProps {
    filePath: string;
    className?: string;
}


export async function CodeBlock({ filePath, className }: CodeBlockProps) {
    const examplePath = getExampleComponentPath(filePath);
    const codeExample = await getFileContent(`${examplePath}.tsx`);
    const formattedCode = await getFormattedCode(codeExample);
    const highlightedCode = await highlightCode(formattedCode);

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

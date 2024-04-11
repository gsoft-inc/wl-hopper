import path from "path";
import { promises as fs } from "fs";
import { type Plugin, unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { rehypePluginOptions } from "@/app/lib/rehypeConfig";

function formatComponentExamplePath(uri: string) {
    return path.join(process.cwd(), "..", "..", "packages", "components", "src", uri);
}

export async function getFileContent(filePath: string) {
    return await fs.readFile(filePath, "utf8");
}

export async function getFormattedCode(code: string) {
    return (`
\`\`\`tsx showLineNumbers
${code}
\`\`\`
`);
}

async function highlightCode(code: string) {
    const file = await unified()
        .use(remarkParse as unknown as Plugin)
        .use(remarkRehype as unknown as Plugin)
        .use(rehypePluginOptions as unknown as Plugin)
        .use(rehypeStringify as unknown as Plugin)
        .process(code);

    return String(file);
}

export async function getComponentCode(filePath: string) {
    const examplePath = formatComponentExamplePath(filePath);
    const fileContent = await getFileContent(`${examplePath}.tsx`);
    const formattedCode = await getFormattedCode(fileContent);

    return await highlightCode(formattedCode);
}

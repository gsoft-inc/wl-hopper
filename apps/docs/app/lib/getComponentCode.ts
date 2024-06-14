import path from "path";
import { promises as fs } from "fs";
import { highlightCode } from "@/components/highlightCode";

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

export async function getComponentCode(filePath: string) {
    const examplePath = formatComponentExamplePath(filePath);
    const fileContent = await getFileContent(`${examplePath}.tsx`);
    const formattedCode = await getFormattedCode(fileContent);

    return await highlightCode(formattedCode);
}

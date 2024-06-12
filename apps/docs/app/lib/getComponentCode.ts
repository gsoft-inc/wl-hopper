import path from "path";
import { promises as fs } from "fs";
import { highlightCode } from "@/components/highlightCode";
import { mockGetComponentCode } from "@/app/lib/getComponentCode.mock";

function formatComponentExamplePath(uri: string) {
    const basePath = path.join(process.cwd(), "..", "..", "packages", "components", "src");

    return path.join(basePath, uri);
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
    if (process.env.STORYBOOK_MODE === "active") {
        return mockGetComponentCode();
    }

    const examplePath = formatComponentExamplePath(filePath);
    const fileContent = await getFileContent(`${examplePath}.tsx`);
    const formattedCode = await getFormattedCode(fileContent);

    return await highlightCode(formattedCode);
}

import path from "path";
import { promises as fs } from "fs";
import { highlightCode } from "@/components/highlightCode";

function formatComponentExamplePath(uri: string) {
    if (uri.includes("icons/docs/")) {
        const updatedUri = uri.replace("icons/", "");

        return path.join(process.cwd(), "..", "..", "packages", "icons", "src", updatedUri);
    }

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

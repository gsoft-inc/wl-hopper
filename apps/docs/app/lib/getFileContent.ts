import { promises as fs } from "fs";
import path from "path";

/**
 * Get the content of a file
 * @param filePath - The path to the file
 * @returns The content of the file
 */
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

export function getExampleComponentPath(uri: string) {
    return path.join(process.cwd(), "..", "..", "packages", "components", "src", uri);
}

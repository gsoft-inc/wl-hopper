import { promises as fs } from "fs";

/**
 * Get the content of a file
 * @param filePath - The path to the file
 * @returns The content of the file
 */
export async function getFileContent(filePath: string) {
    return await fs.readFile(process.cwd() + "/" + filePath, "utf8");
}

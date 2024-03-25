import path from "path";
import fs from "fs";

/**
 * Get the content of a file
 * @param filePath - The path to the file
 * @returns The content of the file
 */
export async function getFileContent(filePath: string) {
    const absolutePath = path.resolve(filePath);

    return await fs.promises.readFile(absolutePath, "utf8");
}

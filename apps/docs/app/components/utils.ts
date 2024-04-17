import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";

type Src = string;

async function parseFrontMatter(fileContent: string) {
    const { content, frontmatter } = await compileMDX<object>({
        source: fileContent,
        options: {
            parseFrontmatter: true,
            mdxOptions: { remarkPlugins: [] }
        }
    });

    return { content, frontmatter };
}

async function readFile(src: Src) {
    const rawContent = fs.readFileSync(`${src}.md`, "utf-8");

    return await parseFrontMatter(rawContent);
}

function getFileData(src: Src) {
    return readFile(src);
}

export async function getMigrationNotes(src: Src) {
    return await getFileData(path.join(process.cwd(), "..", "..", "packages", "components", "src", src));
}

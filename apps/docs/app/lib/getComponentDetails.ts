import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { components } from "@/components/mdx/components.tsx";
import { rehypePluginOptions } from "@/app/lib/rehypeConfig";

export const COMPONENT_PATH = path.join(process.cwd(), "content", "components");

async function parseFrontMatter(fileContent: string) {
    const { content, frontmatter } = await compileMDX<{
        title: string;
        description: string;
        status: string;
        links: { source: string; npm: string; issue: string };
    }>({
        source: fileContent,
        options: {
            parseFrontmatter: true,
            mdxOptions: { remarkPlugins: [], rehypePlugins: rehypePluginOptions as unknown as [] }
        },
        components: components
    });

    return { content, frontmatter };
}

async function readMDXFile(filePath: string) {
    const rawContent = fs.readFileSync(filePath, "utf-8");

    return await parseFrontMatter(rawContent);
}

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter(file => [".mdx"].includes(path.extname(file)));
}

function getMDXData(dir: string) {
    const mdxFiles = getMDXFiles(dir);

    return mdxFiles.map(async file => {
        const { frontmatter, content } = await readMDXFile(path.join(dir, file));
        const slug = path.basename(file, path.extname(file));

        return {
            slug,
            frontmatter,
            content
        };
    });
}

export async function getComponentDetails() {
    const mdxDataPromises = getMDXData(COMPONENT_PATH);

    return await Promise.all(mdxDataPromises);
}

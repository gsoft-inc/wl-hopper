import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { components } from "@/components/mdx/components.tsx";
import { rehypePluginOptions } from "@/app/lib/rehypeConfig";
import { data } from "@/app/lib/contentConfig.ts";

export const COMPONENT_PATH = path.join(process.cwd(), "content", "components");

export interface ComponentData {
    title: string;
    description: string;
    status?: string;
    links?: { source: string; npm: string; issue: string };
    order?: number | undefined;
}

async function parseFrontMatter(fileContent: string) {
    const { content, frontmatter } = await compileMDX<ComponentData>({
        source: fileContent,
        options: {
            scope: data,
            parseFrontmatter: true,
            mdxOptions: { remarkPlugins: [], rehypePlugins: rehypePluginOptions as unknown as [] }
        },
        components: components
    });

    return { content, frontmatter, raw: fileContent };
}

async function readMDXFile(filePath: string) {
    const rawContent = fs.readFileSync(filePath, "utf-8");

    return await parseFrontMatter(rawContent);
}

function getMDXFiles(dir: string) {
    const elements = fs.readdirSync(dir);
    let filelist: string[] = [];

    elements.forEach(element => {
        if (fs.statSync(path.join(dir, element)).isDirectory()) {
            filelist = filelist.concat(getMDXFiles(path.join(dir, element)));
        } else if (path.extname(element) === ".mdx") {
            filelist.push(path.join(dir, element));
        }
    });

    return filelist;
}

function getMDXData(dir: string) {
    const mdxFiles = getMDXFiles(dir);

    return mdxFiles.map(async file => {
        const { frontmatter, content, raw } = await readMDXFile(file);
        const startIndex = file.indexOf(COMPONENT_PATH) + COMPONENT_PATH.length + 1;
        const slug = file.substring(startIndex, file.length - ".mdx".length);

        return {
            slug,
            frontmatter,
            content,
            raw
        };
    });
}

export async function getComponentDetails() {
    const mdxDataPromises = getMDXData(COMPONENT_PATH);

    return await Promise.all(mdxDataPromises);
}

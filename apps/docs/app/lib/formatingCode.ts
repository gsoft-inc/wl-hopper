import { highlightCode } from "@/components/highlightCode";

export async function formatCode(code: string, language: string) {
    return await highlightCode(`
\`\`\`${language}
${code}
\`\`\`
`);
}

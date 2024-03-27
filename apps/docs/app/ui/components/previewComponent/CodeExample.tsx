import { getFileContent } from "@/app/lib/getFileContent.ts";
import { CodeBlock } from "@/app/ui/components/codeBlock/CodeBlock.tsx";

interface CodeExampleProps {
    name: string;
    className?: string;
}

const CodeExample = async ({ name, className }: CodeExampleProps) => {
    const code = await getFileContent(`../../packages/components/src/${name}.tsx`);

    const formattedCode = `
\`\`\`tsx showLineNumbers
${code}
\`\`\`
`;

    return <CodeBlock className={className} code={formattedCode} />;
};

export default CodeExample;

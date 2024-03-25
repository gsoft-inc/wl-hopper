import { getFileContent } from "@/app/lib/getFileContent.ts";
import { CodeBlock } from "@/components/codeBlock/CodeBlock.tsx";
import clsx from "clsx";

const CodeExample = async ({ name, key, className }: { name: string; key: string; className?: string }) => {
    const code = await getFileContent(`../../packages/components/src/${name}.tsx`);

    const formattedCode = `
\`\`\`tsx showLineNumbers
${code}
\`\`\`
`;

    return <CodeBlock className={clsx(className)} key={key} code={formattedCode} />;
};

export default CodeExample;

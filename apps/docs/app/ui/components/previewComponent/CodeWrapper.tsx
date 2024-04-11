import { getComponentCode } from "@/app/lib/getComponentCode.ts";
import CodeBlock from "@/app/ui/components/codeBlock/CodeBlock.tsx";

interface CodeWrapperProps {
    filePath: string;
}

async function CodeWrapper({ filePath }: CodeWrapperProps) {
    const code = await getComponentCode(filePath);

    return (
        <CodeBlock code={code} />
    );
}

export default CodeWrapper;

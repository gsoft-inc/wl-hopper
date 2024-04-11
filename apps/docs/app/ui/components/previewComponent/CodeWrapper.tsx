import { getComponentCode } from "@/app/lib/getComponentCode.ts";
import CodeBlock from "@/app/ui/components/codeBlock/CodeBlock.tsx";

interface CodeWrapperProps {
    src: string;
}

async function CodeWrapper({ src }: CodeWrapperProps) {
    const code = await getComponentCode(src);

    return (
        <CodeBlock code={code} />
    );
}

export default CodeWrapper;

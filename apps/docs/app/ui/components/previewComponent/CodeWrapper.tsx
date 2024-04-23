import { getComponentCode } from "@/app/lib/getComponentCode.ts";
import HighlightCode from "@/components/highlightCode/HighlightCode.tsx";

interface CodeWrapperProps {
    src: string;
}

async function CodeWrapper({ src }: CodeWrapperProps) {
    const code = await getComponentCode(src);

    return (
        <HighlightCode code={code} />
    );
}

export default CodeWrapper;

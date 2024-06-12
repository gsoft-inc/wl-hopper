import { getComponentCode } from "@/app/lib/getComponentCode.ts";
import HighlightCode from "../../../../components/highlightCode/HighlightCode.tsx";
import { useEffect, useState } from "react";

interface CodeProps {
    src: string;
}

function Code({ src }: CodeProps) {
    const [code, setCode] = useState<string | null>(null);

    useEffect(() => {
        getComponentCode(src).then(setCode);
    }, [src]);

    if (!code) {
        return <div>loading...</div>;
    }

    return (
        <HighlightCode code={code} />
    );
}

export default Code;

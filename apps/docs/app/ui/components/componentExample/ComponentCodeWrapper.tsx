import { getComponentCode } from "@/app/lib/getComponentCode.ts";
import HighlightCode from "../../../../components/highlightCode/HighlightCode.tsx";

interface ComponentCodeWrapperProps {
    src: string;
}

export const ComponentCodeWrapper = async ({ src }: ComponentCodeWrapperProps) => {
    if (!src) {
        return null;
    }

    const code = await getComponentCode(src);

    return <HighlightCode code={code} />;
};

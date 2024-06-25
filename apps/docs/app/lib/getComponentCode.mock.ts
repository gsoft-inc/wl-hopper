import { highlightCode } from "@/components/highlightCode";
import { getFormattedCode } from "@/app/lib/getComponentCode.ts";

export async function mockGetComponentCode(code: string) {
    const mockCode = await getFormattedCode(code);

    return await highlightCode(mockCode);
}

import { highlightCode } from "@/components/highlightCode";
import { getFormattedCode } from "@/app/lib/getComponentCode.ts";

export async function mockGetComponentCode() {
    const mockCode = await getFormattedCode("import { Button } from \"@hopper-ui/components\"");

    return await highlightCode(mockCode);
}

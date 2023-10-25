import { isNil } from "../utils/assertion.ts";
import { useInsertionEffectWithFallback } from "./useInsertionEffectWithFallback.ts";

export function useInjectGlobalStyles(elementId: string, cssContent: string) {
    useInsertionEffectWithFallback(() => {
        let element = document.getElementById(elementId);
        if (isNil(element)) {
            element = document.createElement("style");
            element.id = elementId;
            document.head.appendChild(element);
            element.innerText = cssContent;

            return () => {
                element?.remove();
            };
        } else {
            element.innerText = cssContent;
        }
    }, [elementId, cssContent]);
}

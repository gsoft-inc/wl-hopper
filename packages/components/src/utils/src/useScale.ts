import { useMediaQuery } from "@hopper-ui/styled-system";

export type Scale = "medium" | "large";

/**
 * Taken from https://github.com/adobe/react-spectrum/blob/4b27a0c027f4fbab9ed1070c748966c902b13429/packages/%40react-spectrum/provider/src/mediaQueries.ts#L49
 */

/**
 * Returns the current scale based on the media queries, which tests for the pointer size.
 * @returns Scale
 */
export function useScale(): Scale {
    const matchesFine = useMediaQuery("(any-pointer: fine)");
    if (matchesFine) {
        return "medium";
    }

    return "large";
}
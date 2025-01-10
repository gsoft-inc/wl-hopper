/*
 * Taken from: https://github.com/adobe/react-spectrum/blob/main/packages/%40react-spectrum/s2/src/pressScale.ts
 */

import type { CSSProperties, RefObject } from "react";
import { composeRenderProps } from "react-aria-components";

export function pressScale<R extends { isPressed: boolean }>(ref: RefObject<HTMLElement | null>, _style?: CSSProperties | ((renderProps: R) => CSSProperties)) {
    return composeRenderProps(_style, (style, renderProps: R) => {
        if (renderProps.isPressed && ref.current) {
            const { width = 0, height = 0 } = ref.current.getBoundingClientRect() ?? {};

            return {
                ...style,
                willChange: `${style?.willChange ?? ""} transform`,
                transform: `${style?.transform ?? ""} perspective(${Math.max(height, width / 3, 24)}px) translate3d(0, 0, -2px)`
            };
        } else {
            return {
                ...style,
                willChange: `${style?.willChange ?? ""} transform`
            };
        }
    });
}

import { useMemo, type CSSProperties, type ReactNode } from "react";
import type { RenderPropsHookOptions } from "./types.ts";

/**
* Taken from https://github.com/adobe/react-spectrum/blob/main/packages/react-aria-components/src/utils.tsx
*/

export function useRenderProps<T>(props: RenderPropsHookOptions<T>) {
    const {
        className,
        style,
        children,
        defaultClassName,
        defaultChildren,
        values
    } = props;
  
    return useMemo(() => {
        let computedClassName: string | undefined;
        let computedStyle: CSSProperties | undefined;
        let computedChildren: ReactNode | undefined;
  
        if (typeof className === "function") {
            computedClassName = className(values);
        } else {
            computedClassName = className;
        }
  
        if (typeof style === "function") {
            computedStyle = style(values);
        } else {
            computedStyle = style;
        }
        
        if (typeof children === "function") {
            computedChildren = children(values);
        } else if (children == null) {
            computedChildren = defaultChildren;
        } else {
            computedChildren = children;
        }
  
        return {
            className: computedClassName ?? defaultClassName,
            style: computedStyle,
            children: computedChildren
        };
    }, [className, style, children, defaultClassName, defaultChildren, values]);
}
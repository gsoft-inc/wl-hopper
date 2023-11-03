import { forwardRef, type ElementRef } from "react";
import type { StyledComponentProps } from "../styled-system-props.ts";
import { useStyledSystem } from "../useStyledSystem.ts";


export type HtmlElementProps<T extends keyof JSX.IntrinsicElements> = StyledComponentProps<T>;

export function htmlElement<T extends keyof JSX.IntrinsicElements>(name: string, elementType: T) {
    return forwardRef<ElementRef<T>, HtmlElementProps<T>>((props, ref) => {
        const styled = useStyledSystem(props);

        const As = elementType;

        return (
            <As {...styled}>
            </As>
        );
    });
}



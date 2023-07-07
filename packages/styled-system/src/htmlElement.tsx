import { forwardRef, type ComponentProps, type JSX, type ElementRef, type ElementType } from "react";
import type { StyledSystemProps } from "./styled-system-props.ts";
import { useStyledSystem } from "./useStyledSystem.ts";
import { mergeProps } from "react-aria";

export type HtmlPropsWithoutOverlappingAttributes<T extends keyof JSX.IntrinsicElements> = Omit<ComponentProps<T>, keyof StyledSystemProps>;

export type HtmlElementProps<T extends keyof JSX.IntrinsicElements> = StyledSystemProps & HtmlPropsWithoutOverlappingAttributes<T>;

export function htmlElement<T extends keyof JSX.IntrinsicElements>(name: string, elementType: T) {
    return forwardRef<ElementRef<T>, HtmlElementProps<T>>((props, ref) => {
        const {
            ...rest
        } = useStyledSystem(props);

        const As = elementType;

        return (
            <As
                {...mergeProps<ComponentProps<ElementType>[]>(
                    rest,
                    { ref }
                )}
            />
        );
    });
}

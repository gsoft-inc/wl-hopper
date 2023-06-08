import { forwardRef, type ComponentProps, type JSX, type ElementRef, type ElementType } from "react";
import type { StyledSystemProps } from "./style-props/styled-system-props.ts";
import { useStyledSystem } from "./index.ts";
import { useStyleProps } from "./core-external-package/StyleContext.ts";
import { mergeProps } from "react-aria";

type HtmlPropsWithoutOverlappingAttributes<T extends keyof JSX.IntrinsicElements> = Omit<ComponentProps<T>, keyof StyledSystemProps>;

export type HtmlElementProps<T extends keyof JSX.IntrinsicElements> = StyledSystemProps & HtmlPropsWithoutOverlappingAttributes<T> & {
    as?: ElementType;
};

// TODO: Orbit ajoute ces classes là, pourquoi?
// .o-ui-element,
// .o-ui-element::after,
// .o-ui-element::before {
//     box-sizing: border-box;
// }

export function htmlElement<T extends keyof JSX.IntrinsicElements>(name: string, elementType: T) {
    return forwardRef<ElementRef<T>, HtmlElementProps<T>>((props, ref) => {
        const [styleProps] = useStyleProps<HtmlElementProps<T>>(name);

        const mergedProps = mergeProps(
            styleProps,
            props
        ) as HtmlElementProps<T>;

        const {
            as,
            ...rest
        } = useStyledSystem<HtmlElementProps<T>>(mergedProps);

        const As = as ?? elementType;

        return (
            <As
                {...mergeProps<ComponentProps<ElementType>[]>(
                    rest,
                    {
                        ref
                    }
                )}
            />
        );
    });
}
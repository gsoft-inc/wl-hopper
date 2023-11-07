import { forwardRef, type ElementRef } from "react";
import type { StyledComponentProps } from "../styled-system-props.ts";
import { useStyledSystem } from "../useStyledSystem.ts";
import clsx from "../utils/clsx.ts";
import styles from "./htmlElement.module.css";

export type HtmlElementProps<T extends keyof JSX.IntrinsicElements> = StyledComponentProps<T>;

export function htmlElement<T extends keyof JSX.IntrinsicElements>(elementType: T) {
    return forwardRef<ElementRef<T>, HtmlElementProps<T>>((props, ref) => {
        const { className, children, ...rest } = useStyledSystem(props);

        const As = elementType;
        const classNames = clsx(className, styles["html-element"]);

        return (
            // It's hard for typescript, but it's ok
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <As ref={ref} className={classNames} {...rest}>
                {children}
            </As>
        );
    });
}

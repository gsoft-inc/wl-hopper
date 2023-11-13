import clsx from "clsx";
import { forwardRef, type ElementRef } from "react";
import type { StyledComponentProps } from "../styled-system-props.ts";
import { useStyledSystem } from "../useStyledSystem.ts";
import styles from "./htmlElement.module.css";

export type HtmlElementProps<T extends keyof JSX.IntrinsicElements> = StyledComponentProps<T>;

export function htmlElement<T extends keyof JSX.IntrinsicElements>(elementType: T) {
    return forwardRef<ElementRef<T>, HtmlElementProps<T>>((props, ref) => {
        const { className, children, ...rest } = useStyledSystem(props);

        const As = elementType;
        const classNames = clsx(
            className,
            styles["html-element"],
            `hop-html-${elementType}` // this selector is not used, but could be used as a selector for the element type wrapper
        );

        return (
            // It's too hard for typescript, a generic elementType, with generic props.
            // Basically, the interface is HTMLProps of the elementType + styled system props.
            // useStyledSystem removes the styled system props, so what is remaining is valid for the elementType.
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <As ref={ref} className={classNames} {...rest}>
                {children}
            </As>
        );
    });
}

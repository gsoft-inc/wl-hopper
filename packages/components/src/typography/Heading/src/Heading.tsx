import { type ResponsiveProp, type StyledComponentProps, useResponsiveValue } from "@hopper-ui/components";
import { useStyledSystem } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type ForwardedRef, type CSSProperties } from "react";
import { useContextProps, Heading as RACHeading, type HeadingProps as RACHeadingProps } from "react-aria-components";

import { cssModule } from "../../../utils/index.ts";

import { HeadingContext } from "./HeadingContext.ts";

import styles from "./Heading.module.css";


export const GlobalHeadingCssSelector = "hop-Heading";

export interface HeadingProps extends StyledComponentProps<RACHeadingProps> {
    /**
     * The Typography Type Scale to use.
     * @default "md"
     */
    size?: ResponsiveProp<"inherit" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl">;
}

function Heading(props: HeadingProps, ref: ForwardedRef<HTMLHeadingElement>) {
    [props, ref] = useContextProps(props, ref, HeadingContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const { className, size: sizeProp, children, style, ...otherProps } = ownProps;

    const size = useResponsiveValue(sizeProp ?? "md");

    const classNames = clsx(
        GlobalHeadingCssSelector,
        cssModule(
            styles,
            "hop-Heading",
            size
        ),
        stylingProps.className,
        className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    return (
        <RACHeading
            {...otherProps}
            ref={ref}
            className={classNames}
            style={mergedStyles}
        >
            {children}
        </RACHeading>
    );
}

/**
 * A primitive heading component matching Hopper's typography type scale.
 *
 * [View Documentation](TODO)
 */
const _Heading = forwardRef<HTMLHeadingElement, HeadingProps>(Heading);
_Heading.displayName = "Heading";

export { _Heading as Heading };

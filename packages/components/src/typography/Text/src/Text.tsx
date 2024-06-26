import {
    type StyledComponentProps,
    useStyledSystem,
    type ResponsiveProp,
    useResponsiveValue
} from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type ForwardedRef, forwardRef, type CSSProperties } from "react";
import { Text as RACText, useContextProps, type TextProps as RACTextProps } from "react-aria-components";

import { cssModule, SlotProvider, ClearContainerSlots } from "../../../utils/index.ts";

import { TextContext } from "./TextContext.ts";

import styles from "./Text.module.css";

export const GlobalTextCssSelector = "hop-Text";

export interface TextProps extends StyledComponentProps<RACTextProps> {
    /**
     * The Typography Type Scale to use.
     * @default "md"
     */
    size?: ResponsiveProp<"inherit" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl">;
}

function Text(props: TextProps, ref: ForwardedRef<HTMLSpanElement>) {
    [props, ref] = useContextProps(props, ref, TextContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const { className, size: sizeProp, children, style, elementType = "span", ...otherProps } = ownProps;

    const size = useResponsiveValue(sizeProp ?? "md");

    const classNames = clsx(
        GlobalTextCssSelector,
        cssModule(
            styles,
            "hop-Text",
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
        <RACText
            {...otherProps}
            ref={ref}
            elementType={elementType}
            className={classNames}
            style={mergedStyles}
        >
            <ClearContainerSlots>
                <SlotProvider
                    values={[
                        [TextContext, {
                            size: "inherit"
                        }]
                    ]}
                >
                    {children}
                </SlotProvider>
            </ClearContainerSlots>
        </RACText>
    );
}

/**
 * A primitive text component matching Hopper's typography type scale.
 *
 * [View Documentation](TODO)
 */
const _Text = forwardRef<HTMLSpanElement, TextProps>(Text);
_Text.displayName = "Text";

export { _Text as Text };

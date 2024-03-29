import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { type ForwardedRef, forwardRef, type CSSProperties } from "react";
import { Text as RACText, useContextProps, type TextProps as RACTextProps } from "react-aria-components";
import clsx from "clsx";
import styles from "./Text.module.css";
import { cssModule } from "../../utils/src/cssModule.ts";
import { TextContext } from "./TextContext.ts";

export const GlobalTextCssSelector = "hop-Text";

// Won't be needed in next react-aria-components release: https://github.com/adobe/react-spectrum/pull/5850
const DefaultTextSlot = "text";

export type RACTextPropsToOmit = "elementType";

export interface TextProps extends StyledComponentProps<Omit<RACTextProps, RACTextPropsToOmit>> {
    /**
     * The Typography Type Scale to use.
     * @default "md"
     */
    size?: ResponsiveProp<"inherit" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl">;
}

function Text(props:TextProps, ref: ForwardedRef<HTMLSpanElement>) {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultTextSlot }, ref, TextContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const { className, size: sizeProp, children, style, ...otherProps } = ownProps;

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
            elementType="span"
            className={classNames}
            style={mergedStyles}
        >
            {children}
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

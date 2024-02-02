import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { type ForwardedRef, createContext, forwardRef } from "react";
import { Text as RACText, useContextProps, type TextProps as RACTextProps, type ContextValue } from "react-aria-components";
import clsx from "clsx";
import styles from "./Text.module.css";
import { mergeProps } from "@react-aria/utils";
import { cssModule } from "../../utils/src/css-module.ts";

// TODO: create some kind of meta object with global css selectors, default slot and context?
const GlobalTextCssSelector = "hop-Text-component";
const DefaultSlot = "text";

export type RACTextPropsToOmit = "elementType";

export interface TextProps extends StyledComponentProps<Omit<RACTextProps, RACTextPropsToOmit>> {
    /**
     * The Typography Type Scale to use.
     * @default "md"
     */
    size?: ResponsiveProp<"inherit" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl">;
}

export const TextContext = createContext<ContextValue<TextProps, HTMLSpanElement>>({});
TextContext.displayName = "TextContext";

const Text = (props:TextProps, ref: ForwardedRef<HTMLSpanElement>) => {
    // eslint-disable-next-line no-param-reassign, react/destructuring-assignment
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultSlot }, ref, TextContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const { className, size: sizeProp, children, ...otherProps } = ownProps;

    const size = useResponsiveValue(sizeProp ?? "md");

    const classNames = clsx(
        GlobalTextCssSelector,
        cssModule(
            styles,
            "hop-text",
            size
        ),
        stylingProps.className,
        className
    );

    return (
        <RACText
            {...mergeProps({ ...stylingProps }, otherProps)}
            ref={ref}
            elementType="span"
            className={classNames}
        >
            {children}
        </RACText>
    );
};

/**
 * A primitive text component matching Hopper's typography type scale.
 *
 * [View Documentation](TODO)
 */
export const _Text = forwardRef<HTMLSpanElement, TextProps>(Text);
_Text.displayName = "Text";

export { _Text as Text };



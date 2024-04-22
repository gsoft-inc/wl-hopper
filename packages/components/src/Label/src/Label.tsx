import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type ForwardedRef, forwardRef, type CSSProperties } from "react";
import { Label as RACLabel, useContextProps, type LabelProps as RACLabelProps } from "react-aria-components";

import { cssModule } from "../../utils/index.ts";

import { LabelContext } from "./LabelContext.ts";

import styles from "./Label.module.css";


export const GlobalLabelCssSelector = "hop-Label";

// Won't be needed in next react-aria-components release: https://github.com/adobe/react-spectrum/pull/5850
const DefaultLabelSlot = "label";

export type RACLabelPropsToOmit = "elementType";

// TODO: Add necessityIndicator and required Props
export interface LabelProps extends StyledComponentProps<Omit<RACLabelProps, RACLabelPropsToOmit>> {
    /**
     * The Typography Type Scale to use.
     * @default "md"
     */
    size?: ResponsiveProp<"inherit" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl">;
}

function Label(props:LabelProps, ref: ForwardedRef<HTMLLabelElement>) {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultLabelSlot }, ref, LabelContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const { className, size: sizeProp, children, style, ...otherProps } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = clsx(
        className,
        GlobalLabelCssSelector,
        cssModule(
            styles,
            "hop-Label",
            size
        ),
        stylingProps.className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    return (
        <RACLabel
            {...otherProps}
            ref={ref}
            className={classNames}
            style={mergedStyles}
        >
            {children}
        </RACLabel>
    );
}

/**
 * A primitive label component matching Hopper's typography type scale.
 *
 * [View Documentation](TODO)
 */
const _Label = forwardRef<HTMLLabelElement, LabelProps>(Label);
_Label.displayName = "Label";

export { _Label as Label };

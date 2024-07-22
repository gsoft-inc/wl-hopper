import {
    type StyledComponentProps,
    useStyledSystem
} from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type ForwardedRef, forwardRef, type CSSProperties } from "react";
import { Label as RACLabel, useContextProps, type LabelProps as RACLabelProps } from "react-aria-components";

import { cssModule } from "../../../utils/index.ts";

import { LabelContext } from "./LabelContext.ts";

import styles from "./Label.module.css";

export const GlobalLabelCssSelector = "hop-Label";

// TODO: Add necessityIndicator and required Props
export interface LabelProps extends StyledComponentProps<RACLabelProps> {}

function Label(props: LabelProps, ref: ForwardedRef<HTMLLabelElement>) {
    [props, ref] = useContextProps(props, ref, LabelContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const { className, children, style, ...otherProps } = ownProps;

    const classNames = clsx(
        className,
        GlobalLabelCssSelector,
        cssModule(
            styles,
            "hop-Label"
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

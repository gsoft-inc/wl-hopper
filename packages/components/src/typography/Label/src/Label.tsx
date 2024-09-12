import {
    useStyledSystem,
    type StyledComponentProps
} from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type CSSProperties, type ForwardedRef } from "react";
import { Label as RACLabel, useContextProps, type LabelProps as RACLabelProps } from "react-aria-components";

import { useLocalizedString } from "../../../i18n/index.ts";
import { cssModule } from "../../../utils/index.ts";

import { LabelContext } from "./LabelContext.ts";

import styles from "./Label.module.css";

export const GlobalLabelCssSelector = "hop-Label";

// TODO: Add necessityIndicator and required Props
export interface LabelProps extends StyledComponentProps<RACLabelProps> {
    /**
     * Whether the label shows a required state.
     */
    isRequired?: boolean;

    /**
     * Whether the required state should be shown as an icon or text.
     */
    necessityIndicator?: "icon" | "label";
}

function Label(props: LabelProps, ref: ForwardedRef<HTMLLabelElement>) {
    [props, ref] = useContextProps(props, ref, LabelContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        style,
        isRequired,
        necessityIndicator = isRequired != null ? "icon" : null,
        ...otherProps
    } = ownProps;

    const stringFormatter = useLocalizedString();

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

    const necessityLabel = isRequired ? stringFormatter.format("Label.necessityLabel.required") : stringFormatter.format("Label.necessityLabel.optional");

    const requiredIndicator = <span aria-hidden="true"
        aria-label={necessityLabel}
        className={styles["hop-Label__indicator"]}
    >*</span>;

    return (
        <RACLabel
            {...otherProps}
            ref={ref}
            className={classNames}
            style={mergedStyles}
        >
            {children}
            {necessityIndicator === "label" && <span> ({necessityLabel})</span>}
            {necessityIndicator === "icon" && isRequired && requiredIndicator}
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

import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { type ForwardedRef, forwardRef } from "react";
import { Label as RACLabel, useContextProps, type LabelProps as RACLabelProps } from "react-aria-components";
import clsx from "clsx";
import styles from "./Label.module.css";
import { mergeProps } from "@react-aria/utils";
import { cssModule } from "../../utils/src/css-module.ts";
import { LabelContext } from "./LabelContext.ts";

// TODO: create some kind of meta object with global css selectors, default slot and context?
const GlobalLabelCssSelector = "hop-Label-component";
const DefaultSlot = "label";

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
    // eslint-disable-next-line no-param-reassign, react/destructuring-assignment
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultSlot }, ref, LabelContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const { className, size: sizeProp, children, ...otherProps } = ownProps;

    const size = useResponsiveValue(sizeProp ?? "md");

    const classNames = clsx(
        GlobalLabelCssSelector,
        cssModule(
            styles,
            "hop-label",
            size
        ),
        stylingProps.className,
        className
    );

    return (
        <RACLabel
            {...mergeProps({ ...stylingProps }, otherProps)}
            ref={ref}
            className={classNames}
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



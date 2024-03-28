import { forwardRef, type ForwardedRef, type CSSProperties } from "react";
import clsx from "clsx";
import { type StyledSystemProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { CheckboxContext } from "./CheckboxContext.ts";
import { CheckboxFieldContext } from "./CheckboxFieldContext.ts";
import { useContextProps } from "react-aria-components";
import { cssModule } from "../../utils/src/cssModule.ts";
import type { BaseComponentProps } from "../../utils/src/types.ts";
import { SlotProvider, type SizeAdapter } from "../../utils/index.ts";
import { TextContext, type TextProps } from "../../Text/index.ts";
import { useId } from "react-aria";

import styles from "./CheckboxField.module.css";

export const GlobalCheckboxFieldCssSelector = "hop-CheckboxField";

const CheckboxToDescriptionSizeAdapter: SizeAdapter<CheckboxFieldProps["size"], TextProps["size"]> = {
    sm: "xs",
    md: "sm"
};

export interface CheckboxFieldProps extends StyledSystemProps, BaseComponentProps {
    /**
     * Whether the checkbox field is disabled.
     */
    isDisabled?: boolean;
    /**
     * A checkbox can vary in size.
     */
    size?: ResponsiveProp<"sm" | "md">;
}

function CheckboxField(props:CheckboxFieldProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, CheckboxFieldContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        isDisabled,
        size: sizeProp = "md",
        style,
        slot = "checkboxField",
        ...otherProps
    } = ownProps;

    
    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = clsx(
        className,
        GlobalCheckboxFieldCssSelector,
        cssModule(
            styles,
            "hop-CheckboxField",
            size
        ),
        stylingProps.className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    const descriptionId = useId();

    return (
        <SlotProvider
            values={[
                [TextContext, {
                    id: descriptionId,
                    className: styles["hop-CheckboxField__description"],
                    size: CheckboxToDescriptionSizeAdapter[size]
                }],
                [CheckboxContext, {
                    className: styles["hop-CheckboxField__checkbox"],
                    size: size,
                    isDisabled: isDisabled,
                    "aria-describedby": descriptionId 
                }]
            ]}
        >
            <div
                {...otherProps}
                ref={ref}
                className={classNames}
                style={mergedStyles}
                slot={slot ?? undefined}
                data-disabled={isDisabled}
            >
                {children}
            </div>
        </SlotProvider>
    );
}

/**
 * The Checkbox Field component is a container for a checkbox and a description.
 *
 * [View Documentation](TODO)
 */
const _CheckboxField = forwardRef<HTMLDivElement, CheckboxFieldProps>(CheckboxField);
_CheckboxField.displayName = "CheckboxField";

export { _CheckboxField as CheckboxField };

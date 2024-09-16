import {
    useResponsiveValue,
    useStyledSystem,
    type ResponsiveProp,
    type StyledSystemProps
} from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import { mergeProps, useId } from "react-aria";
import { composeRenderProps, useContextProps } from "react-aria-components";

import { TextContext, type TextProps } from "../../typography/Text/index.ts";
import { composeClassnameRenderProps, cssModule, SlotProvider, useRenderProps, type BaseComponentRenderProps, type SizeAdapter } from "../../utils/index.ts";

import { CheckboxContext } from "./CheckboxContext.ts";
import { CheckboxFieldContext } from "./CheckboxFieldContext.ts";

import styles from "./CheckboxField.module.css";

export const GlobalCheckboxFieldCssSelector = "hop-CheckboxField";

const CheckboxToDescriptionSizeAdapter: SizeAdapter<CheckboxFieldProps["size"], TextProps["size"]> = {
    sm: "xs",
    md: "sm"
};

interface CheckboxFieldRenderProps {
    /**
     * Whether the checkbox field is disabled.
     */
    isDisabled?: boolean;
}

export interface CheckboxFieldProps extends StyledSystemProps, BaseComponentRenderProps<CheckboxFieldRenderProps> {
    /**
     * Whether the checkbox field is disabled.
     */
    isDisabled?: boolean;
    /**
     * A checkbox field can vary in size.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;
}

function CheckboxField(props: CheckboxFieldProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, CheckboxFieldContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        isDisabled,
        size: sizeProp = "md",
        style,
        slot,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalCheckboxFieldCssSelector,
        cssModule(
            styles,
            "hop-CheckboxField",
            size
        ),
        stylingProps.className
    );

    const mergedStyles = composeRenderProps(style, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    const renderProps = useRenderProps<CheckboxFieldRenderProps>({
        ...props,
        className: classNames,
        style: mergedStyles,
        values: {
            isDisabled: isDisabled || false
        }
    });

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
                {...mergeProps(otherProps, renderProps)}
                ref={ref}
                slot={slot ?? undefined}
                data-disabled={isDisabled}
            >
                {renderProps.children}
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

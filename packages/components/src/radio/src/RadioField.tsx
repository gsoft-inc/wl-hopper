import { type StyledSystemProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type ForwardedRef, type CSSProperties } from "react";
import { useId } from "react-aria";
import { useContextProps } from "react-aria-components";

import { TextContext, type TextProps } from "../../Text/index.ts";
import { SlotProvider, type SizeAdapter, cssModule, type BaseComponentProps } from "../../utils/index.ts";

import { RadioContext } from "./RadioContext.ts";
import { RadioFieldContext } from "./RadioFieldContext.ts";

import styles from "./RadioField.module.css";

export const GlobalRadioFieldCssSelector = "hop-RadioField";

const RadioToDescriptionSizeAdapter: SizeAdapter<RadioFieldProps["size"], TextProps["size"]> = {
    sm: "xs",
    md: "sm"
};

export interface RadioFieldProps extends StyledSystemProps, BaseComponentProps {
    /**
     * Whether the radio field is disabled.
     * @default false
     */
    isDisabled?: boolean;
    /**
     * A radio can vary in size.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;
}

function RadioField(props:RadioFieldProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, RadioFieldContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        isDisabled = false,
        size: sizeProp = "md",
        style,
        slot = "radioField",
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = clsx(
        className,
        GlobalRadioFieldCssSelector,
        cssModule(
            styles,
            "hop-RadioField",
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
                    className: styles["hop-RadioField__description"],
                    size: RadioToDescriptionSizeAdapter[size]
                }],
                [RadioContext, {
                    className: styles["hop-RadioField__radio"],
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
 * The Radio Field component is a container for a radio and a description.
 *
 * [View Documentation](TODO)
 */
const _RadioField = forwardRef<HTMLDivElement, RadioFieldProps>(RadioField);
_RadioField.displayName = "RadioField";

export { _RadioField as RadioField };

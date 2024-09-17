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
import { composeClassnameRenderProps, cssModule, SlotProvider, useRenderProps, type AccessibleSlotProps, type RenderProps, type SizeAdapter } from "../../utils/index.ts";

import { SwitchContext } from "./SwitchContext.ts";
import { SwitchFieldContext } from "./SwitchFieldContext.ts";

import styles from "./SwitchField.module.css";

export const GlobalSwitchFieldCssSelector = "hop-SwitchField";

const SwitchToDescriptionSizeAdapter: SizeAdapter<SwitchFieldProps["size"], TextProps["size"]> = {
    sm: "xs",
    md: "sm"
};

interface SwitchFieldRenderProps {
    /**
     * Whether the switch field is disabled.
     */
    isDisabled?: boolean;
}

export interface SwitchFieldProps extends RenderProps<SwitchFieldRenderProps>, StyledSystemProps, AccessibleSlotProps {
    /**
     * A switch field can vary in size.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;
    /**
     * Whether the switch field is disabled.
     */
    isDisabled?: boolean;
}

function SwitchField(props: SwitchFieldProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, SwitchFieldContext);

    const { stylingProps, ...ownProps } = useStyledSystem(props);

    const {
        className,
        style,
        isDisabled,
        size: sizeProp = "md",
        slot,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const descriptionId = useId();

    const classNames = composeClassnameRenderProps(
        className,
        GlobalSwitchFieldCssSelector,
        cssModule(
            styles,
            "hop-SwitchField",
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

    const renderProps = useRenderProps({
        ...otherProps,
        className: classNames,
        style: mergedStyles,
        values: {
            isDisabled: isDisabled || false
        }
    });

    return (
        <SlotProvider
            values={[
                [TextContext, {
                    id: descriptionId,
                    className: styles["hop-SwitchField__description"],
                    size: SwitchToDescriptionSizeAdapter[size]
                }],
                [SwitchContext, {
                    className: styles["hop-SwitchField__switch"],
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
 * The Switch Field component is a container for a switch and a description.
 *
 * [View Documentation](TODO)
 */
const _SwitchField = forwardRef<HTMLDivElement, SwitchFieldProps>(SwitchField);
_SwitchField.displayName = "SwitchField";

export { _SwitchField as SwitchField };

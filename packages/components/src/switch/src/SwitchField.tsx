import {
    useResponsiveValue,
    useStyledSystem,
    type ResponsiveProp,
    type StyledSystemProps
} from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type CSSProperties, type ForwardedRef } from "react";
import { mergeProps, useId } from "react-aria";
import { useContextProps } from "react-aria-components";

import { TextContext, type TextProps } from "../../typography/Text/index.ts";
import { cssModule, SlotProvider, useRenderProps, type SizeAdapter, type TempBaseComponentProps } from "../../utils/index.ts";

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

export interface SwitchFieldProps extends TempBaseComponentProps<SwitchFieldRenderProps>, StyledSystemProps {
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
        isDisabled,
        size: sizeProp = "md",
        slot,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const renderProps = useRenderProps({
        ...otherProps,
        values: {
            isDisabled: isDisabled || false
        }
    });

    const descriptionId = useId();

    const className = clsx(
        GlobalSwitchFieldCssSelector,
        cssModule(
            styles,
            "hop-SwitchField",
            size
        ),
        stylingProps.className,
        renderProps.className
    );

    const style: CSSProperties = {
        ...stylingProps.style,
        ...renderProps.style
    };

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
                className={className}
                style={style}
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

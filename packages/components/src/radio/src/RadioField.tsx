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
import {
    ClearContainerSlots,
    composeClassnameRenderProps,
    cssModule,
    SlotProvider,
    useRenderProps,
    type BaseComponentRenderProps,
    type SizeAdapter
} from "../../utils/index.ts";

import { RadioContext } from "./RadioContext.ts";
import { RadioFieldContext } from "./RadioFieldContext.ts";

import styles from "./RadioField.module.css";

export const GlobalRadioFieldCssSelector = "hop-RadioField";

const RadioToDescriptionSizeAdapter: SizeAdapter<RadioFieldProps["size"], TextProps["size"]> = {
    sm: "xs",
    md: "sm"
};

interface RadioFieldRenderProps {
    /**
     * Whether the radio field is disabled.
     */
    isDisabled?: boolean;
}

export interface RadioFieldProps extends StyledSystemProps, BaseComponentRenderProps<RadioFieldRenderProps> {
    /**
     * Whether the radio field is disabled.
     */
    isDisabled?: boolean;
    /**
     * A radio can vary in size.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;
}

function RadioField(props: RadioFieldProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, RadioFieldContext);
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
        GlobalRadioFieldCssSelector,
        cssModule(
            styles,
            "hop-RadioField",
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

    const renderProps = useRenderProps<RadioFieldRenderProps>({
        ...props,
        className: classNames,
        style: mergedStyles,
        values: {
            isDisabled: isDisabled || false
        }
    });

    const descriptionId = useId();

    return (
        <ClearContainerSlots>
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
                    {...mergeProps(otherProps, renderProps)}
                    ref={ref}
                    slot={slot ?? undefined}
                    data-disabled={isDisabled}
                >
                    {renderProps.children}
                </div>
            </SlotProvider>
        </ClearContainerSlots>
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

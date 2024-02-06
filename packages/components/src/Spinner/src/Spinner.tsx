import { useStyledSystem, type ResponsiveProp, useResponsiveValue, type StyledSystemProps } from "@hopper-ui/styled-system";
import { type ForwardedRef, forwardRef } from "react";
import { ProgressBar } from "react-aria-components";
import { composeClassnameRenderProps, cssModule, type SizeAdapter } from "../../utils/src/index.ts";
import { Text, type TextProps } from "../../Text/src/index.ts";
import type { BaseComponentProps } from "../../utils/src/types.ts";
import styles from "./Spinner.module.css";
import { useId } from "@react-aria/utils";

// TODO: create some kind of meta object with global css selectors, default slot and context?
const GlobalSpinnerCssSelector = "hop-Spinner-component";

// We don't extends RACProgressBarProps here, since we don't want to expose any of the progress bar props.
export interface SpinnerProps extends StyledSystemProps, BaseComponentProps {
    /**
     * What the Spinner's diameter should be.
     */
    size?: ResponsiveProp<"sm" | "md" | "lg">;
}

const SpinnerToTextSizeAdapter: SizeAdapter<SpinnerProps["size"], TextProps["size"]> = {
    sm: "xs",
    md: "sm",
    lg: "md"
};

const Spinner = (props:SpinnerProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        style,
        size: sizeProp,
        children,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledbyProp,
        ...otherProps
    } = ownProps;
    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalSpinnerCssSelector,
        cssModule(
            styles,
            "hop-spinner",
            size
        ),
        stylingProps.className
    );

    const mergedStyles = {
        ...stylingProps.style,
        style
    };

    if (!children && !ariaLabel && !ariaLabelledbyProp) {
        console.warn("[Hopper] You should provide an aria-label or aria-labelledby to the Spinner component to make it accessible.");
    }

    const labelId = useId();
    const labelMarkup = children && (
        <Text
            id={labelId}
            className={cssModule(
                styles,
                "hop-spinner__label"
            )}
            size={SpinnerToTextSizeAdapter[size]}
        >{children}</Text>
    );
    const ariaLabelledBy = ariaLabelledbyProp || labelMarkup ? labelId : undefined;


    return (
        <ProgressBar
            ref={ref}
            isIndeterminate
            className={classNames}
            style={mergedStyles}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            {...otherProps}
        >
            <div className={
                cssModule(
                    styles,
                    "hop-spinner__track"
                )
            }
            ></div>
            <div className={
                cssModule(
                    styles,
                    "hop-spinner__fill"
                )
            }
            ></div>
            {labelMarkup}
        </ProgressBar>
    );
};

/**
 * A spinner indicates that a part of the product is currently performing a task, and the duration of this process is unknown.
 *
 * [View Documentation](TODO)
 */
export const _Spinner = forwardRef<HTMLDivElement, SpinnerProps>(Spinner);
_Spinner.displayName = "Spinner";

export { _Spinner as Spinner };



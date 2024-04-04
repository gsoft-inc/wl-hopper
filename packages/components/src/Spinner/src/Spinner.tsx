import { useStyledSystem, type ResponsiveProp, useResponsiveValue, type StyledSystemProps } from "@hopper-ui/styled-system";
import { type ForwardedRef, forwardRef, type CSSProperties } from "react";
import { ProgressBar, useContextProps } from "react-aria-components";
import { composeClassnameRenderProps, cssModule, type SizeAdapter, type BaseComponentProps } from "../../utils/index.ts";
import styles from "./Spinner.module.css";
import { SpinnerContext } from "./SpinnerContext.ts";
import { Label, type LabelProps } from "../../Label/index.ts";

export const GlobalSpinnerCssSelector = "hop-Spinner";

// We don't extends RACProgressBarProps here, since we don't want to expose any of the progress bar props.
export interface SpinnerProps extends StyledSystemProps, BaseComponentProps {
    /**
     * What the Spinner's diameter should be.
     */
    size?: ResponsiveProp<"sm" | "md" | "lg">;
}

const SpinnerToLabelSizeAdapter: SizeAdapter<SpinnerProps["size"], LabelProps["size"]> = {
    sm: "xs",
    md: "sm",
    lg: "md"
};

const Spinner = (props:SpinnerProps, ref: ForwardedRef<HTMLDivElement>) => {
    [props, ref] = useContextProps(props, ref, SpinnerContext);

    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        style,
        size: sizeProp,
        children,
        ...otherProps
    } = ownProps;
    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalSpinnerCssSelector,
        cssModule(
            styles,
            "hop-Spinner",
            size
        ),
        stylingProps.className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    const labelMarkup = children && (
        <Label
            className={cssModule(
                styles,
                "hop-Spinner__label"
            )}
            size={SpinnerToLabelSizeAdapter[size]}
        >{children}</Label>
    );

    return (
        <ProgressBar
            ref={ref}
            isIndeterminate
            className={classNames}
            style={mergedStyles}
            {...otherProps}
        >
            <div className={
                cssModule(
                    styles,
                    "hop-Spinner__track"
                )
            }
            ></div>
            <div className={
                cssModule(
                    styles,
                    "hop-Spinner__fill"
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
const _Spinner = forwardRef<HTMLDivElement, SpinnerProps>(Spinner);
_Spinner.displayName = "Spinner";

export { _Spinner as Spinner };

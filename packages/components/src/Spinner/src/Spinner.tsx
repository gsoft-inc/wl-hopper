import {
    useStyledSystem,
    type ResponsiveProp,
    useResponsiveValue,
    type StyledSystemProps
} from "@hopper-ui/styled-system";
import { type ForwardedRef, forwardRef, type CSSProperties } from "react";
import { useId } from "react-aria";
import { ProgressBar, useContextProps } from "react-aria-components";

import { Text, type TextProps } from "../../typography/Text/index.ts";
import { composeClassnameRenderProps, cssModule, type SizeAdapter, type BaseComponentProps } from "../../utils/index.ts";

import { SpinnerContext } from "./SpinnerContext.ts";

import styles from "./Spinner.module.css";

export const GlobalSpinnerCssSelector = "hop-Spinner";

// We don't extends RACProgressBarProps here, since we don't want to expose any of the progress bar props.
export interface SpinnerProps extends StyledSystemProps, BaseComponentProps {
    /**
     * What the Spinner's diameter should be.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md" | "lg">;
}

const SpinnerToTextSizeAdapter: SizeAdapter<SpinnerProps["size"], TextProps["size"]> = {
    sm: "xs",
    md: "sm",
    lg: "md"
};

const Spinner = (props: SpinnerProps, ref: ForwardedRef<HTMLDivElement>) => {
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
    
    const labelId = useId();

    const labelMarkup = children && (
        <Text
            className={cssModule(
                styles,
                "hop-Spinner__label"
            )}
            size={SpinnerToTextSizeAdapter[size]}
            id={labelId}
        >{children}</Text>
    );

    return (
        <ProgressBar
            ref={ref}
            isIndeterminate
            className={classNames}
            style={mergedStyles}
            aria-labelledby={labelId}
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

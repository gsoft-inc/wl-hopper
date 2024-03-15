import { forwardRef, type ForwardedRef, type CSSProperties } from "react";
import clsx from "clsx";
import { type StyledComponentProps, useStyledSystem } from "@hopper-ui/styled-system";
import { ErrorMessageContext } from "./ErrorMessageContext.ts";
import { useContextProps, FieldError as RACFieldError, type FieldErrorProps as RACFieldErrorProps, type TextProps as RACTextProps, TextContext } from "react-aria-components";
import { WarningIcon } from "@hopper-ui/icons";
import { SlotProvider } from "@hopper-ui/components";
import { cssModule } from "../../utils/src/cssModule.ts";

import styles from "./ErrorMessage.module.css";

export const GlobalErrorMessageCssSelector = "hop-ErrorMessage";

export interface ErrorMessageProps extends StyledComponentProps<RACFieldErrorProps>, Omit<RACTextProps, "style" | "className" | "children" | "color" | "content"> {
    /**
     * Whether or not to show the error message icon.
     */
    showWarningIcon?: boolean;
}

function ErrorMessage(props: ErrorMessageProps, ref: ForwardedRef<HTMLSpanElement>) {
    [props, ref] = useContextProps(props, ref, ErrorMessageContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const { className, children, showWarningIcon, style, slot = "errorMessage", ...otherProps } = ownProps;

    const classNames = clsx(
        GlobalErrorMessageCssSelector,
        cssModule(
            styles,
            "hop-ErrorMessage"
        ),
        stylingProps.className,
        className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    return (
        <SlotProvider values={[
            [TextContext, { ...otherProps, slot }]
        ]}
        >
            <RACFieldError
                {...otherProps}
                ref={ref}
                className={classNames}
                style={mergedStyles}
            >
                {children ? <>
                    {showWarningIcon && <WarningIcon size="sm" className={styles["hop-ErrorMessage__icon"]} />}
                    {children}
                </> : null}
            </RACFieldError>
        </SlotProvider>
    );
}

/**
 * An ErrorMessage displays validation errors for a form field.
 *
 * [View Documentation](TODO)
 */
const _ErrorMessage = forwardRef<HTMLSpanElement, ErrorMessageProps>(ErrorMessage);
_ErrorMessage.displayName = "ErrorMessage";

export { _ErrorMessage as ErrorMessage };

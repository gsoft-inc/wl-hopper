import { forwardRef, type ForwardedRef, type CSSProperties, useContext } from "react";
import clsx from "clsx";
import { type StyledComponentProps, useStyledSystem } from "@hopper-ui/styled-system";
import { ErrorMessageContext } from "./ErrorMessageContext.ts";
import { useContextProps, type FieldErrorProps as RACFieldErrorProps, FieldErrorContext as RACFieldErrorContext } from "react-aria-components";
import { WarningIcon } from "@hopper-ui/icons";
import { cssModule } from "../../utils/src/cssModule.ts";
import { useRenderProps } from "../../utils/src/useRenderProps.ts";
import { type TextProps, Text } from "../../Text/index.ts";

import styles from "./ErrorMessage.module.css";

export const GlobalErrorMessageCssSelector = "hop-ErrorMessage";

export interface ErrorMessageProps extends StyledComponentProps<RACFieldErrorProps>, Omit<TextProps, "style" | "className" | "children" | "color" | "content"> {
    /**
     * Whether or not to show the error message icon.
     * @default true
     */
    showWarningIcon?: boolean;
}

function ErrorMessage(props: ErrorMessageProps, ref: ForwardedRef<HTMLSpanElement>) {
    const validation = useContext(RACFieldErrorContext);
    if (!validation?.isInvalid) {
        return null;
    }
    
    return <FieldErrorInner {...props} ref={ref} />;
}

/**
 * An ErrorMessage displays validation errors for a form field.
 *
 * [View Documentation](TODO)
 */
const _ErrorMessage = forwardRef<HTMLSpanElement, ErrorMessageProps>(ErrorMessage);
_ErrorMessage.displayName = "ErrorMessage";

export { _ErrorMessage as ErrorMessage };

const FieldErrorInner = forwardRef((props: ErrorMessageProps, ref: ForwardedRef<HTMLSpanElement>) => {
    const validation = useContext(RACFieldErrorContext)!;
    [props, ref] = useContextProps(props, ref, ErrorMessageContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const { className, children, showWarningIcon = true, style, slot = "errorMessage", ...otherProps } = ownProps;

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

    const warningIcon = showWarningIcon && <WarningIcon size="sm" className={styles["hop-ErrorMessage__icon"]} />;

    const renderProps = useRenderProps({
        className: classNames,
        children: children ? <>{warningIcon} {children}</> : null,
        defaultChildren: <>{warningIcon} {validation.validationErrors.join(" ")}</>,
        values: validation
    });

  
    return (
        <Text
            {...otherProps}
            {...renderProps}
            slot={slot}
            ref={ref}
            style={mergedStyles}
        />
    );
});

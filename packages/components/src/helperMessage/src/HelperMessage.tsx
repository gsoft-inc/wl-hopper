import { type StyledComponentProps, useStyledSystem } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef, type CSSProperties, useContext } from "react";
import clsx from "clsx";
import { HelperMessageContext } from "./HelperMessageContext.ts";
import { useContextProps, FieldErrorContext as RACFieldErrorContext } from "react-aria-components";
import { InfoIcon } from "@hopper-ui/icons";
import { type TextProps, Text } from "../../Text/index.ts";
import { cssModule } from "../../utils/src/cssModule.ts";

import styles from "./HelperMessage.module.css";

export const GlobalHelperMessageCssSelector = "hop-HelperMessage";
export interface HelperMessageProps extends StyledComponentProps<Omit<TextProps, "size">> {
    /**
     * Whether or not to hide the helper message icon.
     * @default true
     */
    hideInfoIcon?: boolean;
}

function HelperMessage(props: HelperMessageProps, ref: ForwardedRef<HTMLSpanElement>) {
    const validation = useContext(RACFieldErrorContext);
    if (validation?.isInvalid) {
        return null;
    }

    return <HelperMessageInner {...props} ref={ref} />;
}

/**
 * The HelperMessage component is used to display auxiliary text to guide users in the interface.
 *
 * [View Documentation](TODO)
 */
const _HelperMessage = forwardRef<HTMLSpanElement, HelperMessageProps>(HelperMessage);
_HelperMessage.displayName = "HelperMessage";

export { _HelperMessage as HelperMessage };

const HelperMessageInner = forwardRef((props: HelperMessageProps, ref: ForwardedRef<HTMLSpanElement>) => {
    [props, ref] = useContextProps(props, ref, HelperMessageContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const { className, children, hideInfoIcon = false, style, slot = "description", ...otherProps } = ownProps;

    const classNames = clsx(
        GlobalHelperMessageCssSelector,
        cssModule(
            styles,
            "hop-HelperMessage"
        ),
        stylingProps.className,
        className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    return (
        <Text
            {...otherProps}
            ref={ref}
            className={classNames}
            style={mergedStyles}
            size="xs"
            slot={slot}
        >
            {!hideInfoIcon && <InfoIcon size="sm" className={styles["hop-HelperMessage__icon"]} />}
            {children}
        </Text>
    );
});

import { type StyledComponentProps, useStyledSystem } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef, type CSSProperties } from "react";
import clsx from "clsx";
import { HelperMessageContext } from "./HelperMessageContext.ts";
import { useContextProps } from "react-aria-components";
import { InfoIcon } from "@hopper-ui/icons";
import { type TextProps, Text } from "../../Text/index.ts";
import { cssModule } from "../../utils/src/css-module.ts";

import styles from "./HelperMessage.module.css";

export const GlobalHelperMessageCssSelector = "hop-HelperMessage";

// Won't be needed in next react-aria-components release: https://github.com/adobe/react-spectrum/pull/5850
const DefaultHelperMessageSlot = "description";

export interface HelperMessageProps extends StyledComponentProps<Omit<TextProps, "size">> {
    /**
     * Whether or not to show the helper message icon.
     */
    showIcon?: boolean;
}

function HelperMessage(props:HelperMessageProps, ref: ForwardedRef<HTMLSpanElement>) {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultHelperMessageSlot }, ref, HelperMessageContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const { className, children, showIcon, style, ...otherProps } = ownProps;

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
        >
            {showIcon && <InfoIcon size="sm" className={styles["hop-HelperMessage__icon"]} />}
            {children}
        </Text>
    );
}

/**
 * The HelperMessage component is used to display auxiliary text to guide users in the interface.
 *
 * [View Documentation](TODO)
 */
const _HelperMessage = forwardRef<HTMLSpanElement, HelperMessageProps>(HelperMessage);
_HelperMessage.displayName = "HelperMessage";

export { _HelperMessage as HelperMessage };

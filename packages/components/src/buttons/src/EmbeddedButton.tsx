import {
    type StyledComponentProps,
    useStyledSystem,
    type ResponsiveProp,
    useResponsiveValue
} from "@hopper-ui/styled-system";
import { type ForwardedRef, forwardRef } from "react";
import {
    Button as RACButton,
    type ButtonProps as RACButtonProps,
    composeRenderProps,
    useContextProps
} from "react-aria-components";

import {
    composeClassnameRenderProps,
    cssModule
} from "../../utils/index.ts";

import { EmbeddedButtonContext } from "./EmbeddedButtonContext.ts";

import styles from "./EmbeddedButton.module.css";

export const GlobalEmbeddedButtonCssSelector = "hop-EmbeddedButton";

export interface EmbeddedButtonProps extends StyledComponentProps<RACButtonProps> {
    /**
     * The size of the EmbeddedButton.
     * @default "md"
     */
    size?: ResponsiveProp<"md" | "lg">;
}

function EmbeddedButton(props: EmbeddedButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
    [props, ref] = useContextProps(props, ref, EmbeddedButtonContext);

    const { stylingProps, ...ownProps } = useStyledSystem(props);

    const {
        className,
        size: sizeProp,
        isDisabled,
        style: styleProp,
        children,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalEmbeddedButtonCssSelector,
        cssModule(
            styles,
            "hop-EmbeddedButton",
            size
        ),
        stylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    return (
        <RACButton
            ref={ref}
            className={classNames}
            style={style}
            isDisabled={isDisabled}
            {...otherProps}
        >
            {children}
        </RACButton>
    );
}

/**
 * EmbeddedButtons are used to initialize an action. EmbeddedButton labels express what action will occur when the user interacts with it.
 *
 * [View Documentation](TODO)
 */
const _EmbeddedButton = forwardRef<HTMLButtonElement, EmbeddedButtonProps>(EmbeddedButton);

_EmbeddedButton.displayName = "EmbeddedButton";

export { _EmbeddedButton as EmbeddedButton };

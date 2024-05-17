import { IconContext } from "@hopper-ui/icons";
import {
    type StyledComponentProps,
    useStyledSystem
} from "@hopper-ui/styled-system";
import { type ForwardedRef, forwardRef } from "react";
import {
    Button as RACButton,
    type ButtonProps as RACButtonProps,
    composeRenderProps,
    useContextProps
} from "react-aria-components";

import {
    SlotProvider,
    composeClassnameRenderProps,
    cssModule
} from "../../utils/index.ts";

import { EmbeddedButtonContext } from "./EmbeddedButtonContext.ts";

import styles from "./EmbeddedButton.module.css";

export const GlobalEmbeddedButtonCssSelector = "hop-EmbeddedButton";

export interface EmbeddedButtonProps extends StyledComponentProps<RACButtonProps> {
    size?: "sm" | "md";
}

function EmbeddedButton(props: EmbeddedButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
    [props, ref] = useContextProps(props, ref, EmbeddedButtonContext);

    const { stylingProps, ...ownProps } = useStyledSystem(props);

    const {
        className,
        isDisabled,
        style: styleProp,
        children,
        size,
        ...otherProps
    } = ownProps;

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
        <SlotProvider
            values={[
                [IconContext, {
                    size: size
                }]
            ]}
        >
            <RACButton
                ref={ref}
                className={classNames}
                style={style}
                isDisabled={isDisabled}
                {...otherProps}
            >
                {children}
            </RACButton>
        </SlotProvider>
    );
}

/**
 * TODO:
 *
 * [View Documentation](TODO)
 */
const _EmbeddedButton = forwardRef<HTMLButtonElement, EmbeddedButtonProps>(EmbeddedButton);

_EmbeddedButton.displayName = "EmbeddedButton";

export { _EmbeddedButton as EmbeddedButton };

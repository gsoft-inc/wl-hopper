import { IconContext } from "@hopper-ui/icons";
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
    SlotProvider,
    composeClassnameRenderProps,
    cssModule
} from "../../utils/index.ts";

import { EmbeddedButtonContext } from "./EmbeddedButtonContext.ts";

import styles from "./EmbeddedButton.module.css";

export const GlobalEmbeddedButtonCssSelector = "hop-EmbeddedButton";

export interface EmbeddedButtonProps extends StyledComponentProps<RACButtonProps> {
    /**
     * Whether the EmbeddedButton should show a selected state.
     */
    isSelected?: boolean;
    /**
     * The size of the EmbeddedButton.
     * @default "md"
     */
    size?: ResponsiveProp<"md" | "lg">;
    /**
     * Whether the EmbeddedButton is square in shape.
     */
    isSquare?: boolean;
    /**
     * The visual style of the EmbeddedButton.
     * @default "neutral"
     */
    variant?: "neutral" | "subdued" | "progress" | "positive" | "caution" | "negative" | "option1" | "option2" | "option3" | "option4" | "option5" | "option6";
}

function EmbeddedButton(props: EmbeddedButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
    [props, ref] = useContextProps(props, ref, EmbeddedButtonContext);

    const { stylingProps, ...ownProps } = useStyledSystem(props);

    const {
        className,
        size: sizeProp,
        isDisabled,
        isSelected = false,
        isSquare,
        style: styleProp,
        children,
        variant = "neutral",
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalEmbeddedButtonCssSelector,
        cssModule(
            styles,
            "hop-EmbeddedButton",
            size,
            variant
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
                    className: styles["hop-EmbeddedButton__icon"],
                    size: "sm"
                }]
            ]}
        >
            <RACButton
                ref={ref}
                className={classNames}
                style={style}
                isDisabled={isDisabled}
                data-selected={isSelected || undefined}
                data-square={isSquare || undefined}
                {...otherProps}
            >
                {children}
            </RACButton>
        </SlotProvider>
    );
}

/**
 * EmbeddedButtons are buttons embedded within other components, such as inputs and tags.
 *
 * [View Documentation](TODO)
 */
const _EmbeddedButton = forwardRef<HTMLButtonElement, EmbeddedButtonProps>(EmbeddedButton);

_EmbeddedButton.displayName = "EmbeddedButton";

export { _EmbeddedButton as EmbeddedButton };

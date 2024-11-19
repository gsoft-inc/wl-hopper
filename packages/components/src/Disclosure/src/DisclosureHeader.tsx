import { IconContext } from "@hopper-ui/icons";
import { type StyledComponentProps, useStyledSystem } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, type ForwardedRef, forwardRef, type ReactNode, useContext } from "react";
import { Button, type ButtonProps, composeRenderProps, DEFAULT_SLOT, DisclosureStateContext, useContextProps, useSlottedContext } from "react-aria-components";

import { ToggleArrow } from "../../ToggleArrow/index.ts";
import type { HeadingProps } from "../../typography/Heading/index.ts";
import { Heading, TextContext } from "../../typography/index.ts";
import { composeClassnameRenderProps, cssModule, ensureTextWrapper, SlotProvider } from "../../utils/index.ts";

import { DisclosureContext } from "./DisclosureContext.ts";
import { DisclosureHeaderContext } from "./DisclosureHeaderContext.ts";

import styles from "./DisclosureHeader.module.css";

export const GlobalDisclosureHeaderCssSelector = "hop-DisclosureHeader";

export type DisclosureHeaderButtonProps = Omit<StyledComponentProps<ButtonProps>, "children">;

export interface DisclosureHeaderProps extends Omit<HeadingProps, "prefix"> {
    /**
     * The props for the button that triggers the disclosure.
     */
    buttonProps?: DisclosureHeaderButtonProps;
    /**
     * An icon or text to display at the start of the disclosure header.
     */
    prefix?: ReactNode;
}

function DisclosureHeader(props: DisclosureHeaderProps, ref: ForwardedRef<HTMLHeadingElement>) {
    [props, ref] = useContextProps(props, ref, DisclosureHeaderContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        buttonProps,
        className,
        children,
        level = 3,
        prefix,
        size = "xs",
        style: styleProp,
        ...otherProps
    } = ownProps;

    const { isExpanded } = useContext(DisclosureStateContext);
    const disclosureCtx = useSlottedContext(DisclosureContext);

    const classNames = clsx(
        GlobalDisclosureHeaderCssSelector,
        cssModule(
            styles,
            "hop-DisclosureHeader"
        ),
        stylingProps.className,
        className
    );

    const style: CSSProperties = {
        ...stylingProps.style,
        ...styleProp
    };

    const { stylingProps: buttonStylingProps, ...buttonOwnProps } = useStyledSystem(buttonProps ?? {});

    const {
        className: buttonClassName,
        style: buttonStyleProp,
        ...buttonOtherProps
    } = buttonOwnProps;

    const buttonClassNames = composeClassnameRenderProps(
        buttonClassName,
        cssModule(
            styles,
            "hop-DisclosureHeader__button",
            disclosureCtx?.variant
        ),
        buttonStylingProps.className
    );

    const buttonStyle = composeRenderProps(buttonStyleProp, prev => {
        return {
            ...buttonStylingProps.style,
            ...prev
        };
    });

    const prefixMarkup = prefix ? (
        <SlotProvider values={[
            [TextContext, { size: "sm", className: styles["hop-DisclosureHeader__prefix"] }],
            [IconContext, { size: "md", className: styles["hop-DisclosureHeader__prefix"] }]
        ]}
        >
            {ensureTextWrapper(prefix)}
        </SlotProvider>
    ) : null;

    return (
        <Heading
            ref={ref}
            className={classNames}
            style={style}
            level={level}
            size={size}
            {...otherProps}
        >
            <Button 
                slot="trigger"
                className={buttonClassNames}
                style={buttonStyle}
                data-expanded={isExpanded || undefined}
                {...buttonOtherProps}
            >
                {({ isDisabled, isFocusVisible, isHovered, isPressed }) => (
                    <>
                        {prefixMarkup}
                        <div className={styles["hop-DisclosureHeader__content"]}>
                            <SlotProvider values={[
                                [TextContext, {
                                    slots: {
                                        [DEFAULT_SLOT]: {
                                            className: styles["hop-DisclosureHeader__title"],
                                            size: "inherit"
                                        },
                                        "description": {
                                            className: styles["hop-DisclosureHeader__description"],
                                            size: "sm"
                                        }
                                    }
                                }]
                            ]}
                            >
                                {children}
                            </SlotProvider>
                        </div>
                        <ToggleArrow
                            className={styles["hop-DisclosureHeader__toggle-arrow"]}
                            isExpanded={isExpanded}
                            isDisabled={isDisabled}
                            isFocused={isFocusVisible}
                            isHovered={isHovered}
                            isPressed={isPressed}
                        />
                    </>
                )}
            </Button>
        </Heading>
    );
}

/**
 * DisclosureHeader is the main header element that users interact with to expand or collapse the associated panel.
 *
 * [View Documentation](TODO)
 */
const _DisclosureHeader = forwardRef<HTMLHeadingElement, DisclosureHeaderProps>(DisclosureHeader);
_DisclosureHeader.displayName = "DisclosureHeader";

export { _DisclosureHeader as DisclosureHeader };

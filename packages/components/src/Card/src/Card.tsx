import { useStyledSystem, type StyledComponentProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type CSSProperties, type ForwardedRef } from "react";
import { HeaderContext, useContextProps } from "react-aria-components";

import { ContentContext, FooterContext } from "../../layout/index.ts";
import { cssModule, SlotProvider, type BaseComponentDOMProps } from "../../utils/index.ts";

import { CardContext } from "./CardContext.ts";

import styles from "./Card.module.css";

export const GlobalCardCssSelector = "hop-Card";

export interface CardProps extends StyledComponentProps<BaseComponentDOMProps> {
    /**
     * The visual style of the card.
     * @default "main"
     */
    variant?: "main" | "second-level";
}

const Card = (props: CardProps, ref: ForwardedRef<HTMLElement>) => {
    [props, ref] = useContextProps(props, ref, CardContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        style,
        slot,
        variant = "main",
        ...otherProps
    } = ownProps;

    const classNames = clsx(
        GlobalCardCssSelector,
        cssModule(
            styles,
            "hop-Card",
            variant
        ),
        stylingProps.className,
        className
    );

    const mergedStyles: CSSProperties = {
        ...style,
        ...stylingProps.style
    };

    return (
        <section
            ref={ref}
            className={classNames}
            style={mergedStyles}
            slot={slot ?? undefined}
            {...otherProps}
        >
            <SlotProvider values={[
                [HeaderContext, {
                    className: styles["hop-Card__header"]
                }],
                [ContentContext, {
                    className: styles["hop-Card__content"]
                }],
                [FooterContext, {
                    className: styles["hop-Card__footer"]
                }]
            ]}
            >
                {children}
            </SlotProvider>
        </section>
    );
};

/**
 * Cards are used to group similar concepts and tasks to make it easier for users to scan, read and get things done.
 *
 * [View Documentation](TODO)
 */
const _Card = forwardRef<HTMLElement, CardProps>(Card);
_Card.displayName = "Card";

export { _Card as Card };

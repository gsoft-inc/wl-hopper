import { IconContext, type IconProps } from "@hopper-ui/icons";
import type { ResponsiveProp, StyledComponentProps } from "@hopper-ui/styled-system";
import { useResponsiveValue, useStyledSystem } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import {
    composeRenderProps,
    DEFAULT_SLOT,
    Link as RACLink,
    useContextProps,
    type LinkProps as RACLinkProps
} from "react-aria-components";

import { IconListContext } from "../../IconList/index.ts";
import { TextContext } from "../../typography/Text/index.ts";
import {
    composeClassnameRenderProps,
    cssModule,
    EnsureTextWrapper,
    SlotProvider,
    type SizeAdapter
} from "../../utils/index.ts";

import { LinkContext } from "./LinkContext.ts";

import styles from "./Link.module.css";

export const GlobalLinkCssSelector = "hop-Link";

export interface LinkProps extends StyledComponentProps<RACLinkProps> {
    /**
     * The visual style of the link.
     * @default "primary"
     */
    variant?: "primary" | "secondary";

    /**
     * Size of the link.
     * @default "inherit"
     */
    size?: ResponsiveProp<"inherit" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl">;

    /**
     * Whether the link should be displayed with a quiet style.
     */
    isQuiet?: boolean;

    /**
     * Whether the link should open in a new tab.
     */
    isExternal?: boolean;
}

const LinkToIconSizeAdapter = {
    inherit: undefined,
    xs: "sm",
    sm: "sm",
    md: "md",
    lg: "md",
    xl: "lg",
    "2xl": "lg"
} as const satisfies SizeAdapter<LinkProps["size"], IconProps["size"]>;

function Link(props: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) {
    [props, ref] = useContextProps(props, ref, LinkContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children: childrenProp,
        size: sizeProp,
        style: styleProp,
        isQuiet,
        isExternal,
        variant = "primary",
        rel,
        target,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "inherit";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalLinkCssSelector,
        cssModule(
            styles,
            "hop-Link",
            isQuiet && "quiet",
            variant,
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

    const children = composeRenderProps(childrenProp, prev => {
        return <EnsureTextWrapper>{prev}</EnsureTextWrapper>;
    });

    const iconSize = LinkToIconSizeAdapter[size];

    return (
        <SlotProvider
            values={[
                [IconListContext, {
                    slots: {
                        [DEFAULT_SLOT]: {
                            color: "inherit",
                            size: iconSize,
                            className: styles["hop-Link__icon-list"]
                        },
                        "start-icon": {
                            color: "inherit",
                            size: iconSize,
                            className: styles["hop-Link__start-icon-list"]
                        }
                    }
                }],
                [IconContext, {
                    slots: {
                        [DEFAULT_SLOT]: {
                            color: "inherit",
                            size: iconSize,
                            className: styles["hop-Link__icon"]
                        },
                        "start-icon": {
                            color: "inherit",
                            size: iconSize,
                            className: styles["hop-Link__start-icon"]
                        }
                    }
                }],
                [TextContext, {
                    size: size,
                    className: styles["hop-Link__text"]
                }]
            ]}
        >
            <RACLink
                {...otherProps}
                rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
                target={target ?? (isExternal ? "_blank" : undefined)}
                ref={ref}
                className={classNames}
                style={style}
            >
                {children}
            </RACLink>
        </SlotProvider>
    );
}

/**
 * Links allow users to navigate to a different location. They can be presented inline inside a paragraph, as standalone text or as an image.
 *
 * [View Documentation](TODO)
 */
const _Link = forwardRef<HTMLAnchorElement, LinkProps>(Link);
_Link.displayName = "Link";

export { _Link as Link };

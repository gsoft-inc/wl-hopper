import { RichIconContext, type RichIconProps } from "@hopper-ui/icons";
import { type ResponsiveProp, useResponsiveValue, useStyledSystem, type StyledSystemProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, forwardRef, type ForwardedRef, type HTMLAttributes } from "react";
import { useContextProps } from "react-aria-components";

import { type SizeAdapter, SlotProvider, cssModule, type BaseComponentProps } from "../../utils/index.ts";

import type { AvatarProps, AvatarSize } from "./Avatar.tsx";
import { RichIconAvatarImageContext } from "./RichIconAvatarImageContext.ts";

import styles from "./RichIconAvatarImage.module.css";

export const GlobalRichIconAvatarImageCssSelector = "hop-RichIconAvatarImage";

export interface RichIconAvatarImageProps extends StyledSystemProps, BaseComponentProps, Omit<HTMLAttributes<HTMLDivElement>, "slot" | "content" | "color"> {
    /**
     * The aria-label for the image.
     */
    "aria-label": string;
    /**
     * Whether or not the avatar image is disabled.
     */
    isDisabled?: boolean;
    /**
     * The size of the image.
     * * @default "md"
     */
    size?: ResponsiveProp<AvatarSize>;
}

export const AvatarToIconSizeAdapter: SizeAdapter<AvatarProps["size"], RichIconProps["size"]> = {
    xs: "md",
    sm: "md",
    md: "lg",
    lg: "xl",
    xl: "xl",
    "2xl": "xl"
};

function RichIconAvatarImage(props: RichIconAvatarImageProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, RichIconAvatarImageContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        children,
        className,
        isDisabled,
        style,
        slot,
        size: sizeValue,
        ...otherProps
    } = ownProps;
    
    const size = useResponsiveValue(sizeValue) ?? "md";

    const classNames = clsx(
        className,
        GlobalRichIconAvatarImageCssSelector,
        cssModule(
            styles,
            "hop-RichIconAvatarImage",
            size
        ),
        stylingProps.className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    return (
        <div
            {...otherProps}
            ref={ref}
            className={classNames}
            style={mergedStyles}
            slot={slot ?? undefined}
            role="img"
            data-disabled={isDisabled || undefined}
        >
            <SlotProvider
                values={[
                    [RichIconContext, {
                        className: styles["hop-RichIconAvatarImage__icon"],
                        size: AvatarToIconSizeAdapter[size]
                    }]
                ]}
            >
                {children}
            </SlotProvider>
        </div>
    );
}

/**
 * RichIconAvatarImage is a wrapper component that provides a consistent way to style the image of a RichIcon.
 *
 * [View Documentation](TODO)
 */
const _RichIconAvatarImage = forwardRef<HTMLDivElement, RichIconAvatarImageProps>(RichIconAvatarImage);
_RichIconAvatarImage.displayName = "RichIconAvatarImage";

export { _RichIconAvatarImage as RichIconAvatarImage };

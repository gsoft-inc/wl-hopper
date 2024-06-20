import { AnonymousRichIcon } from "@hopper-ui/icons";
import { type ResponsiveProp, useStyledSystem, type StyledSystemProps, useResponsiveValue } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, forwardRef, type ForwardedRef } from "react";
import { useContextProps } from "react-aria-components";

import type { BaseComponentProps } from "../../utils/index.ts";

import type { AvatarSize } from "./Avatar.tsx";
import { AvatarContext } from "./AvatarContext.ts";
import { RichIconAvatarImage } from "./RichIconAvatarImage.tsx";

export const GlobalAnonymousAvatarCssSelector = "hop-AnonymousAvatar";

export interface AnonymousAvatarProps extends StyledSystemProps, BaseComponentProps {
    /**
     * The label to display for the avatar.
     */
    "aria-label": string;
    /**
     * Whether or not the avatar is disabled.
     */
    isDisabled?: boolean;
    /**
     * The size of the avatar.
     * * @default "md"
     */
    size?: ResponsiveProp<AvatarSize>;
}

function AnonymousAvatar(props: AnonymousAvatarProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, AvatarContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        "aria-label": ariaLabel,
        className,
        size: sizeValue,
        style,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeValue) ?? "md";

    const classNames = clsx(
        className,
        GlobalAnonymousAvatarCssSelector,
        "hop-AnonymousAvatar",
        stylingProps.className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    return (        
        <RichIconAvatarImage
            {...otherProps}
            aria-label={ariaLabel}
            className={classNames}
            ref={ref}
            size={size}
            style={mergedStyles}
        >
            <AnonymousRichIcon />
        </RichIconAvatarImage>
    );
}

/**
 * Avatars are used to show a thumbnail representation of an individual, team or group in the interface.
 *
 * [View Documentation](TODO)
 */
const _AnonymousAvatar = forwardRef<HTMLDivElement, AnonymousAvatarProps>(AnonymousAvatar);
_AnonymousAvatar.displayName = "AnonymousAvatar";

export { _AnonymousAvatar as AnonymousAvatar };

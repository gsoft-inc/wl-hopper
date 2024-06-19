import { BrokenImageRichIcon } from "@hopper-ui/icons";
import { type ResponsiveProp, useStyledSystem, type StyledSystemProps, useResponsiveValue } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, forwardRef, type ForwardedRef, useMemo } from "react";
import { useContextProps } from "react-aria-components";

import { Text, type TextProps } from "../../typography/Text/index.ts";
import { type SizeAdapter, cssModule, type BaseComponentProps } from "../../utils/index.ts";

import { AvatarContext } from "./AvatarContext.ts";
import { RichIconAvatarImage } from "./RichIconAvatarImage.tsx";
import { useImageFallback } from "./useImageFallback.ts";

import styles from "./Avatar.module.css";

export const GlobalAvatarCssSelector = "hop-Avatar";
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

type AvatarImageBaseProps = React.HTMLProps<HTMLImageElement>;

export interface AvatarProps extends StyledSystemProps, BaseComponentProps {
    /**
     * The src of the image to display if the image fails to load. If set to null, the initials will be displayed instead.
     * * @default "BrokenImageRichIcon"
     */
    fallbackSrc?: string | null;
    /**
     * Props to add to the img element when src is provided.
     */
    imageProps?: AvatarImageBaseProps;
    /**
     * Whether or not the avatar is disabled.
     */
    isDisabled?: boolean;
    /**
     * The name of the Avatar. This will be used for the alt text of the image or the initials if no image is provided.
     */
    name: string;
    /**
     * The size of the avatar.
     * * @default "md"
     */
    size?: ResponsiveProp<AvatarSize>;
    /**
     * The src of the image to display. If not provided, the initials will be displayed instead.
     */
    src?: string;
}

interface AvatarInitialsProps extends Omit<AvatarProps, "src"> {}

interface AvatarImageProps extends AvatarProps {
    src: string;
}

export const AvatarToTextSizeAdapter: SizeAdapter<AvatarProps["size"], TextProps["size"]> = {
    xs: "xs",
    sm: "xs",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "xl"
};

function getColorIndexForInitial(name: string, maxNumberOfColor: number) {
    let hashCode = 0;

    for (let i = name.length - 1; i >= 0; i--) {
        const character = name.charCodeAt(i);
        const shift = i % 8;

        hashCode ^= (character << shift) + (character >> (8 - shift));
    }

    return hashCode % maxNumberOfColor;
}

function AvatarInitials(props: AvatarInitialsProps) {
    const { ...ownProps } = useStyledSystem(props);
    const { 
        "aria-label": ariaLabel,
        className,
        isDisabled,
        name,
        size: sizeValue,
        slot,
        ...otherProps 
    } = ownProps;
    
    const size = useResponsiveValue(sizeValue) ?? "md";

    const initials = useMemo(() => {
        const cleanName = name.replace(/\s+/g, " ").trim();
        const [firstName, lastName] = cleanName.split(" ");
        const letters = firstName && lastName
            ? `${firstName.charAt(0)}${lastName.charAt(0)}`
            : firstName.charAt(0);

        return size === "xs" && letters.length > 1 ? letters.charAt(0) : letters;
    }, [name, size]);
    
    const variantToUse = useMemo(() => `option${getColorIndexForInitial(name, 8) + 1}`, [name]);

    const colorName = `decorative-${variantToUse}`;

    const classNames = clsx(
        className,
        styles["hop-Avatar--initials"],
        styles[`hop-Avatar--${colorName}`]
    );

    return (
        <div
            {...otherProps}
            aria-label={ariaLabel || name}
            role="img"
            slot={slot || undefined}
            className={classNames}
            data-disabled={isDisabled || undefined}
        >
            <Text
                size={AvatarToTextSizeAdapter[size]}
            >
                {initials}
            </Text>
        </div>
    );
}

function AvatarImage(props: AvatarImageProps) {
    const { ...ownProps } = useStyledSystem(props);
    const {
        "aria-label": ariaLabel,
        children,
        className,
        imageProps,
        isDisabled,
        src,
        fallbackSrc,
        name,
        slot,
        size,
        ...otherProps
    } = ownProps;

    const classNames = clsx(
        className,
        styles["hop-Avatar--image"]
    );

    const { onError, ...otherImageProps } = imageProps ?? {};
    
    const [imageUrl, handleImageError, imageFailed] = useImageFallback(src, fallbackSrc);

    if (imageFailed) {
        if (fallbackSrc === undefined) {
            return (
                <RichIconAvatarImage aria-label={ariaLabel ?? name} size={size} isDisabled={isDisabled} className={className}>
                    <BrokenImageRichIcon />
                </RichIconAvatarImage>
            );
        }

        return children;
    }

    return (
        <div
            {...otherProps}
            data-disabled={isDisabled || undefined}
            slot={slot || undefined}
            role="img"
            aria-label={ariaLabel ?? name}
            className={classNames}
        >
            <img
                {...otherImageProps}
                src={imageUrl}
                alt={name}
                onError={onError || handleImageError}
                className={styles["hop-Avatar__image"]}
            />
        </div>
    );
}

function Avatar(props: AvatarProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, AvatarContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        fallbackSrc,
        size: sizeValue,
        src,
        style,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeValue) ?? "md";

    const classNames = clsx(
        className,
        GlobalAvatarCssSelector,
        cssModule(
            styles,
            "hop-Avatar",
            size
        ),
        stylingProps.className
    );

    const mergedStyles: CSSProperties = {
        ...stylingProps.style,
        ...style
    };

    const commonProps = {
        className: classNames,
        size,
        style: mergedStyles
    };

    const content = src ? (
        <AvatarImage
            {...otherProps}
            {...commonProps}
            src={src}
            fallbackSrc={fallbackSrc}
        >
            {/* Anything added in children is a fallback if AvatarImage fails to load. */}
            <AvatarInitials 
                {...otherProps}
                {...commonProps}
            />
        </AvatarImage>
    ) : (
        <AvatarInitials
            {...otherProps}
            {...commonProps}
        />
    );

    return (
        <>{content}</>
    );
}

/**
 * Avatars are used to show a thumbnail representation of an individual, team or group in the interface.
 *
 * [View Documentation](TODO)
 */
const _Avatar = forwardRef<HTMLDivElement, AvatarProps>(Avatar);
_Avatar.displayName = "Avatar";

export { _Avatar as Avatar };

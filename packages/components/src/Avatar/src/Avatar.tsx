import { BrokenImageRichIcon, type RichIconProps } from "@hopper-ui/icons";
import { type ResponsiveProp, useStyledSystem, type StyledSystemProps, useResponsiveValue, type BackgroundColorValue, type ColorValue } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, forwardRef, type ForwardedRef, useMemo } from "react";
import { useContextProps } from "react-aria-components";

import { Text, type TextProps } from "../../typography/Text/index.ts";
import { type SizeAdapter, cssModule, type BaseComponentProps } from "../../utils/index.ts";

import { AvatarContext } from "./AvatarContext.ts";
import { useImageFallback } from "./useImageFallback.ts";

import styles from "./Avatar.module.css";

export const GlobalAvatarCssSelector = "hop-Avatar";
type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface AvatarProps extends StyledSystemProps, BaseComponentProps {
    /**
     * The src of the image to display if the image fails to load. If set to null, the initials will be displayed instead.
     * * @default "BrokenImageRichIcon"
     */
    fallbackSrc?: string | null;
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

interface AvatarInitialsProps extends Omit<AvatarProps, "src"> {
    size: AvatarSize;
}

type AvatarOmittedProps = "content" | "color" | "height" | "width";
type ImageOmittedProps = "name" | "size" | "slot";

interface AvatarImageProps extends Omit<AvatarProps, AvatarOmittedProps>, Omit<React.HTMLProps<HTMLImageElement>, ImageOmittedProps> {
    size: AvatarSize;
    src: string;
    children: React.ReactNode;
}

const AvatarToTextSizeAdapter: SizeAdapter<AvatarProps["size"], TextProps["size"]> = {
    xs: "xs",
    sm: "xs",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "xl"
};

const AvatarToIconSizeAdapter: SizeAdapter<AvatarProps["size"], RichIconProps["size"]> = {
    xs: "md",
    sm: "md",
    md: "lg",
    lg: "xl",
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
    const { 
        "aria-label": ariaLabel,
        name, 
        size,
        slot,
        ...otherProps 
    } = props;

    const initials = useMemo(() => {
        const cleanName = name.replace(/\s+/g, " ").trim();
        const [firstName, lastName] = cleanName.split(" ");
        const letters = !firstName && !lastName
            ? `${firstName.charAt(0)}${lastName.charAt(0)}`
            : firstName.charAt(0);

        return size === "xs" && letters.length > 1 ? letters.charAt(0) : letters;
    }, [name, size]);
    
    const variantToUse = useMemo(() => `option${getColorIndexForInitial(name, 8) + 1}`, [name]);

    const tokenBackgroundColor = `decorative-${variantToUse}-strong` as BackgroundColorValue;
    const tokenTextColor = `decorative-${variantToUse}` as ColorValue;

    return (
        <Text
            {...otherProps}
            aria-label={ariaLabel ?? name}
            role="img"
            size={AvatarToTextSizeAdapter[size]}
            slot={slot ?? undefined}
            backgroundColor={tokenBackgroundColor}
            color={tokenTextColor}
        >
            {initials}
        </Text>
    );
}

function AvatarImage(props: AvatarImageProps) {
    const {
        children,
        src,
        fallbackSrc,
        name,
        slot,
        size,
        onError,
        ...otherProps
    } = props;
    
    const [imageUrl, handleImageError, imageFailed] = useImageFallback(src, fallbackSrc);

    if (imageFailed) {
        if (fallbackSrc === undefined) {
            return (
                <BrokenImageRichIcon size={AvatarToIconSizeAdapter[size]} />
            );
        }

        return children;
    }

    return (
        <img
            {...otherProps}
            src={imageUrl}
            alt={name}
            slot={slot ?? undefined}
            onError={onError || handleImageError}
        />
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

    const content = src ? (
        <AvatarImage
            src={src}
            fallbackSrc={fallbackSrc}
            className={classNames}
            size={size}
            style={mergedStyles}
            {...otherProps}
        >
            <AvatarInitials 
                className={classNames}
                size={size}
                style={mergedStyles}
                {...otherProps}
            />
        </AvatarImage>
    ) : (
        <AvatarInitials 
            className={classNames}
            size={size}
            style={mergedStyles}
            {...otherProps}
        />
    );

    return (
        <>{content}</>
    );
}

/**
 * TODO: tagline
 *
 * [View Documentation](TODO)
 */
const _Avatar = forwardRef<HTMLDivElement, AvatarProps>(Avatar);
_Avatar.displayName = "Avatar";

export { _Avatar as Avatar };

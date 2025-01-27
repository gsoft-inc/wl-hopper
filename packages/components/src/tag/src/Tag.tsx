import { IconContext } from "@hopper-ui/icons";
import {
    type ResponsiveProp,
    type StyledComponentProps,
    slot as slotFn,
    useResponsiveValue,
    useStyledSystem
} from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type ForwardedRef, forwardRef } from "react";
import { Tag as RACTag, type TagProps as RACTagProps, composeRenderProps, useContextProps } from "react-aria-components";

import { AvatarContext, type AvatarProps } from "../../Avatar/index.ts";
import { BadgeContext } from "../../Badge/index.ts";
import { ClearButton, type ClearButtonProps } from "../../buttons/index.ts";
import { type FormStyleProps, useFormProps } from "../../Form/index.ts";
import { useLocalizedString } from "../../i18n/index.ts";
import { IconListContext } from "../../IconList/index.ts";
import { Spinner, type SpinnerProps } from "../../Spinner/index.ts";
import { TextContext, type TextSize } from "../../typography/Text/index.ts";
import {
    ClearContainerSlots,
    type SizeAdapter,
    SlotProvider,
    composeClassnameRenderProps,
    cssModule,
    ensureTextWrapper
} from "../../utils/index.ts";
import { mapOrbiterToHopperVariants } from "../utils/Tag.utils.ts";

import { TagContext } from "./TagContext.ts";

import styles from "./Tag.module.css";

export const GlobalTagCssSelector = "hop-Tag";

export type TagSize = "sm" | "md" | "lg";
export type TagVariant = "neutral" | "subdued" | "progress" | "positive" | "caution" | "negative" | "option1" | "option2" | "option3" | "option4" | "option5" | "option6";

const TagToTextSizeAdapter: SizeAdapter<TagSize, TextSize> = {
    sm: "xs",
    md: "xs",
    lg: "sm"
};

const TagToAvatarSizeAdapter: SizeAdapter<TagSize, AvatarProps["size"]> = {
    sm: "xs",
    md: "xs",
    lg: "sm"
};

const TagToButtonSizeAdapter: SizeAdapter<TagSize, ClearButtonProps["size"]> = {
    sm: "md",
    md: "md",
    lg: "lg"
};

export interface TagProps extends StyledComponentProps<RACTagProps> {
    /**
     * Whether the tag is invalid or not.
     */
    isInvalid?: boolean;
    /**
     * Whether the tag is loading or not.
     */
    isLoading?: boolean;
    /**
     * The size of the tag.
     * @default "md"
     */
    size?: ResponsiveProp<TagSize>;
    /**
     * The visual style of the Tag.
     * @default "neutral"
     */
    variant?: TagVariant;
    /**
     * The props of the ClearButton.
     */
    clearButtonProps?: ClearButtonProps;
    /**
     * The props of the Spinner.
     */
    spinnerProps?: SpinnerProps;
}

function Tag(props: TagProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, TagContext);
    props = useFormProps(props as FormStyleProps); /* Needed because Tag has an extra size. */
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children: childrenProp,
        isInvalid,
        isLoading,
        size: sizeProp,
        style: styleProp,
        textValue: textValueProp,
        variant = "neutral",
        clearButtonProps,
        spinnerProps,
        ...otherProps
    } = ownProps;

    const stringFormatter = useLocalizedString();
    const size = useResponsiveValue(sizeProp) ?? "md";
    const textValue = textValueProp ?? (typeof childrenProp === "string" ? childrenProp : undefined);

    const classNames = composeClassnameRenderProps(
        className,
        GlobalTagCssSelector,
        cssModule(
            styles,
            "hop-Tag",
            size,
            mapOrbiterToHopperVariants(variant)
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
        return ensureTextWrapper(prev);
    });

    const { className: spinnerClassName, ...otherSpinnerProps } = spinnerProps ?? {};
    const spinnerClassNames = clsx(styles["hop-Tag__Spinner"], spinnerClassName);

    const { className: clearButtonClassName, ...otherClearButtonProps } = clearButtonProps ?? {};
    const clearButtonClassNames = clsx(styles["hop-Tag__remove-btn"], clearButtonClassName);

    return (
        <RACTag
            ref={ref}
            className={classNames}
            style={style}
            textValue={textValue}
            data-invalid={isInvalid || undefined}
            data-loading={isLoading || undefined}
            {...otherProps}
        >
            {tagProps => {
                const { allowsRemoving, isDisabled, isSelected } = tagProps;

                return (
                    <>
                        <ClearContainerSlots>
                            <SlotProvider
                                values={[
                                    [TextContext, {
                                        className: styles["hop-Tag__text"],
                                        size: TagToTextSizeAdapter[size]
                                    }],
                                    [IconListContext, {
                                        className: styles["hop-Tag__icon-list"],
                                        size: "sm"
                                    }],
                                    [IconContext, {
                                        className: styles["hop-Tag__icon"],
                                        size: "sm"
                                    }],
                                    [BadgeContext, {
                                        className: ({ variant: badgeVariant }) => {
                                            return cssModule(
                                                styles,
                                                "hop-Tag__badge",
                                                badgeVariant
                                            );
                                        },
                                        isDisabled: isDisabled
                                    }],
                                    [AvatarContext, {
                                        className: styles["hop-Tag__avatar"],
                                        isDisabled: isDisabled,
                                        size: TagToAvatarSizeAdapter[size]
                                    }]
                                ]}
                            >
                                {children(tagProps)}
                            </SlotProvider>
                        </ClearContainerSlots>
                        {(allowsRemoving && !isLoading) &&
                            <ClearButton
                                slot="remove"
                                isDisabled={isDisabled}
                                className={clearButtonClassNames}
                                aria-label={stringFormatter.format("Tag.removeAriaLabel")}
                                size={TagToButtonSizeAdapter[size]}
                                variant={variant}
                                isSelected={isSelected}
                                {...otherClearButtonProps}
                            />
                        }
                        {isLoading &&
                            <Spinner
                                aria-label={stringFormatter.format("Tag.spinnerAriaLabel")}
                                size="sm"
                                className={spinnerClassNames}
                                {...otherSpinnerProps}
                            />
                        }
                    </>
                );
            }}
        </RACTag>
    );
}

/**
 * A tag group is an interactive collection of labels, categories, keywords, or filters, with capabilities for keyboard navigation, selection, and removal.
 *
 * [View Documentation](https://hopper.workleap.design/components/TagGroup)
 */
const _Tag = slotFn("tag", forwardRef<HTMLDivElement, TagProps>(Tag));
_Tag.displayName = "Tag";

export { _Tag as Tag };

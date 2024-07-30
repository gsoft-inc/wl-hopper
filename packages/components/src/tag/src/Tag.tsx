import { ClearButton, type ClearButtonProps } from "@hopper-ui/components";
import { IconContext } from "@hopper-ui/icons";
import {
    type StyledComponentProps,
    useStyledSystem,
    type ResponsiveProp,
    useResponsiveValue
} from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import { useContextProps, Tag as RACTag, type TagProps as RACTagProps, composeRenderProps } from "react-aria-components";

import { BadgeContext } from "../../Badge/index.ts";
import { useLocalizedString } from "../../i18n/index.ts";
import { IconListContext } from "../../IconList/index.ts";
import { Spinner } from "../../Spinner/index.ts";
import { Text, TextContext, type TextProps } from "../../typography/Text/index.ts";
import {
    composeClassnameRenderProps,
    SlotProvider,
    cssModule,
    isTextOnlyChildren,
    ClearContainerSlots,
    type SizeAdapter
} from "../../utils/index.ts";

import { TagContext } from "./TagContext.ts";

import styles from "./Tag.module.css";

export const GlobalTagCssSelector = "hop-Tag";

const TagToTextSizeAdapter: SizeAdapter<TagProps["size"], TextProps["size"]> = {
    sm: "xs",
    md: "xs",
    lg: "sm"
};

const TagToButtonSizeAdapter: SizeAdapter<TagProps["size"], ClearButtonProps["size"]> = {
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
    size?: ResponsiveProp<"sm" | "md" | "lg">;
    /**
     * The visual style of the Tag.
     * @default "neutral"
     */
    variant?: "neutral" | "subdued" | "progress" | "positive" | "caution" | "negative" | "option1" | "option2" | "option3" | "option4" | "option5" | "option6";
}

function Tag(props: TagProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, TagContext);
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

    const children = composeRenderProps(childrenProp, prev => {
        if (prev && isTextOnlyChildren(prev)) {
            return <Text>{prev}</Text>;
        }

        return prev;
    });

    return (
        <RACTag
            {...otherProps}
            ref={ref}
            className={classNames}
            style={style}
            textValue={textValue}
            data-invalid={isInvalid || undefined}
            data-loading={isLoading || undefined}
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
                                        className: styles["hop-Tag__badge"],
                                        isDisabled: isDisabled
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
                                className={styles["hop-Tag__remove-btn"]}
                                aria-label={stringFormatter.format("Tag.removeAriaLabel")}
                                size={TagToButtonSizeAdapter[size]}
                                variant={variant}
                                isSelected={isSelected}
                            />
                        }
                        {isLoading &&
                            <Spinner
                                aria-label={stringFormatter.format("Tag.spinnerAriaLabel")}
                                size="sm"
                                className={styles["hop-Tag__Spinner"]}
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
 * [View Documentation](TODO)
 */
const _Tag = forwardRef<HTMLDivElement, TagProps>(Tag);
_Tag.displayName = "Tag";

export { _Tag as Tag };

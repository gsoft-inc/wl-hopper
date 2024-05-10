import { Button } from "@hopper-ui/components";
import { IconContext, DismissIcon } from "@hopper-ui/icons";
import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import { useContextProps, Tag as RACTag, type TagProps as RACTagProps, composeRenderProps } from "react-aria-components";

import { IconListContext } from "../../IconList/index.ts";
import { Text, TextContext, type TextProps } from "../../Text/index.ts";
import { composeClassnameRenderProps, SlotProvider, cssModule, isTextOnlyChildren, ClearContainerSlots, type SizeAdapter } from "../../utils/index.ts";

import { TagContext } from "./TagContext.ts";

import styles from "./Tag.module.css";

export const GlobalTagCssSelector = "hop-Tag";

const TagToTextSizeAdapter: SizeAdapter<TagProps["size"], TextProps["size"]> = {
    md: "xs",
    lg: "sm"
};

export interface TagProps extends StyledComponentProps<RACTagProps> {
    /** 
     * Whether the tag is invalid or not.
     */
    isInvalid?: boolean;
    /**
     * The size of the tag.
     * @default "md"
     */
    size?: ResponsiveProp<"md" | "lg">;
}

function Tag(props: TagProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, TagContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children: childrenProp,
        isInvalid,
        size: sizeProp = "md",
        style: styleProp,
        textValue: textValueProp,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";
    const textValue = textValueProp ?? (typeof childrenProp === "string" ? childrenProp : undefined);

    const classNames = composeClassnameRenderProps(
        className,
        GlobalTagCssSelector,
        cssModule(
            styles,
            "hop-Tag",
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
            data-invalid={isInvalid}
        >
            {tagProps => {
                const { allowsRemoving, isDisabled } = tagProps;

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
                                    }]
                                ]}
                            >
                                {children(tagProps)}
                            </SlotProvider>
                        </ClearContainerSlots>
                        {allowsRemoving && 
                            <Button slot="remove" isDisabled={isDisabled} className={styles["hop-Tag__remove-btn"]} aria-label="Remove" variant="ghost-secondary" size="sm" width="core_160" height="core_160" style={{ border: "none" }}>
                                <DismissIcon size="sm" />
                            </Button>
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

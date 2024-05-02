import { Button } from "@hopper-ui/components";
import { IconContext, DismissIcon } from "@hopper-ui/icons";
import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import { useContextProps, Tag as RACTag, type TagProps as RACTagProps, type SlotProps, composeRenderProps } from "react-aria-components";

import { IconListContext } from "../../IconList/index.ts";
import { Text, TextContext, type TextProps } from "../../Text/index.ts";
import { composeClassnameRenderProps, SlotProvider, cssModule, isTextOnlyChildren, ClearContainerSlots, type SizeAdapter } from "../../utils/index.ts";

import { TagContext } from "./TagContext.ts";

import styles from "./Tag.module.css";

export const GlobalTagCssSelector = "hop-Tag";

// Won't be needed in next react-aria-components release: https://github.com/adobe/react-spectrum/pull/5850
const DefaultTagSlot = "tag";

const TagToTextSizeAdapter: SizeAdapter<TagProps["size"], TextProps["size"]> = {
    md: "xs",
    lg: "sm"
};

type PropsToOmit = "href | target | rel | download | ping | referrerPolicy";

export interface TagProps extends StyledComponentProps<Omit<RACTagProps, PropsToOmit>>, SlotProps {
    /**
     * A tag can vary in size.
     * @default "md"
     */
    size?: ResponsiveProp<"md" | "lg">;
}

function Tag(props: TagProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultTagSlot }, ref, TagContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children: childrenProp,
        size: sizeProp = "md",
        style: styleProp,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

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
        >
            {tagProps => {
                const { allowsRemoving } = tagProps;

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
                            <Button slot="remove" className={styles["hop-Tag__remove-btn"]} aria-label="Remove" variant="ghost-secondary" size="sm" width="core_160" height="core_160" style={{ border: "none" }}>
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
 * A versatile Tag component for categorizing items in a TagList, equipped with a remove button for easy management.
 *
 * [View Documentation](TODO)
 */
const _Tag = forwardRef<HTMLDivElement, TagProps>(Tag);
_Tag.displayName = "Tag";

export { _Tag as Tag };

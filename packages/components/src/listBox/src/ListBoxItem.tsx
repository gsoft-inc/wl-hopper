import { IconContext, type IconProps } from "@hopper-ui/icons";
import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import { useContextProps, ListBoxItem as RACListBoxItem, type ListBoxItemProps as RACListBoxItemProps, composeRenderProps, type SlotProps,
    DEFAULT_SLOT } from "react-aria-components";

import { IconListContext } from "../../IconList/index.ts";
import { Text, TextContext, type TextProps } from "../../Text/index.ts";
import { composeClassnameRenderProps, type SizeAdapter, SlotProvider, cssModule, isTextOnlyChildren, ClearContainerSlots } from "../../utils/index.ts";

import { ListBoxItemContext } from "./ListBoxItemContext.ts";

import styles from "./ListBoxItem.module.css";

export const GlobalListBoxItemCssSelector = "hop-ListBoxItem";

type ListBoxItemSize = "xs" | "sm" | "md" | "lg";

export interface ListBoxItemProps<T> extends StyledComponentProps<Omit<RACListBoxItemProps<T>, "orientation | layout">>, SlotProps {
    /**
     * A ListBoxItem can vary in size.
     * @default "md"
     */
    size?: ResponsiveProp<ListBoxItemSize>;
}

const ListBoxItemToIconSizeAdapter = {
    xs: "sm",
    sm: "sm",
    md: "md",
    lg: "md"
} as const satisfies SizeAdapter<ListBoxItemSize, IconProps["size"]>;

const ListBoxItemToTextSizeAdapter = {
    xs: "sm",
    sm: "sm",
    md: "sm",
    lg: "md"
} as const satisfies SizeAdapter<ListBoxItemSize, TextProps["size"]>;

function ListBoxItem<T extends object>(props: ListBoxItemProps<T>, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, ListBoxItemContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children: childrenProp,
        size: sizeProp,
        style: styleProp,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalListBoxItemCssSelector,
        cssModule(
            styles,
            "hop-ListBoxItem",
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
        <RACListBoxItem
            {...otherProps}
            ref={ref}
            className={classNames}
            style={style}
        >
            {ListBoxItemProps => {
                return (
                    <ClearContainerSlots>
                        <SlotProvider
                            values={[
                                [TextContext, {
                                    slots: {
                                        [DEFAULT_SLOT]: {
                                            className: styles["hop-ListBoxItem__text"],
                                            size: ListBoxItemToTextSizeAdapter[size]
                                        },
                                        description: {
                                            className: styles["hop-ListBoxItem__description"],
                                            size: "xs"
                                        }
                                    }
                                }],
                                [IconListContext, {
                                    slots: {
                                        [DEFAULT_SLOT]: {
                                            className: styles["hop-ListBoxItem__icon-list"],
                                            size: ListBoxItemToIconSizeAdapter[size]
                                        },
                                        "end-icon": {
                                            className: styles["hop-ListBoxItem__end-icon-list"],
                                            size: ListBoxItemToIconSizeAdapter[size]
                                        }
                                    }
                                }],
                                [IconContext, {
                                    slots: {
                                        [DEFAULT_SLOT]: {
                                            className: styles["hop-ListBoxItem__icon"],
                                            size: ListBoxItemToIconSizeAdapter[size]
                                        },
                                        "end-icon": {
                                            className: styles["hop-ListBoxItem__end-icon"],
                                            size: ListBoxItemToIconSizeAdapter[size]
                                        }
                                    }
                                }]
                            ]}
                        >
                            {children(ListBoxItemProps)}
                        </SlotProvider>
                    </ClearContainerSlots>
                );
            }}
        </RACListBoxItem>
    );
}

/**
 * TODO: tagline
 *
 * [View Documentation](TODO)
 */
const _ListBoxItem = forwardRef<HTMLDivElement, ListBoxItemProps<object>>(ListBoxItem);
_ListBoxItem.displayName = "ListBoxItem";

export { _ListBoxItem as ListBoxItem };

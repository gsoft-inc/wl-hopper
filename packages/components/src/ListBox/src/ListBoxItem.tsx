import { CheckmarkIcon, IconContext, type IconProps } from "@hopper-ui/icons";
import { type ResponsiveProp, type StyledComponentProps, useResponsiveValue, useStyledSystem } from "@hopper-ui/styled-system";
import { type ForwardedRef, forwardRef, type NamedExoticComponent, type ReactNode, type TransitionEventHandler, useContext, useState } from "react";
import {
    composeRenderProps,
    DEFAULT_SLOT,
    type ListBoxItemRenderProps,
    ListStateContext,
    ListBoxItem as RACListBoxItem,
    type ListBoxItemProps as RACListBoxItemProps,
    useContextProps
} from "react-aria-components";

import { AvatarContext, type AvatarProps } from "../../Avatar/index.ts";
import { BadgeContext } from "../../Badge/index.ts";
import { DecorativeCheckbox, type DecorativeCheckboxProps } from "../../checkbox/index.ts";
import { IconListContext } from "../../IconList/index.ts";
import { DecorativeRadio, type DecorativeRadioProps } from "../../radio/index.ts";
import { TextContext, type TextProps } from "../../typography/Text/index.ts";
import { composeClassnameRenderProps, cssModule, EnsureTextWrapper, type SizeAdapter, SlotProvider } from "../../utils/index.ts";

import { ListBoxItemContext } from "./ListBoxItemContext.ts";
import { ListBoxItemSkeleton } from "./ListBoxItemSkeleton.tsx";

import styles from "./ListBoxItem.module.css";

export const GlobalListBoxItemCssSelector = "hop-ListBoxItem";

export type ListBoxItemSize = "xs" | "sm" | "md" | "lg";

interface ListBoxItemSharedProps {
    /**
     * Whether or not the ListBoxItem is in an invalid state.
     */
    isInvalid?: boolean;
    /**
     * The selection indicator to use. Only available if the selection mode is not "none".
     * When set to "input", the selection indicator will be an either a radio or checkbox based on the selection mode.
     * @default "check"
     */
    selectionIndicator?: "check" | "input";
    /**
     * The props for the Radio.
     */
    radioProps?: DecorativeRadioProps;
    /**
     * The props for the Checkbox.
     */
    checkboxProps?: DecorativeCheckboxProps;
}
export interface ListBoxItemProps<T> extends ListBoxItemSharedProps, StyledComponentProps<Omit<RACListBoxItemProps<T>, "orientation | layout">> {
    /**
     * Whether the item is loading.
     * */
    isLoading?: boolean;
    /**
     * A ListBoxItem can vary in size.
     * @default "sm"
     */
    size?: ResponsiveProp<ListBoxItemSize>;
}

interface ListBoxItemInnerProps extends ListBoxItemSharedProps, ListBoxItemRenderProps {
    /**
     * A ListBoxItem can vary in size.
     * @default "sm"
     */
    size: ListBoxItemSize;
    /**
     * The children of the ListBoxItem.
     */
    children: ReactNode;
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

const ListBoxItemToAvatarSizeAdapter = {
    xs: "xs",
    sm: "xs",
    md: "md",
    lg: "md"
} as const satisfies SizeAdapter<ListBoxItemSize, AvatarProps["size"]>;

function ListBoxItemInner(props: ListBoxItemInnerProps) {
    const listStateContext = useContext(ListStateContext);

    const { selectionMode,
        isDisabled,
        isFocusVisible,
        isPressed,
        isHovered,
        isSelected,
        selectionIndicator,
        isInvalid,
        size,
        children,
        radioProps,
        checkboxProps
    } = props;

    const isRadio = selectionIndicator === "input" && selectionMode === "single";
    const isCheckbox = selectionIndicator === "input" && selectionMode === "multiple";
    const isCheck = selectionIndicator === "check" && selectionMode !== "none";

    const isListHasSelection = listStateContext.selectionManager.selectedKeys.size > 0;
    const [isListHasSelectionEnd, setIsListHasSelectionEnd] = useState(isListHasSelection);

    const handleTransitionEnd: TransitionEventHandler<HTMLDivElement> = event => {
        if (event.propertyName === "grid-template-columns") {
            setIsListHasSelectionEnd(prev => isListHasSelection && !prev);
        }
    };

    return (
        <div
            className={styles["hop-ListBoxItem__inner"]}
            data-list-has-selection={isListHasSelection || undefined}
            data-list-has-selection-end={isListHasSelectionEnd || undefined}
            onTransitionEnd={handleTransitionEnd}
        >
            {isRadio && (
                <DecorativeRadio
                    className={styles["hop-ListBoxItem__radio"]}
                    value="radio"
                    size="sm"
                    isDisabled={isDisabled}
                    isHovered={isHovered || isFocusVisible}
                    isPressed={isPressed}
                    isSelected={isSelected}
                    isInvalid={isInvalid}
                    {...radioProps}
                />
            )}
            {isCheckbox && (
                <DecorativeCheckbox
                    size="sm"
                    value="checkbox"
                    className={styles["hop-ListBoxItem__checkbox"]}
                    isDisabled={isDisabled}
                    isHovered={isHovered || isFocusVisible}
                    isPressed={isPressed}
                    isSelected={isSelected}
                    isInvalid={isInvalid}
                    {...checkboxProps}
                />
            )}
            {isCheck && (
                <CheckmarkIcon className={styles["hop-ListBoxItem__checkmark"]} size="sm" />
            )}

            <SlotProvider
                values={[
                    [TextContext, {
                        slots: {
                            [DEFAULT_SLOT]: {
                                slot: "label",
                                className: styles["hop-ListBoxItem__label"],
                                size: ListBoxItemToTextSizeAdapter[size]
                            },
                            label: {
                                className: styles["hop-ListBoxItem__label"],
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
                    }],
                    [BadgeContext, {
                        className: styles["hop-ListBoxItem__badge"],
                        isDisabled: isDisabled,
                        isHovered: isHovered,
                        isPressed: isPressed,
                        isSelected: isSelected
                    }],
                    [AvatarContext, {
                        className: styles["hop-ListBoxItem__avatar"],
                        isDisabled: isDisabled,
                        size: ListBoxItemToAvatarSizeAdapter[size]
                    }]
                ]}
            >
                {children}
            </SlotProvider>
        </div>
    );
}

function ListBoxItem<T extends object>(props: ListBoxItemProps<T>, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, ListBoxItemContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children: childrenProp,
        isDisabled,
        isInvalid,
        isLoading,
        size: sizeProp,
        style: styleProp,
        textValue: textValueProp,
        selectionIndicator,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "sm";
    const textValue = textValueProp ?? (typeof childrenProp === "string" ? childrenProp : undefined);

    const classNames = composeClassnameRenderProps(
        className,
        GlobalListBoxItemCssSelector,
        cssModule(
            styles,
            "hop-ListBoxItem",
            size,
            selectionIndicator
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

    return (
        <RACListBoxItem
            {...otherProps}
            ref={ref}
            className={classNames}
            style={style}
            textValue={textValue}
            isDisabled={isLoading || isDisabled}
            data-invalid={isInvalid || undefined}
            data-loading={isLoading || undefined}
            aria-label={isLoading ? "Loading" : undefined}
            aria-live={isLoading ? "polite" : undefined}
        >
            {listBoxItemProps => {
                if (isLoading) {
                    return (
                        <div className={styles["hop-ListBoxItem__inner"]}>
                            <ListBoxItemSkeleton
                                size={size}
                                slot="label"
                            />
                        </div>
                    );
                }

                return (
                    <ListBoxItemInner
                        {...listBoxItemProps}
                        selectionIndicator={selectionIndicator}
                        isInvalid={isInvalid}
                        size={size}
                    >
                        {children(listBoxItemProps)}
                    </ListBoxItemInner>
                );
            }}
        </RACListBoxItem>
    );
}

/**
 * A ListBoxItem represents an item within a ListBox component.
 *
 * [View Documentation](TODO)
 */
const _ListBoxItem = forwardRef(ListBoxItem) as <T>(
    props: ListBoxItemProps<T> & { ref?: ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof ListBoxItem>;
(_ListBoxItem as NamedExoticComponent).displayName = "ListBoxItem";

export { _ListBoxItem as ListBoxItem };

import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import { useContextProps, ListBox as RACListBox, type ListBoxProps as RACListBoxProps, composeRenderProps } from "react-aria-components";

import { DividerContext } from "../../Divider/index.ts";
import { HeaderContext } from "../../Header/index.ts";
import { SectionContext } from "../../Section/index.ts";
import { composeClassnameRenderProps, SlotProvider, cssModule } from "../../utils/index.ts";

import { ListBoxContext } from "./ListBoxContext.ts";
import type { ListBoxItemSize } from "./ListBoxItem.tsx";
import { ListBoxItemContext } from "./ListBoxItemContext.ts";
import { useLoadOnScroll } from "./useLoadOnScroll.ts";

import styles from "./ListBox.module.css";

export const GlobalListBoxCssSelector = "hop-ListBox";

export interface ListBoxProps<T> extends StyledComponentProps<Omit<RACListBoxProps<T>, "orientation | layout">> {
    /**
     * Whether or not the ListBox is 100% of its container's width.
     */
    isFluid?: ResponsiveProp<boolean>;
    /**
     * Whether or not the ListBox is in an invalid state.
     */
    isInvalid?: boolean;
    /**
     * Whether data is currently being loaded.
     * */
    isLoading?: boolean;
    /**
     * Handler that is called when more items should be loaded, e.g. while scrolling near the bottom.
     * */
    onLoadMore?: () => void;
    /**
     * The selection indicator to use. Only available if the selection mode is not "none".
     * When set to "input", the selection indicator will be an either a radio or checkbox based on the selection mode.
     * @default "check"
     */
    selectionIndicator?: "check" | "input";
    /**
     * A ListBox can vary in size.
     * @default "sm"
     */
    size?: ResponsiveProp<ListBoxItemSize>;
}

function ListBox<T extends object>(props: ListBoxProps<T>, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, ListBoxContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        isFluid: isFluidProp,
        isInvalid,
        isLoading,
        onLoadMore,
        size: sizeProp,
        style: styleProp,
        selectionIndicator = "check",
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "sm";
    const isFluid = useResponsiveValue(isFluidProp) ?? false;

    const classNames = composeClassnameRenderProps(
        className,
        GlobalListBoxCssSelector,
        cssModule(
            styles,
            "hop-ListBox",
            size,
            isFluid && "fluid"
        ),
        stylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    const onScroll = useLoadOnScroll({ isLoading, onLoadMore }, ref);

    return (
        <SlotProvider
            values={[
                [HeaderContext, {
                    className: styles["hop-ListBox__section-header"]
                }],
                [SectionContext, {
                    className: styles["hop-ListBox__section"]
                }],
                [DividerContext, {
                    className: styles["hop-ListBox__divider"]
                }],
                [ListBoxItemContext, {
                    className: styles["hop-ListBox__item"],
                    size: size,
                    selectionIndicator: selectionIndicator,
                    isInvalid: isInvalid
                }]
            ]}
        >
            <RACListBox
                {...otherProps}
                ref={ref}
                className={classNames}
                style={style}
                onScroll={onScroll}
            >
                {children}
            </RACListBox>
        </SlotProvider>
    );
}

/**
 * A listbox is a list of interactive options that appears when users interact with an element or perform a specific action.
 *
 * [View Documentation](TODO)
 */
const _ListBox = forwardRef<HTMLDivElement, ListBoxProps<object>>(ListBox);
_ListBox.displayName = "ListBox";

export { _ListBox as ListBox };

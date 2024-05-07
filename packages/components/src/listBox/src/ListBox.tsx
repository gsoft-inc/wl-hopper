import { type StyledComponentProps, useStyledSystem, type ResponsiveProp, useResponsiveValue } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import { useContextProps, ListBox as RACListBox, type ListBoxProps as RACListBoxProps, composeRenderProps } from "react-aria-components";

import { composeClassnameRenderProps, SlotProvider, cssModule } from "../../utils/index.ts";

import { ListBoxContext } from "./ListBoxContext.ts";
import { ListBoxItemContext } from "./ListBoxItemContext.ts";

import styles from "./ListBox.module.css";

export const GlobalListBoxCssSelector = "hop-ListBox";

// Won't be needed in next react-aria-components release: https://github.com/adobe/react-spectrum/pull/5850
const DefaultListBoxSlot = "listBox";

export interface ListBoxProps<T> extends StyledComponentProps<Omit<RACListBoxProps<T>, "orientation | layout">> {
    /**
     * A ListBox can vary in size.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;
}

function ListBox<T extends object>(props: ListBoxProps<T>, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultListBoxSlot }, ref, ListBoxContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        size: sizeProp,
        style: styleProp,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "md";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalListBoxCssSelector,
        cssModule(
            styles,
            "hop-ListBox",
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


    return (
        <SlotProvider
            values={[
                [ListBoxItemContext, {
                    className: styles["hop-ListBox__item"],
                    size: size
                }]
            ]}
        >
            <RACListBox
                {...otherProps}
                ref={ref}
                className={classNames}
                style={style}
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

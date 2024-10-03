import { useStyledSystem } from "@hopper-ui/styled-system";
import { type Context, type ForwardedRef, forwardRef, type NamedExoticComponent, type ReactNode } from "react";
import { mergeProps } from "react-aria";
import { composeRenderProps, type ContextValue, ButtonContext as RACButtonContext, TextContext as RACTextContext, useContextProps, useSlottedContext } from "react-aria-components";

import { BadgeContext } from "../../Badge/index.ts";
import { Footer, type FooterProps } from "../../layout/index.ts";
import { ListBox, ListBoxContext, ListBoxItem, type ListBoxProps } from "../../ListBox/index.ts";
import { Popover, type PopoverProps } from "../../overlays/index.ts";
import { TextContext } from "../../typography/index.ts";
import { ClearProviders, composeClassnameRenderProps, EnsureTextWrapper, SlotProvider } from "../../utils/index.ts";

import { SelectOptionsContext } from "./SelectOptionsContext.ts";

export const GlobalSelectOptionsCssSelector = "hop-SelectOptions";

export interface SelectOptionsProps<T extends object> extends Omit<PopoverProps, "children"> {
    /**
     * The items of the SelectOptions.
     */
    children: ReactNode | ((item: T) => ReactNode);
    /**
     * The footer of the select.
     */
    footer?: ReactNode;
    /**
     * The props for the Footer
     */
    footerProps?: FooterProps;
    /**
     * If `true`, the select menu will not be the width of the trigger and instead be the width of its contents.
     */
    isAutoMenuWidth?: boolean;
    /**
     * Item objects in the collection.
     */
    items?: Iterable<T>;
    /**
     * The list box props.
     */
    listBoxProps?: ListBoxProps<T>;
}

function SelectOptions<T extends object>(props: SelectOptionsProps<T>, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, SelectOptionsContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        footer,
        footerProps,
        isAutoMenuWidth,
        items,
        listBoxProps,
        placement = "bottom start",
        style: styleProp,
        slot,
        ...otherProps
    } = ownProps;

    const listBoxCtx = useSlottedContext(ListBoxContext);
    const textCtx = useSlottedContext(TextContext);

    const classNames = composeClassnameRenderProps(
        className,
        GlobalSelectOptionsCssSelector,
        stylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });
    
    const footerMarkup = footer ? (
        <ClearProviders
            values={[
                RACTextContext,
                TextContext,
                RACButtonContext as Context<ContextValue<unknown, HTMLElement>>
            ]}
        >
            <SlotProvider values={[
                [TextContext, { size: textCtx?.size }]
            ]}
            >
                <Footer {...footerProps}>
                    <EnsureTextWrapper>{footer}</EnsureTextWrapper>
                </Footer>
            </SlotProvider>
        </ClearProviders>
    ) : null;

    return (            
        <Popover 
            {...otherProps}
            ref={ref}
            className={classNames}
            isAutoWidth={isAutoMenuWidth}
            isNonDialog
            placement={placement}
            style={style}
            slot={slot ?? undefined}
        >
            <SlotProvider values={[
                [BadgeContext, {
                    variant: "secondary"
                }]
            ]}
            >
                <ListBox items={items} {...mergeProps(listBoxCtx, listBoxProps)}>
                    {children}
                </ListBox>
            </SlotProvider>

            {footerMarkup}
        </Popover>
    );
}

/**
 * SelectOptions components enable users to choose a single option from a collapsible list, optimizing space efficiency.
 *
 * [View Documentation](TODO)
 */
const _SelectOptions = forwardRef(SelectOptions) as <T extends object>(
    props: SelectOptionsProps<T> & { ref?: ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SelectOptions>;
(_SelectOptions as NamedExoticComponent).displayName = "SelectOptions";

export { ListBoxItem as SelectOption, _SelectOptions as SelectOptions };


import { useStyledSystem, type StyledComponentProps } from "@hopper-ui/styled-system";
import { forwardRef, type Context, type ForwardedRef, type NamedExoticComponent, type ReactNode } from "react";
import { mergeProps } from "react-aria";
import {
    composeRenderProps,
    ButtonContext as RACButtonContext,
    TextContext as RACTextContext,
    useContextProps,
    useSlottedContext,
    type ContextValue,
    type GroupProps as RACGroupProps
} from "react-aria-components";

import { BadgeContext } from "../../Badge/index.ts";
import { Footer, type FooterProps } from "../../layout/index.ts";
import { ListBox, ListBoxContext, ListBoxItem, type ListBoxProps } from "../../ListBox/index.ts";
import { Popover, type PopoverProps } from "../../overlays/index.ts";
import { TextContext } from "../../typography/index.ts";
import { ClearProviders, composeClassnameRenderProps, EnsureTextWrapper, SlotProvider } from "../../utils/index.ts";

import { ComboBoxOptionsContext } from "./ComboBoxOptionsContext.ts";

export const GlobalComboBoxOptionsCssSelector = "hop-ComboBoxOptions";

export type ComboBoxOptionsTriggerProps = StyledComponentProps<RACGroupProps>;

export interface ComboBoxOptionsProps<T extends object> extends StyledComponentProps<Omit<PopoverProps, "children">> {
    /**
     * The items of the ComboBoxOptions.
     */
    children: ReactNode | ((item: T) => ReactNode);
    /**
     * The footer of the ComboBoxOptions.
     */
    footer?: ReactNode;
    /**
     * If `true`, the select menu will not be the width of the trigger and instead be the width of its contents.
     */
    isAutoMenuWidth?: boolean;
    /**
     * The list box props.
     */
    listBoxProps?: ListBoxProps<T>;
    /**
     * The props for the Footer.
     */
    footerProps?: FooterProps;
}

function ComboBoxOptions<T extends object>(props: ComboBoxOptionsProps<T>, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, ComboBoxOptionsContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        footer,
        isAutoMenuWidth,
        listBoxProps,
        placement = "bottom start",
        slot,
        style: styleProp,
        footerProps,
        ...otherProps
    } = ownProps;

    const listBoxCtx = useSlottedContext(ListBoxContext);
    const textCtx = useSlottedContext(TextContext);

    const classNames = composeClassnameRenderProps(
        className,
        GlobalComboBoxOptionsCssSelector,
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
                <ListBox {...mergeProps(listBoxCtx, listBoxProps)}>
                    {children}
                </ListBox>
            </SlotProvider>

            {footerMarkup}
        </Popover>
    );
}

/**
 * ComboBoxOptions is a component that displays a list of options in a popover.
 *
 * [View Documentation](TODO)
 */
const _ComboBoxOptions = forwardRef(ComboBoxOptions) as <T extends object>(
    props: ComboBoxOptionsProps<T> & { ref?: ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof ComboBoxOptions>;
(_ComboBoxOptions as NamedExoticComponent).displayName = "ComboBoxOptions";

export { ListBoxItem as ComboBoxOption, _ComboBoxOptions as ComboBoxOptions };


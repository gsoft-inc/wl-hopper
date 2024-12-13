import { IconContext } from "@hopper-ui/icons";
import { useResponsiveValue, useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef, type NamedExoticComponent, type ReactNode } from "react";
import {
    Button,
    composeRenderProps,
    ButtonContext as RACButtonContext,
    Select as RACSelect,
    TextContext as RACTextContext,
    useContextProps,
    type ButtonProps as RACButtonProps,
    type SelectProps as RACSelectProps,
    type SelectValueRenderProps
} from "react-aria-components";

import { BadgeContext } from "../../Badge/index.ts";
import { ErrorMessage } from "../../ErrorMessage/index.ts";
import { useFormProps } from "../../Form/index.ts";
import { HelperMessage } from "../../HelperMessage/index.ts";
import { Footer } from "../../layout/index.ts";
import { ListBox, ListBoxItem, type ListBoxProps, type SelectionIndicator } from "../../ListBox/index.ts";
import { ListBoxSection } from "../../ListBoxSection/index.ts";
import { Popover, type PopoverProps } from "../../overlays/index.ts";
import { ToggleArrow } from "../../ToggleArrow/index.ts";
import { Label, TextContext } from "../../typography/index.ts";
import { ClearContainerSlots, ClearProviders, composeClassnameRenderProps, cssModule, ensureTextWrapper, SlotProvider, type FieldProps, type MenuAlignment, type MenuDirection } from "../../utils/index.ts";

import { SelectContext } from "./SelectContext.ts";
import { SelectValue } from "./SelectValue.tsx";

import styles from "./Select.module.css";

export const GlobalSelectCssSelector = "hop-Select";

export type ValueRenderProps<T> = SelectValueRenderProps<T> & { defaultChildren: ReactNode };
export type SelectTriggerProps = StyledComponentProps<RACButtonProps>;

export interface SelectProps<T extends object> extends StyledComponentProps<Omit<RACSelectProps<T>, "children">>, FieldProps {
    /**
     * The alignment of the menu.
     * @default "start"
     */
    align?: ResponsiveProp<MenuAlignment>;
    /**
     * The items of the Select.
     */
    children: ReactNode | ((item: T) => ReactNode);
    /**
     * The direction that the menu should open.
     * @default "bottom"
     */
    direction?: ResponsiveProp<MenuDirection>;
    /**
     * The footer of the select.
     */
    footer?: ReactNode;
    /**
     * If `true`, the select menu will not be the width of the trigger and instead be the width of its contents.
     */
    isAutoMenuWidth?: boolean;
    /**
     * If `true`, the select will take all available width.
     * @default false
     */
    isFluid?: ResponsiveProp<boolean>;
    /**
     * Item objects in the collection.
     */
    items?: Iterable<T>;
    /**
     * Whether data is currently being loaded.
     * */
    isLoading?: boolean;
    /**
     * The list box props.
     */
    listBoxProps?: ListBoxProps<T>;
    /**
     * Handler that is called when more items should be loaded, e.g. while scrolling near the bottom.
     * */
    onLoadMore?: () => void;
    /**
     * The placeholder text when the select is empty.
     */
    placeholder?: string;
    /**
     * The props for the popover.
     */
    popoverProps?: PopoverProps;
    /**
     * An icon or text to display at the start of the select trigger.
     */
    prefix?: ReactNode;
    /**
     * A function to render the value of the select. It will render the selected item's text by default.
     */
    renderValue?: (valueRenderProps: ValueRenderProps<T>) => ReactNode;
    /**
     * The selection indicator to use. Only available if the selection mode is not "none".
     * When set to "input", the selection indicator will be either a radio or checkbox based on the selection mode.
     * @default "check"
     */
    selectionIndicator?: SelectionIndicator;
    /**
     * Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.
     */
    shouldFlip?: boolean;
    /**
     * The props for the select's trigger.
     */
    triggerProps?: SelectTriggerProps;
}

function Select<T extends object>(props: SelectProps<T>, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, SelectContext);
    props = useFormProps(props);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        align: alignProp,
        className,
        children,
        description,
        direction: directionProp,
        errorMessage,
        footer,
        isAutoMenuWidth,
        isFluid: isFluidProp,
        isInvalid,
        isLoading,
        isRequired,
        items,
        label,
        listBoxProps,
        necessityIndicator,
        onLoadMore,
        popoverProps,
        prefix,
        renderValue,
        selectionIndicator,
        shouldFlip,
        size: sizeProp,
        style: styleProp,
        triggerProps,
        ...otherProps
    } = ownProps;
    const { stylingProps: triggerStylingProps, ...triggerOwnProps } = useStyledSystem(triggerProps ?? {});
    const {
        className: triggerClassName,
        style: triggerStyleProp,
        ...otherTriggerProps
    } = triggerOwnProps;

    const size = useResponsiveValue(sizeProp) ?? "md";
    const isFluid = useResponsiveValue(isFluidProp) ?? false;
    const align = useResponsiveValue(alignProp) ?? "start";
    const direction = useResponsiveValue(directionProp) ?? "bottom";

    const classNames = composeClassnameRenderProps(
        className,
        GlobalSelectCssSelector,
        cssModule(
            styles,
            "hop-Select",
            isFluid && "fluid",
            size
        ),
        stylingProps.className
    );

    const buttonClassNames = composeClassnameRenderProps(
        triggerClassName,
        cssModule(
            styles,
            "hop-Select__button",
            size
        ),
        triggerStylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    const triggerStyle = composeRenderProps(triggerStyleProp, prev => {
        return {
            ...triggerStylingProps.style,
            ...prev
        };
    });

    const prefixMarkup = prefix ? (
        <SlotProvider values={[
            [TextContext, { size, className: styles["hop-Select__prefix"] }],
            [IconContext, { size, className: styles["hop-Select__prefix"] }]
        ]}
        >
            <ClearContainerSlots>
                {ensureTextWrapper(prefix)}
            </ClearContainerSlots>
        </SlotProvider>
    ) : null;

    const footerMarkup = footer ? (
        <ClearProviders
            values={[
                RACTextContext,
                TextContext,
                RACButtonContext
            ]}
        >
            <SlotProvider values={[
                [TextContext, {
                    size
                }]
            ]}
            >
                <Footer>
                    {ensureTextWrapper(footer)}
                </Footer>

            </SlotProvider>
        </ClearProviders>
    ) : null;

    return (
        <RACSelect
            ref={ref}
            className={classNames}
            style={style}
            isInvalid={isInvalid}
            isRequired={isRequired}
            {...otherProps}
        >
            {selectRenderProps => {
                const { isOpen } = selectRenderProps;

                return (
                    <>
                        {label && (
                            <Label
                                className={styles["hop-Select__label"]}
                                isRequired={isRequired}
                                necessityIndicator={necessityIndicator}
                            >
                                {label}
                            </Label>
                        )}
                        <Popover
                            isAutoWidth={isAutoMenuWidth}
                            isNonDialog
                            placement={`${direction} ${align}`}
                            shouldFlip={shouldFlip}
                            {...popoverProps}
                        >
                            <SlotProvider values={[
                                [BadgeContext, {
                                    variant: "secondary"
                                }]
                            ]}
                            >
                                <ListBox
                                    size={size}
                                    isInvalid={isInvalid}
                                    items={items}
                                    isLoading={isLoading}
                                    onLoadMore={onLoadMore}
                                    selectionIndicator={selectionIndicator}
                                    {...listBoxProps}
                                >
                                    {children}
                                </ListBox>
                            </SlotProvider>
                            {footerMarkup}
                        </Popover>
                        <Button className={buttonClassNames} style={triggerStyle} data-invalid={isInvalid || undefined} {...otherTriggerProps}>
                            {prefixMarkup}
                            <SelectValue<T> size={size}>
                                {valueRenderProps => {
                                    return renderValue?.(valueRenderProps);
                                }}
                            </SelectValue>
                            <ToggleArrow
                                className={styles["hop-Select__button-icon"]}
                                isExpanded={isOpen}

                            />
                        </Button>
                        {description && (
                            <HelperMessage className={styles["hop-Select__helper-message"]}>
                                {description}
                            </HelperMessage>
                        )}
                        <ErrorMessage className={styles["hop-Select__error-message"]}>
                            {errorMessage}
                        </ErrorMessage>
                    </>
                );
            }}
        </RACSelect>
    );
}

/**
 * Select components enable users to choose a single option from a collapsible list, optimizing space efficiency.
 *
 * [View Documentation](TODO)
 */
const _Select = forwardRef(Select) as <T extends object>(
    props: SelectProps<T> & { ref?: ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof Select>;
(_Select as NamedExoticComponent).displayName = "Select";

export { _Select as Select, ListBoxItem as SelectItem, ListBoxSection as SelectSection };

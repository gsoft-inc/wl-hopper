import { AngleDownIcon, AngleUpIcon, IconContext } from "@hopper-ui/icons";
import { type ResponsiveProp, useResponsiveValue, useStyledSystem, type StyledComponentProps } from "@hopper-ui/styled-system";
import { forwardRef, type NamedExoticComponent, type ForwardedRef, type ReactNode, type Context } from "react";
import { composeRenderProps, 
    useContextProps, 
    Select as RACSelect, 
    type SelectProps as RACSelectProps, 
    Button, 
    TextContext as RACTextContext, 
    ButtonContext as RACButtonContext, 
    type ContextValue, 
    type SelectValueRenderProps, 
    type ButtonProps as RACButtonProps
} from "react-aria-components";

import { BadgeContext } from "../../Badge/index.ts";
import { ErrorMessageContext } from "../../ErrorMessage/index.ts";
import { HelperMessageContext } from "../../HelperMessage/index.ts";
import { Footer } from "../../layout/index.ts";
import { ListBox, type ListBoxProps, ListBoxItem } from "../../ListBox/index.ts";
import { Popover, type PopoverProps } from "../../overlays/index.ts";
import { LabelContext, TextContext, Text } from "../../typography/index.ts";
import { ClearContainerSlots, ClearProviders, composeClassnameRenderProps, cssModule, isTextOnlyChildren, SlotProvider } from "../../utils/index.ts";

import { SelectContext } from "./SelectContext.ts";
import { SelectValue } from "./SelectValue.tsx";

import styles from "./Select.module.css";

export const GlobalSelectCssSelector = "hop-Select";

export type ValueRenderProps = SelectValueRenderProps<object> & { defaultChildren: ReactNode };
export type SelectSize = "sm" | "md";
export type SelectTriggerProps = StyledComponentProps<RACButtonProps>;

export interface SelectProps<T extends object> extends StyledComponentProps<Omit<RACSelectProps<T>, "children">> {
    /**
     * The items of the Select.
     */
    children: ReactNode | ((item: T) => ReactNode);
    /**
     * The field children of the Select. This includes the field label, field description, and field errors.
     */
    fieldChildren?: ReactNode;
    /**
     * The footer of the Select.
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
     * The list box props.
     */
    listBoxProps?: ListBoxProps<T>;
    /**
     * The placeholder text when the select is empty.
     */
    placeholder?: string;
    /**
     * The popover props.
     */
    popoverProps?: PopoverProps;
    /**
     * An icon or text to display at the start of the select trigger.
     */
    prefix?: ReactNode;
    /**
     * A function to render the value of the select. It will render the selected item's text by default.
     */
    renderValue?: (valueRenderProps: ValueRenderProps) => ReactNode;
    /**
     * The size of the select.
     * @default "sm"
     */
    size?: ResponsiveProp<SelectSize>;
    /**
     * The props for the select's trigger.
     */
    triggerProps?: SelectTriggerProps;
}

function Select<T extends object>(props: SelectProps<T>, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, SelectContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        fieldChildren,
        footer,
        isAutoMenuWidth,
        isFluid: isFluidProp,
        isInvalid,
        items,
        listBoxProps,
        popoverProps,
        prefix,
        renderValue,
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
    const { placement = "bottom start", ...otherPopoverProps } = popoverProps ?? {};
    
    const size = useResponsiveValue(sizeProp) ?? "sm";
    const isFluid = useResponsiveValue(isFluidProp) ?? false;

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

    const triggerStyle = {
        ...triggerStylingProps.style,
        ...triggerStyleProp
    };

    const prefixMarkup = prefix ? (
        <SlotProvider values={[
            [TextContext, { size, className: styles["hop-Select__prefix"] }],
            [IconContext, { size, className: styles["hop-Select__prefix"] }]
        ]}
        >
            <ClearContainerSlots>
                {isTextOnlyChildren(prefix) ? <Text>{prefix}</Text> : prefix}
            </ClearContainerSlots>
        </SlotProvider>
    ) : null;

    const footerMarkup = footer ? (
        <Footer>{isTextOnlyChildren(footer) ? <Text>{footer}</Text> : footer}</Footer>
    ) : null;

    return (
        <RACSelect
            {...otherProps}
            ref={ref}
            className={classNames}
            style={style}
            isInvalid={isInvalid}
        >
            {selectRenderProps => {
                const { isOpen } = selectRenderProps;
                const ButtonIcon = isOpen ? AngleUpIcon : AngleDownIcon;

                return (
                    <>
                        <SlotProvider values={[
                            [LabelContext, {
                                className: styles["hop-Select__label"]
                            }],
                            [HelperMessageContext, {
                                className: styles["hop-Select__helper-message"]
                            }],
                            [ErrorMessageContext, {
                                className: styles["hop-Select__error-message"]
                            }]
                        ]}
                        >
                            {fieldChildren}
                        </SlotProvider>
                        <Button {...otherTriggerProps} className={buttonClassNames} style={triggerStyle} data-invalid={isInvalid || undefined}>
                            {prefixMarkup}
                            <SelectValue size={size}>
                                {valueRenderProps => {
                                    return renderValue?.(valueRenderProps);
                                }}
                            </SelectValue>
                            <ButtonIcon size="sm" className={styles["hop-Select__button-icon"]} />
                        </Button>
                        <Popover {...otherPopoverProps} placement={placement} isNonDialog autoWidth={isAutoMenuWidth}>
                            <SlotProvider values={[
                                [BadgeContext, {
                                    variant: "secondary"
                                }]
                            ]}
                            >
                                <ListBox {...listBoxProps} items={items} size={size} isInvalid={isInvalid}>
                                    {children}
                                </ListBox>
                            </SlotProvider>
                        
                            <ClearProviders
                                values={[
                                    RACTextContext,
                                    TextContext,
                                    RACButtonContext as Context<ContextValue<unknown, HTMLElement>>
                                ]}
                            >
                                {footerMarkup}
                            </ClearProviders>
                        </Popover>
                    </>
                );
            }}
        </RACSelect>
    );
}
const _Select = forwardRef(Select) as <T extends object>(
    props: SelectProps<T> & { ref?: ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof Select>;
(_Select as NamedExoticComponent).displayName = "Select";

/**
 * Select components enable users to choose a single option from a collapsible list, optimizing space efficiency.
 *
 * [View Documentation](TODO)
 */
const CompoundSelect = Object.assign(_Select, {
    /**
     * A select option is an item that is displayed in a select.
     *
     * [View Documentation](TODO)
     */
    Option: ListBoxItem
});

export { CompoundSelect as Select };

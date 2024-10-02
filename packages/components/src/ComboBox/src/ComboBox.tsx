import { AngleDownIcon, AngleUpIcon, IconContext } from "@hopper-ui/icons";
import { useResponsiveValue, useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { mergeRefs, useObjectRef, useResizeObserver } from "@react-aria/utils";
import { forwardRef, useCallback, useRef, useState, type Context, type ForwardedRef, type MouseEventHandler, type MutableRefObject, type NamedExoticComponent, type ReactNode } from "react";
import {
    Button,
    composeRenderProps,
    Group,
    Input,
    InputContext,
    ButtonContext as RACButtonContext,
    ComboBox as RACComboBox,
    TextContext as RACTextContext,
    useContextProps,
    useSlottedContext,
    type ContextValue,
    type ComboBoxProps as RACComboBoxProps,
    type GroupProps as RACGroupProps
} from "react-aria-components";

import { BadgeContext } from "../../Badge/index.ts";
import { ErrorMessageContext } from "../../ErrorMessage/index.ts";
import { HelperMessageContext } from "../../HelperMessage/index.ts";
import { Footer, type FooterProps } from "../../layout/index.ts";
import { ListBox, ListBoxItem, type ListBoxProps } from "../../ListBox/index.ts";
import { Popover, type PopoverProps } from "../../overlays/index.ts";
import { LabelContext, TextContext } from "../../typography/index.ts";
import { ClearContainerSlots, ClearProviders, composeClassnameRenderProps, cssModule, EnsureTextWrapper, SlotProvider, type FieldSize, type NecessityIndicator } from "../../utils/index.ts";

import { ComboBoxContext } from "./ComboBoxContext.ts";

import styles from "./ComboBox.module.css";

export const GlobalComboBoxCssSelector = "hop-ComboBox";

export type ComboBoxTriggerProps = StyledComponentProps<RACGroupProps>;

export interface ComboBoxProps<T extends object> extends StyledComponentProps<Omit<RACComboBoxProps<T>, "children">> {
    /**
     * The items of the ComboBox.
     */
    children: ReactNode | ((item: T) => ReactNode);
    /**
     * The field children of the ComboBox. This includes the field label, field description, and field errors.
     */
    fieldChildren?: ReactNode;
    /**
     * The footer of the ComboBox.
     */
    footer?: ReactNode;
    /**
     * A ref for the HTML input element.
     */
    inputRef?: MutableRefObject<HTMLInputElement>;
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
     * Whether the required state should be shown as an asterisk or a label, which would display (Optional) on all non required field labels.
     */
    necessityIndicator?: NecessityIndicator;
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
     * The size of the select.
     * @default "sm"
     */
    size?: ResponsiveProp<FieldSize>;
    /**
     * The props for the select's trigger.
     */
    triggerProps?: ComboBoxTriggerProps;
    /**
     * The props for the Footer.
     */
    footerProps?: FooterProps;
}

function ComboBox<T extends object>(props: ComboBoxProps<T>, ref: ForwardedRef<HTMLDivElement>) {
    // we extract the inputRef props, since we want to manually merge it with the context props.
    const {
        inputRef: userProvidedInputRef = null,
        ...propsWithoutRef
    } = props;
    [props, ref] = useContextProps(propsWithoutRef, ref, ComboBoxContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        fieldChildren,
        footer,
        isAutoMenuWidth,
        isFluid: isFluidProp,
        isInvalid,
        isRequired,
        items,
        menuTrigger = "focus",
        listBoxProps,
        necessityIndicator,
        placeholder,
        popoverProps,
        prefix,
        size: sizeProp,
        style: styleProp,
        triggerProps,
        footerProps,
        ...otherProps
    } = ownProps;
    const inputRef = useObjectRef(mergeRefs(userProvidedInputRef, props.inputRef ?? null));
    const inputContext = useSlottedContext(InputContext);
    // Make sure to merge the input ref with the context ref from the InputContext.
    const mergedInputRefs = inputContext?.ref ? mergeRefs(inputRef, inputContext.ref) : inputRef;
    const triggerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Make menu width match trigger width.
    const [triggerWidth, setTriggerWidth] = useState<string | null>(null);
    const onResize = useCallback(() => {
        if (triggerRef.current) {
            setTriggerWidth(triggerRef.current.offsetWidth + "px");
        }
    }, [triggerRef]);

    useResizeObserver({
        ref: triggerRef,
        onResize: onResize
    });

    const { stylingProps: triggerStylingProps, ...triggerOwnProps } = useStyledSystem(triggerProps ?? {});
    const {
        className: triggerClassName,
        style: triggerStyleProp,
        ...otherTriggerProps
    } = triggerOwnProps;
    const { stylingProps: popoverStylingProps, ...popoverOwnProps } = useStyledSystem(popoverProps ?? {});
    const {
        placement = "bottom start",
        style: popoverStyleProp,
        ...otherPopoverProps
    } = popoverOwnProps;

    const size = useResponsiveValue(sizeProp) ?? "sm";
    const isFluid = useResponsiveValue(isFluidProp) ?? false;

    const classNames = composeClassnameRenderProps(
        className,
        GlobalComboBoxCssSelector,
        cssModule(
            styles,
            "hop-ComboBox",
            isFluid && "fluid",
            size
        ),
        stylingProps.className
    );

    const triggerClassNames = composeClassnameRenderProps(
        triggerClassName,
        cssModule(
            styles,
            "hop-ComboBox__trigger",
            size
        ),
        triggerStylingProps.className
    );

    const buttonClassNames = composeClassnameRenderProps(
        cssModule(
            styles,
            "hop-ComboBox__button"
        )
    );

    const inputClassNames = composeClassnameRenderProps(
        inputContext?.className,
        styles["hop-ComboBox__input"]
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

    const popoverStyle = composeRenderProps(popoverStyleProp, prev => {
        return {
            ...popoverStylingProps.style,
            ...prev,
            "--custom-trigger-width": triggerWidth
        };
    });

    const handleMouseDown: MouseEventHandler<HTMLDivElement> = useCallback(e => {
        // If the input or button is the one that is clicked, we don't want to focus it since it's already done.
        if (inputRef.current && e.target !== inputRef.current && buttonRef.current && e.target !== buttonRef.current) {
            // forwards the focus to the input element when clicking on the input group.
            inputRef.current.focus();
            // This ensures that the input does not lose focus when clicking on the input group.
            e.preventDefault();
        }
    }, [inputRef]);

    const prefixMarkup = prefix ? (
        <SlotProvider values={[
            [TextContext, { size, className: styles["hop-ComboBox__prefix"] }],
            [IconContext, { size, className: styles["hop-ComboBox__prefix"] }]
        ]}
        >
            <ClearContainerSlots>
                <EnsureTextWrapper>{prefix}</EnsureTextWrapper>
            </ClearContainerSlots>
        </SlotProvider>
    ) : null;

    const footerMarkup = footer ? (
        <SlotProvider values={[
            [TextContext, { size, className: styles["hop-ComboBox__footer-text"] }]
        ]}
        >
            <ClearProviders
                values={[
                    RACTextContext,
                    TextContext,
                    RACButtonContext as Context<ContextValue<unknown, HTMLElement>>
                ]}
            >
                <Footer {...footerProps}>
                    <EnsureTextWrapper>{footer}</EnsureTextWrapper>
                </Footer>
            </ClearProviders>
        </SlotProvider>
    ) : null;

    return (
        <RACComboBox
            ref={ref}
            className={classNames}
            style={style}
            isInvalid={isInvalid}
            isRequired={isRequired}
            menuTrigger={menuTrigger}
            {...otherProps}
        >
            {comboBoxRenderProps => {
                const { isOpen } = comboBoxRenderProps;
                const ButtonIcon = isOpen ? AngleUpIcon : AngleDownIcon;

                return (
                    <>
                        <SlotProvider values={[
                            [LabelContext, {
                                className: styles["hop-ComboBox__label"],
                                isRequired,
                                necessityIndicator
                            }],
                            [HelperMessageContext, {
                                className: styles["hop-ComboBox__helper-message"]
                            }],
                            [ErrorMessageContext, {
                                className: styles["hop-ComboBox__error-message"]
                            }]
                        ]}
                        >
                            {fieldChildren}
                        </SlotProvider>
                        <Group
                            ref={triggerRef}
                            className={triggerClassNames}
                            style={triggerStyle}
                            onMouseDown={handleMouseDown}
                            data-selected={isOpen || undefined}
                            {...otherTriggerProps}
                        >
                            {prefixMarkup}
                            <Input
                                ref={mergedInputRefs}
                                className={inputClassNames}
                                placeholder={placeholder}
                            />
                            <Button className={buttonClassNames} ref={buttonRef}>
                                <ButtonIcon size="sm" className={styles["hop-ComboBox__button-icon"]} />
                            </Button>
                        </Group>
                        <Popover
                            placement={placement}
                            isNonDialog
                            isAutoWidth={isAutoMenuWidth}
                            style={popoverStyle}
                            triggerRef={triggerRef}
                            {...otherPopoverProps}
                        >
                            <SlotProvider values={[
                                [BadgeContext, {
                                    variant: "secondary"
                                }]
                            ]}
                            >
                                <ListBox items={items} size={size} isInvalid={isInvalid} {...listBoxProps}>
                                    {children}
                                </ListBox>
                            </SlotProvider>

                            {footerMarkup}
                        </Popover>
                    </>
                );
            }}
        </RACComboBox>
    );
}
const _ComboBox = forwardRef(ComboBox) as <T extends object>(
    props: ComboBoxProps<T> & { ref?: ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof ComboBox>;
(_ComboBox as NamedExoticComponent).displayName = "ComboBox";

/**
 * Combo box components enable users to choose a single option from a collapsible list, optimizing space efficiency.
 *
 * [View Documentation](TODO)
 */
const CompoundComboBox = Object.assign(_ComboBox, {
    /**
     * A combo box option is an item that is displayed in a combo box.
     *
     * [View Documentation](TODO)
     */
    Option: ListBoxItem
});

export { CompoundComboBox as ComboBox };

import { IconContext } from "@hopper-ui/icons";
import { useResponsiveValue, useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { mergeRefs, useObjectRef, useResizeObserver } from "@react-aria/utils";
import { forwardRef, useCallback, useRef, useState, type ForwardedRef, type MutableRefObject, type NamedExoticComponent, type ReactNode } from "react";
import {
    composeRenderProps,
    Button as RACButton,
    ButtonContext as RACButtonContext,
    ComboBox as RACComboBox,
    TextContext as RACTextContext,
    useContextProps,
    useSlottedContext,
    type ComboBoxProps as RACComboBoxProps,
    type GroupProps as RACGroupProps
} from "react-aria-components";

import { BadgeContext } from "../../Badge/index.ts";
import { ErrorMessage } from "../../ErrorMessage/index.ts";
import { useFormProps } from "../../Form/index.ts";
import { HelperMessage } from "../../HelperMessage/index.ts";
import { Input, InputContext, InputGroup } from "../../inputs/index.ts";
import { Footer } from "../../layout/index.ts";
import { ListBox, ListBoxItem, type ListBoxItemProps, type ListBoxProps, type SelectionIndicator } from "../../ListBox/index.ts";
import { ListBoxSection, type ListBoxSectionProps } from "../../ListBoxSection/index.ts";
import { Popover, type PopoverProps } from "../../overlays/index.ts";
import { ToggleArrow } from "../../ToggleArrow/index.ts";
import { Label, TextContext } from "../../typography/index.ts";
import { ClearContainerSlots, ClearProviders, composeClassnameRenderProps, cssModule, ensureTextWrapper, SlotProvider, type FieldProps, type MenuAlignment, type MenuDirection } from "../../utils/index.ts";

import { ComboBoxContext } from "./ComboBoxContext.ts";

import styles from "./ComboBox.module.css";

export const GlobalComboBoxCssSelector = "hop-ComboBox";

export type ComboBoxTriggerProps = StyledComponentProps<RACGroupProps>;

export interface ComboBoxProps<T extends object> extends StyledComponentProps<Omit<RACComboBoxProps<T>, "children">>, FieldProps {
    /**
     * The alignment of the menu.
     * @default "start"
     */
    align?: ResponsiveProp<MenuAlignment>;
    /**
     * The items of the combo box.
     */
    children: ReactNode | ((item: T) => ReactNode);
    /**
     * The direction that the menu should open.
     * @default "bottom"
     */
    direction?: ResponsiveProp<MenuDirection>;
    /**
     * The footer of the combo box.
     */
    footer?: ReactNode;
    /**
     * If `true`, the combo box menu will not be the width of the trigger and instead be the width of its contents.
     */
    isAutoMenuWidth?: boolean;
    /**
     * A ref for the HTML input element.
     */
    inputRef?: MutableRefObject<HTMLInputElement | null>;
    /**
     * If `true`, the select will take all available width.
     * @default false
     */
    isFluid?: ResponsiveProp<boolean>;
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
    triggerProps?: ComboBoxTriggerProps;
}

function ComboBox<T extends object>(props: ComboBoxProps<T>, ref: ForwardedRef<HTMLDivElement>) {
    // we extract the inputRef props, since we want to manually merge it with the context props.
    const {
        inputRef: userProvidedInputRef = null,
        ...propsWithoutRef
    } = props;
    [props, ref] = useContextProps(propsWithoutRef, ref, ComboBoxContext);
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
        isDisabled,
        isFluid: isFluidProp,
        isInvalid,
        isLoading,
        isRequired,
        items,
        label,
        listBoxProps,
        menuTrigger = "focus",
        necessityIndicator,
        onLoadMore,
        popoverProps,
        placeholder,
        prefix,
        selectionIndicator,
        shouldFlip,
        size: sizeProp,
        style: styleProp,
        triggerProps,
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

    const {
        style: popoverStyleProp
    } = popoverProps ?? {};

    const size = useResponsiveValue(sizeProp) ?? "md";
    const isFluid = useResponsiveValue(isFluidProp) ?? false;
    const align = useResponsiveValue(alignProp) ?? "start";
    const direction = useResponsiveValue(directionProp) ?? "bottom";

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
            ...prev,
            "--custom-trigger-width": triggerWidth
        };
    });

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

    const prefixMarkup = prefix ? (
        <SlotProvider values={[
            [TextContext, { size, className: styles["hop-ComboBox__prefix"] }],
            [IconContext, { size, className: styles["hop-ComboBox__prefix"] }]
        ]}
        >
            <ClearContainerSlots>
                {ensureTextWrapper(prefix)}
            </ClearContainerSlots>
        </SlotProvider>
    ) : null;

    return (
        <RACComboBox
            ref={ref}
            className={classNames}
            style={style}
            isInvalid={isInvalid}
            isRequired={isRequired}
            items={items}
            menuTrigger={menuTrigger}
            isDisabled={isDisabled}
            {...otherProps}
        >
            {comboBoxRenderProps => {
                const { isOpen } = comboBoxRenderProps;

                return (
                    <>
                        {label && (
                            <Label
                                className={styles["hop-ComboBox__label"]}
                                isRequired={isRequired}
                                necessityIndicator={necessityIndicator}
                            >
                                {label}
                            </Label>
                        )}
                        <InputGroup
                            ref={triggerRef}
                            className={triggerClassNames}
                            style={triggerStyle}
                            data-selected={isOpen || undefined}
                            isFluid
                            isDisabled={isDisabled}
                            isInvalid={isInvalid}
                            {...otherTriggerProps}
                        >
                            {prefixMarkup}
                            <Input
                                ref={mergedInputRefs}
                                className={inputClassNames}
                                placeholder={placeholder}
                                size={size}
                            />
                            <RACButton
                                className={buttonClassNames}
                                ref={buttonRef}
                                // Prevent press scale from sticking while ComboBox is open.
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                isPressed={false}
                            >
                                <ToggleArrow
                                    className={styles["hop-ComboBox__button-icon"]}
                                    isExpanded={isOpen}
                                />
                            </RACButton>
                        </InputGroup>
                        {description && (
                            <HelperMessage className={styles["hop-ComboBox__helper-message"]}>
                                {description}
                            </HelperMessage>
                        )}
                        <ErrorMessage className={styles["hop-ComboBox__error-message"]}>
                            {errorMessage}
                        </ErrorMessage>
                        <Popover
                            isAutoWidth={isAutoMenuWidth}
                            isNonDialog
                            placement={`${direction} ${align}`}
                            shouldFlip={shouldFlip}
                            style={popoverStyle}
                            triggerRef={triggerRef}
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
                    </>
                );
            }}
        </RACComboBox>
    );
}

/**
 * Combo box components enable users to choose a single option from a collapsible list, optimizing space efficiency.
 *
 * [View Documentation](https://hopper.workleap.design/components/ComboBox)
 */
const _ComboBox = forwardRef(ComboBox) as <T extends object>(
    props: ComboBoxProps<T> & { ref?: ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof ComboBox>;
(_ComboBox as NamedExoticComponent).displayName = "ComboBox";

export const ComboBoxItem = ListBoxItem;
export type ComboBoxItemProps<T> = ListBoxItemProps<T>;
export const ComboBoxSection = ListBoxSection;
export type ComboBoxSectionProps<T> = ListBoxSectionProps<T>;

export { _ComboBox as ComboBox };

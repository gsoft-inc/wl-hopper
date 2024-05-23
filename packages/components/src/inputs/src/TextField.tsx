import { IconContext } from "@hopper-ui/icons";
import { useResponsiveValue, useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { mergeRefs } from "@react-aria/utils";
import { useControlledState } from "@react-stately/utils";
import { forwardRef, useCallback, useState, type ForwardedRef, type MutableRefObject, type ReactNode } from "react";
import { useObjectRef } from "react-aria";
import { composeRenderProps, Input, useContextProps, type TextFieldProps as RACTextFieldProps, TextField as RACTextField } from "react-aria-components";

import { ClearButton } from "../../buttons/index.ts";
import { ErrorMessageContext } from "../../errorMessage/index.ts";
import { HelperMessageContext } from "../../helperMessage/index.ts";
import { useLocalizedString } from "../../i18n/index.ts";
import { LabelContext } from "../../Label/index.ts";
import { Text, TextContext } from "../../Text/index.ts";
import { ClearContainerSlots, composeClassnameRenderProps, cssModule, isTextOnlyChildren, SlotProvider } from "../../utils/index.ts";

import { InputGroup } from "./InputGroup.tsx";
import { TextFieldContext } from "./TextFieldContext.ts";

import styles from "./TextField.module.css";

export const GlobalTextFieldCssSelector = "hop-TextField";

export interface TextFieldProps extends StyledComponentProps<RACTextFieldProps> {
    prefix?: ReactNode;

    showCharacterCount?: boolean;
    /**
     * Whether the TextField is clearable.
     */
    isClearable?: boolean;

    /**
     * The placeholder text when the TextField is empty.
     */
    placeholder?: string;

    /**
     * The size of the TextField.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;

    /**
     * Handler that is called when the clear button is pressed.
     */
    onClear?: () => void;

    /**
     * If `true`, the TextField will take all available width.
     */
    isFluid?: ResponsiveProp<boolean>;

    /**
     * A ref for the HTML input element.
     */
    inputRef?: MutableRefObject<HTMLInputElement>;
}

function TextField(props:TextFieldProps, ref: ForwardedRef<HTMLDivElement>) {
    // we extract the inputRef props, since we want to manually merge it with the context props.
    const {
        inputRef: userProvidedInputRef = null,
        ...propsWithoutRef
    } = props;
    [props, ref] = useContextProps(propsWithoutRef, ref, TextFieldContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);

    const [characterCount, setCharacterCount] = useState(() => props.value?.length ?? props.defaultValue?.length ?? 0);

    const {
        className,
        style: styleProp,
        size,
        prefix,
        showCharacterCount,
        maxLength,
        placeholder,
        isClearable,
        onChange: onChangeProp,
        children,
        onClear,
        defaultValue,
        value: valueProp,
        isFluid: isFluidProp,
        ...otherProps
    } = ownProps;

    const inputRef = useObjectRef(mergeRefs(userProvidedInputRef, props.inputRef !== undefined ? props.inputRef : null));
    const isFluid = useResponsiveValue(isFluidProp) ?? false;

    const classNames = composeClassnameRenderProps(
        className,
        GlobalTextFieldCssSelector,
        cssModule(
            styles,
            "hop-TextField",
            isClearable && "clearable",
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

    const handleTextChanged = useCallback((value: string) => {
        setCharacterCount(value.length);

        onChangeProp?.(value);
    }, [onChangeProp]);

    const [value, onChange] = useControlledState<string>(valueProp, defaultValue || "", handleTextChanged);

    const handleClear = useCallback(() => {
        onChange("");
        onClear?.();
    }, [onChange, onClear]);

    const showClearButton = isClearable && characterCount !== 0;
    if (showCharacterCount && !maxLength) {
        console.warn("If showCharacterCount is true, maxLength must be set to the maximum number of characters allowed in the TextField.");
    }

    const prefixMarkup = prefix ? (
        <SlotProvider values={[
            [TextContext, { size, className: styles["hop-TextField__prefix"] }],
            [IconContext, { size, className: styles["hop-TextField__prefix"] }]
        ]}
        >
            {isTextOnlyChildren(prefix) ? <Text>{prefix}</Text> : prefix}
        </SlotProvider>
    ) : null;
    const inputMarkup = (
        <ClearContainerSlots>
            <InputGroup isFluid={isFluid} size={size} className={styles["hop-TextField__InputGroup"]}>
                {prefixMarkup}
                <Input ref={inputRef} placeholder={placeholder} />

                {showCharacterCount && maxLength && <CharacterCount characterLeft={maxLength - characterCount} />}
                {showClearButton && <ClearButton size="lg" onPress={handleClear} />}
            </InputGroup>
        </ClearContainerSlots>
    );

    const childrenMarkup = composeRenderProps(children, prev => {
        return (
            <>
                <SlotProvider values={[
                    [LabelContext, { className: styles["hop-TextField__Label"] }],
                    [HelperMessageContext, { className: styles["hop-TextField__HelperMessage"] }],
                    [ErrorMessageContext, { className: styles["hop-TextField__ErrorMessage"] }]
                ]}
                >
                    {prev}
                </SlotProvider>
                {inputMarkup}
            </>
        );
    });

    return (
        <RACTextField
            ref={ref}
            value={value}
            style={style}
            className={classNames}
            maxLength={maxLength}
            onChange={onChange}
            {...otherProps}
        >
            {childrenMarkup}
        </RACTextField>
    );
}

interface CharacterCountProps {
    characterLeft: number;
}

function CharacterCount({ characterLeft }: CharacterCountProps) {
    const stringFormatter = useLocalizedString();

    const accessibilityString = stringFormatter.format("Input.charactersLeft", { charLeft: characterLeft });

    return <Text aria-label={accessibilityString} color="neutral-weakest" size="xs">{characterLeft}</Text>;
}

/**
 * A text field allows a user to enter a plain text value with a keyboard.
 *
 * [View Documentation](TODO)
 */
const _TextField = forwardRef<HTMLDivElement, TextFieldProps>(TextField);
_TextField.displayName = "TextField";

export { _TextField as TextField };

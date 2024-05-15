import { DismissIcon, IconContext } from "@hopper-ui/icons";
import { useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { forwardRef, useCallback, useMemo, useState, type ForwardedRef, type ReactNode } from "react";
import { chain } from "react-aria";
import { useControlledState } from "@react-stately/utils";
import { composeRenderProps, Input, useContextProps, type TextFieldProps as RACTextFieldProps, TextField as RACTextField } from "react-aria-components";

import { Button, type ButtonProps } from "../../buttons/index.ts";
import { ErrorMessageContext } from "../../errorMessage/index.ts";
import { HelperMessageContext } from "../../helperMessage/index.ts";
import { LabelContext } from "../../Label/index.ts";
import { Text, TextContext } from "../../Text/index.ts";
import { ClearContainerSlots, composeClassnameRenderProps, cssModule, isTextOnlyChildren, SlotProvider } from "../../utils/index.ts";

import { InputGroup } from "./InputGroup.tsx";
import { TextFieldContext } from "./TextFieldContext.ts";

import styles from "./TextField.module.css";
import { useLocalizedString } from "../../i18n/index.ts";

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
    onClear?:	() => void
}

function TextField(props:TextFieldProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, TextFieldContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);


    const [characterCount, setCharacterCount] = useState(props.value?.length ?? 0);

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
        ...otherProps
    } = ownProps;

    const classNames = composeClassnameRenderProps(
        className,
        GlobalTextFieldCssSelector,
        cssModule(
            styles,
            "hop-TextField",
            isClearable && "clearable"
        ),
        stylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    const handleTextChanged = (value: string) => {
        setCharacterCount(value.length);

        onChangeProp?.(value);
    };

    const [value, onChange] = useControlledState<string>(valueProp, defaultValue || '', handleTextChanged);

    const handleClear = useCallback(() => {
        onChange("");
        onClear?.()
    }, [onChange, onClear]);

    const showClearButton = isClearable && characterCount !== 0;
    if (showCharacterCount && !maxLength) {
        console.warn("If showCharacterCount is true, maxLength must be set to the maximum number of characters allowed in the TextField.");
    }

    const prefixMarkup = isTextOnlyChildren(prefix) ? <Text>{prefix}</Text> : prefix;

    const inputMarkup = (
        <ClearContainerSlots>
            <InputGroup size={size} className={styles["hop-TextField__InputGroup"]}>
                <SlotProvider values={[
                    [TextContext, { size, className: styles["hop-TextField__prefix"] }],
                    [IconContext, { size, className: styles["hop-TextField__prefix"] }]
                ]}
                >
                    {prefixMarkup}
                </SlotProvider>
                <Input placeholder={placeholder} />

                {showClearButton && <CrossButton onPress={handleClear} />}
                {showCharacterCount && maxLength && <CharacterCount characterLeft={maxLength - characterCount} />}
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
        <RACTextField value={value} style={style} className={classNames} maxLength={maxLength} onChange={onChange} {...otherProps}>
            {childrenMarkup}
        </RACTextField>
    );
}

interface CharacterCountProps {
    characterLeft: number;
}

function CharacterCount({ characterLeft }: CharacterCountProps) {
    const stringFormatter = useLocalizedString();

    const accessibilityString = stringFormatter.format("Input.charactersLeft", {charLeft: characterLeft})

    return <Text aria-label={accessibilityString} color="neutral-weakest" size="xs">{characterLeft}</Text>;
}

function CrossButton(props: Omit<ButtonProps, "children">) {
    // TODO
    return (
        <Button size="sm" variant="ghost-secondary" aria-label="TODO" {...props}><DismissIcon /></Button>
    );
}

/**
 * TODO: tagline
 *
 * [View Documentation](TODO)
 */
const _TextField = forwardRef<HTMLDivElement, TextFieldProps>(TextField);
_TextField.displayName = "TextField";

export { _TextField as TextField };

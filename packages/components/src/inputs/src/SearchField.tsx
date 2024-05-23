import { IconContext, SearchIcon } from "@hopper-ui/icons";
import { useResponsiveValue, useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { mergeRefs } from "@react-aria/utils";
import { forwardRef, type ForwardedRef, type MutableRefObject } from "react";
import { useObjectRef } from "react-aria";
import { composeRenderProps, Input, useContextProps, type SearchFieldProps as RACSearchFieldProps, SearchField as RACSearchField } from "react-aria-components";

import { ClearButton } from "../../buttons/index.ts";
import { ErrorMessageContext } from "../../errorMessage/index.ts";
import { HelperMessageContext } from "../../helperMessage/index.ts";
import { LabelContext } from "../../Label/index.ts";
import { ClearContainerSlots, composeClassnameRenderProps, cssModule, SlotProvider } from "../../utils/index.ts";

import { InputGroup } from "./InputGroup.tsx";
import { SearchFieldContext } from "./SearchFieldContext.ts";

import styles from "./SearchField.module.css";

export const GlobalSearchFieldCssSelector = "hop-SearchField";

export interface SearchFieldProps extends StyledComponentProps<RACSearchFieldProps> {

    /**
     * Whether the SearchField is clearable.
     * @default true
     */
    isClearable?: boolean;

    /**
     * The placeholder text when the SearchField is empty.
     */
    placeholder?: string;

    /**
     * The size of the SearchField.
     * @default "md"
     */
    size?: ResponsiveProp<"sm" | "md">;

    /**
     * If `true`, the SearchField will take all available width.
     */
    isFluid?: ResponsiveProp<boolean>;

    /**
     * An icon to display at the start of the input.
     */
    icon?: React.ReactNode | null;

    /**
     * A ref for the HTML input element.
     */
    inputRef?: MutableRefObject<HTMLInputElement>;
}

function SearchField(props:SearchFieldProps, ref: ForwardedRef<HTMLDivElement>) {
    // we extract the inputRef props, since we want to manually merge it with the context props.
    const {
        inputRef: userProvidedInputRef = null,
        ...propsWithoutRef
    } = props;
    [props, ref] = useContextProps(propsWithoutRef, ref, SearchFieldContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);

    const {
        className,
        style: styleProp,
        size,
        placeholder,
        isClearable = true,
        children,
        isFluid: isFluidProp,
        icon = <SearchIcon />,
        ...otherProps
    } = ownProps;

    const inputRef = useObjectRef(mergeRefs(userProvidedInputRef, props.inputRef !== undefined ? props.inputRef : null));
    const isFluid = useResponsiveValue(isFluidProp) ?? false;

    const classNames = composeClassnameRenderProps(
        className,
        GlobalSearchFieldCssSelector,
        cssModule(
            styles,
            "hop-SearchField",
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

    const inputMarkup = (
        <ClearContainerSlots>
            <InputGroup isFluid={isFluid} size={size} className={styles["hop-SearchField__InputGroup"]}>
                <SlotProvider values={[
                    [IconContext, {
                        className: styles["hop-SearchField__prefix"]
                    }]
                ]}
                >
                    {icon}
                </SlotProvider>
                <Input ref={inputRef} placeholder={placeholder} />
                {isClearable && <ClearButton size="lg" className={styles["hop-SearchField__ClearButton"]} />}
            </InputGroup>
        </ClearContainerSlots>
    );

    const childrenMarkup = composeRenderProps(children, prev => {
        return (
            <>
                <SlotProvider values={[
                    [LabelContext, { className: styles["hop-SearchField__Label"] }],
                    [HelperMessageContext, { className: styles["hop-SearchField__HelperMessage"] }],
                    [ErrorMessageContext, { className: styles["hop-SearchField__ErrorMessage"] }]
                ]}
                >
                    {prev}
                </SlotProvider>
                {inputMarkup}
            </>
        );
    });

    return (
        <RACSearchField ref={ref} style={style} className={classNames} {...otherProps}>
            {childrenMarkup}
        </RACSearchField>
    );
}


/**
 * A specialized text input for [search input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search).
 *
 * [View Documentation](TODO)
 */
const _SearchField = forwardRef<HTMLDivElement, SearchFieldProps>(SearchField);
_SearchField.displayName = "SearchField";

export { _SearchField as SearchField };

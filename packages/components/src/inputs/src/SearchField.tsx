import { SearchIcon } from "@hopper-ui/icons";
import { useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
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
}

function SearchField(props:SearchFieldProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, SearchFieldContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);

    const {
        className,
        style: styleProp,
        size,
        placeholder,
        isClearable = true,
        children,
        ...otherProps
    } = ownProps;

    const classNames = composeClassnameRenderProps(
        className,
        GlobalSearchFieldCssSelector,
        cssModule(
            styles,
            "hop-SearchField"
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
            <InputGroup size={size} className={styles["hop-SearchField__InputGroup"]}>
                <SearchIcon className={styles["hop-SearchField__prefix"]} />
                <Input placeholder={placeholder} />
                {isClearable && <ClearButton className={styles["hop-SearchField__ClearButton"]} />}
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
        <RACSearchField style={style} className={classNames} {...otherProps}>
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

import { type StyledComponentProps, useStyledSystem } from "@hopper-ui/styled-system";
import { forwardRef, type ForwardedRef } from "react";
import { useContextProps, TagList as RACTagList, type TagListProps as RACTagListProps, type SlotProps, composeRenderProps } from "react-aria-components";

import { composeClassnameRenderProps } from "../../utils/index.ts";

import { TagListContext } from "./TagListContext.ts";

export const GlobalTagListCssSelector = "hop-TagList";

// Won't be needed in next react-aria-components release: https://github.com/adobe/react-spectrum/pull/5850
const DefaultTagListSlot = "tagList";

export interface TagListProps<T> extends StyledComponentProps<RACTagListProps<T>>, SlotProps {}

function TagList<T extends object>(props: TagListProps<T>, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultTagListSlot }, ref, TagListContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        style: styleProp,
        ...otherProps
    } = ownProps;

    const classNames = composeClassnameRenderProps(
        className,
        GlobalTagListCssSelector,
        stylingProps.className
    );

    const style = composeRenderProps(styleProp, prev => {
        return {
            ...stylingProps.style,
            ...prev
        };
    });

    return (
        <RACTagList
            {...otherProps}
            ref={ref}
            className={classNames}
            style={style}
        >
            {children}
        </RACTagList>
    );
}

/**
 * A versatile TagList component for categorizing items in a TagListList, equipped with a remove button for easy management.
 *
 * [View Documentation](TODO)
 */
const _TagList = forwardRef<HTMLDivElement, TagListProps<object>>(TagList);
_TagList.displayName = "TagList";

export { _TagList as TagList };

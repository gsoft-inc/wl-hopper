import { type StyledComponentProps, useStyledSystem } from "@hopper-ui/styled-system";
import { type ForwardedRef, forwardRef } from "react";
import { TagList as RACTagList, type TagListProps as RACTagListProps, composeRenderProps, useContextProps } from "react-aria-components";

import { composeClassnameRenderProps } from "../../utils/index.ts";

import { TagListContext } from "./TagListContext.ts";

export const GlobalTagListCssSelector = "hop-TagList";

export interface TagListProps<T> extends StyledComponentProps<RACTagListProps<T>> {}

function TagList<T extends object>(props: TagListProps<T>, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, TagListContext);
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
        "hop-TagList",
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
            ref={ref}
            className={classNames}
            style={style}
            {...otherProps}
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

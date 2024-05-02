import { type StyledComponentProps, useStyledSystem } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { type CSSProperties, forwardRef, type ForwardedRef } from "react";
import { useContextProps, TagGroup as RACTagGroup, type TagGroupProps as RACTagGroupProps } from "react-aria-components";

import { TagGroupContext } from "./TagGroupContext.ts";

export const GlobalTagGroupCssSelector = "hop-TagGroup";

// Won't be needed in next react-aria-components release: https://github.com/adobe/react-spectrum/pull/5850
const DefaultTagGroupSlot = "tagGroup";

type PropsToOmit = "selectionBehavior | selectionMode | disallowEmptySelection | selectedKeys | defaultSelectedKeys | onSelectionChange";

export interface TagGroupProps extends StyledComponentProps<Omit<RACTagGroupProps, PropsToOmit>> {}

function TagGroup(props: TagGroupProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps({ ...props, slot: props.slot || DefaultTagGroupSlot }, ref, TagGroupContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        style: styleProp,
        ...otherProps
    } = ownProps;

    const classNames = clsx(
        className,
        GlobalTagGroupCssSelector,
        stylingProps.className
    );

    const style: CSSProperties = {
        ...stylingProps.style,
        ...styleProp
    };

    return (
        <RACTagGroup
            {...otherProps}
            ref={ref}
            className={classNames}
            style={style}
            selectionMode="none"
        >
            {children}
        </RACTagGroup>
    );
}

/**
 * A versatile TagGroup component for categorizing items in a TagGroupList, equipped with a remove button for easy management.
 *
 * [View Documentation](TODO)
 */
const _TagGroup = forwardRef<HTMLDivElement, TagGroupProps>(TagGroup);
_TagGroup.displayName = "TagGroup";

export { _TagGroup as TagGroup };

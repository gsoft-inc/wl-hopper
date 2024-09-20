import { useResponsiveValue, useStyledSystem, type ResponsiveProp, type StyledSystemProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { forwardRef, type CSSProperties, type ForwardedRef } from "react";
import { useContextProps } from "react-aria-components";

import { cssModule, type BaseComponentDOMProps } from "../../utils/index.ts";

import { ListBoxItemSkeletonContext } from "./ListBoxItemSkeletonContext.ts";

import styles from "./ListBoxItemSkeleton.module.css";

export const GlobalListBoxItemSkeletonCssSelector = "hop-ListBoxItemSkeleton";

export type ListBoxItemSize = "xs" | "sm" | "md" | "lg";

export interface ListBoxItemSkeletonProps extends StyledSystemProps, BaseComponentDOMProps {
    /**
     * A ListBoxItem can vary in size.
     * @default "sm"
     */
    size?: ResponsiveProp<ListBoxItemSize>;
}

function ListBoxItemSkeleton(props: ListBoxItemSkeletonProps, ref: ForwardedRef<HTMLDivElement>) {
    [props, ref] = useContextProps(props, ref, ListBoxItemSkeletonContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        size: sizeProp,
        style: styleProp,
        slot,
        ...otherProps
    } = ownProps;

    const size = useResponsiveValue(sizeProp) ?? "sm";

    const classNames = clsx(
        className,
        GlobalListBoxItemSkeletonCssSelector,
        cssModule(
            styles,
            "hop-ListBoxItemSkeleton",
            size
        ),
        stylingProps.className
    );

    const style: CSSProperties = {
        ...stylingProps.style,
        ...styleProp
    };

    return (
        <div
            {...otherProps}
            ref={ref}
            className={classNames}
            style={style}
            slot={slot ?? undefined}
        />
    );
}

/**
 * A ListBoxItem represents an item within a ListBox component.
 *
 * [View Documentation](TODO)
 */
const _ListBoxItemSkeleton = forwardRef<HTMLDivElement, ListBoxItemSkeletonProps>(ListBoxItemSkeleton);
_ListBoxItemSkeleton.displayName = "ListBoxItemSkeleton";

export { _ListBoxItemSkeleton as ListBoxItemSkeleton };

import { useResponsiveValue, useStyledSystem, type ResponsiveProp, type StyledComponentProps } from "@hopper-ui/styled-system";
import clsx from "clsx";
import { Children, forwardRef, type CSSProperties, type ForwardedRef } from "react";
import { Provider, ToggleButtonGroup, useContextProps, type Key } from "react-aria-components";

import { cssModule, type BaseComponentDOMProps } from "../../utils/index.ts";

import { InternalTileContext } from "./TileContext.ts";
import { TileGroupContext } from "./TileGroupContext.ts";

import styles from "./TileGroup.module.css";

export const GlobalTileGroupCssSelector = "hop-TileGroup";

export interface TileGroupProps extends
    StyledComponentProps<BaseComponentDOMProps> {
    /**
    *  Whether the segmented control is disabled.
    */
    isDisabled?: boolean;
    /**
     * The id of the currently selected item (controlled).
     */
    selectedKey?: Key;
    /**
     * The id of the initial selected item (uncontrolled).
     */
    defaultSelectedKey?: Key;
    /**
     * Handler that is called when the selection changes.
     */
    onSelectionChange?: (id: Key) => void;
    /**
     * The number of columns to display the tiles in.
     * @default 3
     */
    numberOfColumns?: ResponsiveProp<number>;
}

const TileGroup = (props: TileGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
    [props, ref] = useContextProps(props, ref, TileGroupContext);
    const { stylingProps, ...ownProps } = useStyledSystem(props);
    const {
        className,
        children,
        style,
        slot,
        isDisabled,
        selectedKey,
        defaultSelectedKey,
        onSelectionChange,
        numberOfColumns = 3,
        ...otherProps
    } = ownProps;

    const columns = useResponsiveValue(numberOfColumns);

    const classNames = clsx(
        GlobalTileGroupCssSelector,
        cssModule(
            styles,
            "hop-TileGroup"
        ),
        stylingProps.className,
        className
    );

    const mergedStyles: CSSProperties = {
        ...style,
        ...{
            gridTemplateColumns: `repeat(${columns}, 1fr)`
        },
        ...stylingProps.style
    };

    const onChange = (values: Set<Key>) => {
        const [firstKey] = values;

        if (!firstKey) {
            return;
        }

        onSelectionChange?.(firstKey);
    };

    if (Children.count(children) < 2) {
        console.warn("A TileGroup must have at least 2 Tiles.");
    }

    return (
        <ToggleButtonGroup
            ref={ref}
            className={classNames}
            style={mergedStyles}
            slot={slot ?? undefined}
            isDisabled={isDisabled}
            orientation="horizontal"
            onSelectionChange={onChange}
            selectedKeys={selectedKey != null ? [selectedKey] : undefined}
            defaultSelectedKeys={defaultSelectedKey != null ? [defaultSelectedKey] : undefined}
            {...otherProps}
        >
            <Provider
                values={[
                    [InternalTileContext, { isDisabled: isDisabled }]
                ]}
            >
                {children}
            </Provider>
        </ToggleButtonGroup>
    );
};

/**
 * TileGroup groups Tiles to let users browse and take action on a group of related items.
 *
 * [View Documentation](https://hopper.workleap.design/components/Tile)
 */
const _TileGroup = forwardRef<HTMLDivElement, TileGroupProps>(TileGroup);
_TileGroup.displayName = "TileGroup";

export { _TileGroup as TileGroup };
